// #region  H E A D E R
// <copyright file="App.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Common REACT Template
 *      Module:   REACT Components (./src/App.js)
 *      Project:  MicroCODE Common Library
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     April 2022
 *      Author:   Timothy J McGuire
 *
 *      Designed and Coded: 2022 MicroCODE Incorporated
 *
 *      This software and related materials are the property of
 *      MicroCODE Incorporated and contain confidential and proprietary
 *      information. This software and related materials shall not be
 *      duplicated, disclosed to others, or used in any way without the
 *      written of MicroCODE Incorported.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the MicroCODE's Common JavaScript Template.
 *      This file is copied to start all MicroCODE JavaScript code files.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MIT xPRO Style Guide
 *         https://student.emeritus.org/courses/3291/files/2554233/download?wrap=1
 *
 *      2. AirBnB JavaScript Style Guide
 *         https://github.com/airbnb/javascript
 *
 *      3. Turing School Style Guide
 *         https://github.com/turingschool-examples/javascript/tree/main/es5
 *
 *      4. MDN Web Docs - JavaScript Classes
 *         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 *      5. JSDoc - How to properly document JavaScript Code.
 *         https://
 *
 *      6. MicroCODE JavaScript Style Guide
 *         Local File: MCX-S02 (Internal JS Style Guide).docx
 *         https://github.com/MicroCODEIncorporated/JavaScriptSG
 *
 *
 *      DEMONSTRATION VIDEOS:
 *      --------------------
 *
 *      1. ...
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:     Description:
 *
 *  26-April-2022   TJM-MCODE  {0001}    New module from out common reusable REACT Components for web pages.
 *                                       ...for Formik Test App.
 *
 *
 */
"use strict";

// #endregion
// #endregion
// #endregion

// #region  J A V A S C R I P T
// #region  F U N C T I O N S

// #region  I M P O R T S

import React from "react";
import { useFormik } from "formik"; // DONE: import useFormik from formik library

// #endregion

// #region  C O N S T A N T S

// #endregion

// #region  P R I V A T E   F I E L D S

// #endregion

// #region  E N U M E R A T I O N S

// #endregion

// #region  M E T H O D S – P U B L I C

/**
 * App() - create user Login Form using Formik libary.
 *
 */
function App()
{
    // DONE: add a const called formik assigned to useFormik()
    const formik = useFormik(
        {
            initialValues:
            {
                email: '',
                password: '',
            },

            validate,

            onSubmit: values =>
            {
                alert("Login Successful");  // alert(JSON.stringify(values, null, 2));
            },
        });

    return (
        <form onSubmit={ formik.handleSubmit }>
            <p>
            </p>

            <label htmlFor="email">Email Address:</label>
            <input
                id="emailField"
                name="email"
                type="email"
                onChange={ formik.handleChange }
                value={ formik.values.email }
            />
            <div id="emailError" style={ { color: 'red' } }>{ formik.errors.email ? <div>{ formik.errors.email }</div> : null }</div>
            <p>
            </p>

            <label htmlFor="password">Password:</label>
            <input
                id="pswField"
                name="password"
                type="password"
                onChange={ formik.handleChange }
                value={ formik.values.password }
            />
            <div id="pswError" style={ { color: 'red' } }>{ formik.errors.password ? <div>{ formik.errors.password }</div> : null }</div>
            <p>
            </p>

            <p>
                <button id="submitBtn" type="submit">Submit</button>
            </p>
        </form>
    );
}

// #endregion

// #region  M E T H O D S – P R I V A T E

/**
 * validate() - A custom validation function. This must return an object
 *              which keys are symmetrical to our values/initialValues.
 */
const validate = values =>
{
    const errors = {};

    // Check EMAIL
    if (!values.email)
    {
        errors.emailError = 'Field required';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    {
        errors.email = 'Username should be an valid email address';
    }

    // Check PASSWORD
    if (!values.password)
    {
        errors.password = 'Field required';
    }
    else if (values.password.length < 12)
    {
        errors.password = 'Password must be at least 12 characters long';
    }

    return errors;
};

// #endregion

// #region  M E T H O D - E X P O R T S

export default App;

// #endregion

// #region  R E A C T - C O M P O N E N T S

// #endregion

// #endregion
// #endregion