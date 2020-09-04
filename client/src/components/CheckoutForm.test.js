import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
render(<App/>)
const header = screen.getByText(/react plants/i)
expect(header).toBeTruthy()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText(/First Name:/i)
    expect(firstName).toBeTruthy()
    fireEvent.change(firstName, {target: { value:'Nam'}})

    const lastName = screen.getByLabelText(/Last Name:/i)
    expect(lastName).toBeTruthy()
    fireEvent.change(lastName, {target: { value:'Woo'}})

    const address = screen.getByLabelText(/Address:/i)
    expect(address).toBeTruthy()
    fireEvent.change(address, {target: { value:'1234 Sesame Street'}})

    const city = screen.getByLabelText(/City:/i)
    expect(city).toBeTruthy()
    fireEvent.change(city, {target: { value:'Sesame City'}})

    const state = screen.getByLabelText(/State:/i)
    expect(state).toBeTruthy()
    fireEvent.change(state, {target: { value:'1234 Sesame Street'}})

    const zip = screen.getByLabelText(/Zip:/i)
    expect(zip).toBeTruthy()
    fireEvent.change(zip, {target: { value:'1234 Sesame Street'}})

    const submit =screen.getByText(/Please Order/i)
    expect(submit).toBeTruthy()
    fireEvent.click(submit)

    const success = screen.getByText(/Successfully Ordered!/i)
    expect(success).toBeTruthy()
});
