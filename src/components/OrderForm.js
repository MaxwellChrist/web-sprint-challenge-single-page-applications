import React, { useState } from 'react';

const initialForm = {
    name: "",
    size: "",
    pepperoni: false,
    peppers: false,
    onions: false,
    mushrooms: false,
    special: ""
}

const OrderForm = () => {

    const [form, setForm] = useState({initialForm})

    return (
        <>
            <section>
                <h1>What would you like on your pizza?</h1>
                <form id="pizza-form"></form>
                    <label>Please enter your name:
                        <input
                            id="name-input"
                            type="text"
                            name="name"
                            value={form.name}
                            // onChange={formChange}
                        />
                    </label>
                    <label>Please select a size:
                        <select
                            id="size-dropdown"
                            name="size"
                            value={form.size}
                            // onChange={formChange}
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
                            // onChange={formChange}
                        />
                    </label>
                    <label>Peppers
                        <input
                            id="name-input"
                            type="checkbox"
                            name="peppers"
                             checked={form.peppers}
                            // onChange={formChange}
                        />
                    </label>
                    <label>Onions
                        <input
                            id="name-input"
                            type="checkbox"
                            name="onions"
                             checked={form.onions}
                            // onChange={formChange}
                        />
                    </label>
                    <label>Mushrooms
                        <input
                            id="name-input"
                            type="checkbox"
                            name="mushrooms"
                             checked={form.mushrooms}
                            // onChange={formChange}
                        />
                    </label>
                    <label>Enter any special instructions:
                        <input
                            id="special-text"
                            type="text"
                            name="special"
                            value={form.special}
                            // onChange={formChange}
                        />
                    </label>
                    <button id="order-button">Order</button>
            </section>
        </>
    )
}

export default OrderForm;