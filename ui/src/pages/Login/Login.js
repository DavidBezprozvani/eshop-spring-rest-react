import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import PropsState from "../../components/PropsState";
import {login} from "../../api/usersApi";
import { useHistory } from "react-router-dom"

export default () => {

    const history = useHistory()


    const postLogin = (loginData, { setSubmitting }) => {
        setSubmitting(true)

        login(loginData)
            .then(() => history.push('/'))
            .finally(() => setSubmitting(false))


    }

    return (

        <Formik
            initialValues={{
            username: "",
            password: ""
            }}
            onSubmit={postLogin}
        >
            {(props) => (
                <>
                    <PropsState {...props}/>
                <Form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <Field name="username"
                               id="username"
                               className="form-control"
                               placeholder="Please enter username"/>
                        {/*<ErrorMessage name="username"*/}
                        {/*              className="form-text text-danger"*/}
                        {/*              component="small"/>*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <Field name="password"
                               id="password"
                               type="password"
                               className="form-control"
                               placeholder="Please enter password"/>
                        {/*<ErrorMessage name="password"*/}
                        {/*              className="form-text text-danger"*/}
                        {/*              component="small"/>*/}
                    </div>
                    <button type="submit" className="btn btn-primary mt-2" disabled={props.isSubmitting}>Login</button>
                </Form>
                </>
            )}
        </Formik>

    )
}