import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import formSchema from '../validation/formSchema';

const initialForm = {
    name: "",
    size: "",
    pepperoni: false,
    peppers: false,
    onions: false,
    mushrooms: false,
    special: ""
}

const initialError = {
    name: "",
    size: "",
    pepperoni: "",
    peppers: "",
    onions: "",
    mushrooms: "",
    special: "" 
}

const OrderForm = (props) => {

    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState(initialError)   
    const [disabled, setDisabled] = useState(true)
    const { submitOrder } = props

    const formValidate = (event) => {
        yup.reach(formSchema, event.target.name)
        .validate(event.target.type === "checkbox" ? event.target.checked : event.target.value)
            .then(() => {
                setError({...error, [event.target.name]: ""})
            })
            .catch((error) => {
                setError({...error, [event.target.name]: error.errors[0]})
            })
    }

    const formChange = (event) => {
        // console.log(event.target);
        // console.log(event.target.name, event.target.value, event.target.checked);
        formValidate(event);
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setForm({...form, [event.target.name]: value})
    }

    const submitForm = (event) => {
        event.preventDefault();
        // console.log(form);
        submitOrder(form);
        console.log(form);
        setForm(initialForm);
    }

    useEffect(() => {
        formSchema.isValid(form).then((valid) => setDisabled(!valid));
        // console.log(form);
    }, [form])

    return (
        <>
            <section>
                <h1>What would you like on your pizza?</h1>
                <form id="pizza-form" onSubmit={submitForm}>
                    <div id="errors">
                        <h3>{error.name}</h3>
                        <h3>{error.size}</h3>
                        <h3>{error.pepperoni}</h3>
                        <h3>{error.peppers}</h3>
                        <h3>{error.onions}</h3>
                        <h3>{error.mushrooms}</h3>
                        <h3>{error.special}</h3>
                    </div>
                    <label>Please enter your name:
                        <input
                            id="name-input"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={formChange}
                        />
                    </label>
                    <label>Please select a size:
                        <select
                            id="size-dropdown"
                            name="size"
                            value={form.size}
                            onChange={formChange}
                        >
                            <option value=''>Select an option</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                            <option value='sheet'>Sheet</option>
                        </select>
                    </label>
                    <h3>Pizza toppings</h3>
                    <label>Pepperoni
                        <input
                            id="name-input"
                            type="checkbox"
                            name="pepperoni"
                             checked={form.pepperoni}
                            onChange={formChange}
                        />
                    </label>
                    <label>Peppers
                        <input
                            id="name-input"
                            type="checkbox"
                            name="peppers"
                             checked={form.peppers}
                            onChange={formChange}
                        />
                    </label>
                    <label>Onions
                        <input
                            id="name-input"
                            type="checkbox"
                            name="onions"
                             checked={form.onions}
                            onChange={formChange}
                        />
                    </label>
                    <label>Mushrooms
                        <input
                            id="name-input"
                            type="checkbox"
                            name="mushrooms"
                             checked={form.mushrooms}
                            onChange={formChange}
                        />
                    </label>
                    <label>Enter any special instructions:
                        <input
                            id="special-text"
                            type="text"
                            name="special"
                            value={form.special}
                            onChange={formChange}
                        />
                    </label>
                    <button id="order-button" type="submit" disabled={disabled}>Order</button>
                </form>
            </section>
        </>
    )
}

export default OrderForm;