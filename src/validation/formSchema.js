import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Your name is required")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required("Your selected size is required"),
    pepperoni: yup
        .boolean(),
    peppers: yup
        .boolean(),
    onions: yup
        .boolean(),
    mushrooms: yup
        .boolean(),
    special: yup
        .string()
})

export default formSchema;