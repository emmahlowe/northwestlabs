import React from "react";
import * as bs from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import AppContext from "./context";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_qu9L62DYHM3Y4FKgItfksa0E00Ugg2RiO6') 


function Checkout(props) {
  // we'll add Stripe's Elements component here later
  return (
    <Elements stripe={stripePromise}>
         <CheckoutController />
    </Elements>
    )
}
export default Checkout;

const CheckoutController = props => {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const context = React.useContext(AppContext);
  const total = context.getCartTotal()
  const [stripeError, setStripeError] = React.useState(null)

  return (
    <Formik
      initialValues={{
        //these should be blank for the user but are filled in for testing now
        name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: ""
      }}
      validateOnChange={false} //runs the validate method everytime the type a key into the field
      validateOnBlur={false} //when they leave the field validate
      validate={values => {
        //if both those are false it will validate at the end when they press sumbit
        const errors = {};
        if (!values.name) {
          errors.name = 'Please enter a Name'
        }
        if (!values.address1) {
          errors.address1 = 'Please enter an Address1'
        }
        if(!values.address2) {
          errors.address2 = 'Please enter an Address2'
        }
        if (!values.city) {
          errors.city = 'Please enter a City'
        }
        if (!values.state){
          errors.state = 'Please enter a State'
        }
        if(!values.zipcode){
          errors.zipcode = 'Please enter a Zipcode'
        }
        
        console.log("validating", values);
        return errors;
      }}
      onSubmit={async (values, actions) => { //get items from cart and post customer info and items in card to db using axios post method to API
        console.log("submit", values)
        setStripeError(null)

        //create the sales
        const items = []
        for (const [pid, qty] of Object.entries(context.cart)) {
          const product = context.products[pid]
          if (product) {
            items.push({
              pid: pid, 
              qty: qty, 
              price: product.price,
            })
          }
        }
        const resp = await axios.post('http://localhost:8000/api/createsale/', {
          name: values.name, 
          address1: values.address1, 
          address2: values.address2, 
          city: values.city, 
          state: values.state, 
          zipcode: values.zipcode, 
          total: context.getCartTotal(), 
          items: context.cart
        })
        console.log(resp.data)

        //submit the details to stripe
        const stripeResp = await stripe.confirmCardPayment(resp.data.client_secret, {
          payment_method:{
            card: elements.getElement(CardElement),
            billing_details: {
            name: values.name,
            },
          }
        })
        console.log(stripeResp)
        actions.setSubmitting(false)
        if (stripeResp.error) {
          setStripeError(stripeResp.error.message)
          return
        }
        //clear the card and forward on
        context.clearCart()
        history.push('/receipt')
      }}
      >{form => (
      <>
      {stripeError &&
      <div className="mb-3 text-center text-danger">{stripeError}</div>
      
      }
      <PaymentForm form={form} total={total} />}
      </>
      )}</Formik>
  );
};
/**
 * The form layout/html.
 * This component needs finishing.
 */

const PaymentForm = props => {
    const context = React.useContext(AppContext);
    return(
  <Form>
    <h1 className="text-left">Checkout</h1>
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <h5 className="card-header">Shipping</h5>
            <div className="card-body">
              <div className="form-group">
                <Input title="Name:" name="name" type="text" disabled={props.form.isSubmitting}/>
              </div>
              <div className="form-group">
                <Input title="Address 1:" name="address1" type="text" disabled={props.form.isSubmitting}/>
              </div>
              <div className="form-group">
                <Input title="Address 2:" name="address2" type="text" disabled={props.form.isSubmitting}/>
              </div>
              <div className="form-group">
                <Input title="City:" name="city" type="text" disabled={props.form.isSubmitting} />
              </div>
              <div className="form-group">
                <Input title="State:" name="state" type="text" disabled={props.form.isSubmitting}/>
              </div>
              <div className="form-group">
                <Input title="Zip Code:" name="zipcode" type="text" disabled={props.form.isSubmitting} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <h5 className="card-header">Payment</h5>
            <div className="card-body">
                <CardElement />
            </div>
          </div>
            <p>Your card will be charged ${context.getCartTotal()}</p>
            <bs.Button
              type="submit"
              disabled={props.form.isSubmitting}
              variant = "success"
              className="btn btn-success">
                {props.form.isSubmitting ? 
                <bs.Spinner animation="border"
                variant="secondary"
                size="sm"/> : null} Purchase
              </bs.Button>
            
        </div>
      </div>
    </div>
  </Form>
    )};


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input.
 * This component is finished and doesn't need additional work.
 */
const Input = props => (
  <Field name={props.name}>
    {rProps => (
      <bs.Form.Group>
        {props.title && <bs.Form.Label>{props.title}</bs.Form.Label>}
        <bs.Form.Control
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
          {...rProps.field}
        />
        {rProps.meta.touched && rProps.meta.error && (
          <div className="text-danger">{rProps.meta.error}</div>
        )}
      </bs.Form.Group>
    )}
  </Field>
);
