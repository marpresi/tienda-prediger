import React from 'react';

import { useState } from "react";

export const Buyer = ({onSendOrder}) => {

    const [buyer, setBuyer] = useState(
        {
            name: "",
            phone: "",
            email: ""
        }
    );
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateForm = () => {

        let formIsValid = true;
        setNameError("");
        setPhoneError("");
        setEmailError("");

        //Name
        if (!buyer.name) {
            formIsValid = false;
            setNameError("El nombre no puede estar vacío.");
        }

        if (typeof buyer.name !== "undefined") {
            if (!buyer.name.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                setNameError("El nombre solo acepta caracteres alfabéticos.");
            }
        }

        //Phone
        if (!buyer.phone) {
            formIsValid = false;
            setPhoneError("El teléfono no puede estar vacío.");
        }

        if (typeof buyer.phone !== "undefined") {
            if (!buyer.phone.match(/^[0-9]+$/)) {
                formIsValid = false;
                setPhoneError("El teléfono solo acepta caracteres numéricos.");
            }
        }

        //Email
        if (!buyer.email) {
            formIsValid = false;
            setEmailError("El email no puede estar vacío.");
        }

        if (typeof buyer.email !== "undefined") {
            if (!buyer.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
                formIsValid = false;
                setEmailError("El email ingresado es inválido.");
            }
        }
        return formIsValid;
    }

    const sendOrder = (e) => {
        if (validateForm()) {
            onSendOrder(buyer);
        }
    }


    const onInputChange = (evt) => {
        setBuyer({ ...buyer, [evt.target.name]: evt.target.value });
    }

    return (<>
        
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" name="name" className="form-control form-control-sm" placeholder="example"
                            onChange={evt => onInputChange(evt)} />
                        {nameError && <span className="text-danger">{nameError}</span>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="text" name="phone" className="form-control form-control-sm" placeholder="example"
                            onChange={evt => onInputChange(evt)} />
                        {phoneError && <span className="text-danger">{phoneError}</span>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control form-control-sm" placeholder="example"
                            onChange={evt => onInputChange(evt)} />
                        {emailError && <span className="text-danger">{emailError}</span>}
                    </div>
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-sm btn-success"
                            disabled={!(buyer.name && buyer.phone && buyer.email)}
                            onClick={evt => sendOrder(evt)}>Enviar Orden</button>
                    </div>
       
    </>);
}