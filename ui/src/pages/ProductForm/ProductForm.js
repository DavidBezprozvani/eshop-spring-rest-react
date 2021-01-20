import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import PropsState from "../../components/PropsState";
import * as Yup from "yup"
import {addProduct} from "../../api/productApi";
import {useHistory} from 'react-router-dom'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .max(20, "Must be maximum 20 characters")
        .required(),
    inStock: Yup.number()
        .integer("In stock must be whole number")
        .positive()
        .required(),
    price: Yup.number()
        .positive()
        .required()
        .test("is-price", "Price must be valid", (value) => {
            return !!value || (value + "").match(/^\d+(\.\d{1,2})?$/)
        })
})

export default () => {
    const history = useHistory();
    const handleOnSubmit = (formValues, formikHelpers) => {

        formikHelpers.setSubmitting(true);

        addProduct(formValues)
            .then(response => {
                history.push("/products");
            })
            .finally(() => {
                formikHelpers.setSubmitting(false)
            })

    }


    return (
        <div className="container">
        <Formik
            initialValues={{
                name: '',
                inStock: '',
                price: '',
                description: ''
            }}
            onSubmit={handleOnSubmit}
            validationSchema={validationSchema}
        >
            {(props) => (
                <>
                    {/*<PropsState {...props}/>*/}
                    <Form className="mx-4">
                        <div className="form-group">
                            <label htmlFor="name">Product name:</label>
                            <Field name="name"
                                   id="name"
                                   className="form-control"
                                   placeholder="Please enter product name"/>
                            <ErrorMessage name="name"
                                          className="form-text text-danger"
                                          component="small"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inStock">In stock:</label>
                            <Field name="inStock"
                                   id="inStock"
                                   className="form-control"
                                   placeholder="Please enter in stock number"/>
                            <ErrorMessage name="inStock"
                                          className="form-text text-danger"
                                          component="small"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <Field name="price"
                                   id="price"
                                   className="form-control"
                                   placeholder="Please enter product price"/>
                            <ErrorMessage name="price"
                                          className="form-text text-danger"
                                          component="small"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <Field name="description"
                                   id="description"
                                   className="form-control"
                                   placeholder="Please add product description"
                                   component="textarea"
                                   rows="10"/>
                            <ErrorMessage name="description"
                                          className="form-text text-danger"
                                          component="small"/>
                        </div>

                        <button type="submit" className="btn btn-primary mt-2"
                                disabled={props.isSubmitting}>Submit
                        </button>
                    </Form>
                </>
            )}
        </Formik>
        </div>
    )
}