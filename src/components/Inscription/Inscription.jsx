import FormInput from "../FormInput";
import { useState } from "react";
import axios from "axios";
import "./inscription.css"

function Inscription() {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        telephone: "",
        adress: "",
        cp: "",
        city: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "lastname",
            type: "text",
            placeholder: "Nom",
            errorMessage:
                "Nom should be 3-16 characters and shouldn't include any special character!",
            label: "Nom",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "fisrtname",
            type: "text",
            placeholder: "Prénom",
            errorMessage:
                "Prénom doit contenir 3 à 16 caractères sans caractères spéciaux.",
            label: "Prénom",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 3,
            name: "adress",
            type: "text",
            placeholder: "Adresse",
            label: "Adresse",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 4,
            name: "CP",
            type: "text",
            placeholder: "Code Postal",
            label: "Code Postale",
            pattern: "^[0-9]{0,5}$",
            required: true,
        },
        {
            id: 5,
            name: "city",
            type: "text",
            placeholder: "Ville",
            label: "Ville",
            
            required: true,
        },
        {
            id: 6,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 7,
            name: "telephone",
            type: "text",
            placeholder: "Numéro de téléphone",
            label: "Numéro de téléphone",
          
        },
        {
            id: 8,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
        },
        {
            id: 9,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            
            required: true,
        },
        {
            id: 10,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/test/create",{
            firstName : values['firstname'],
            lastName : values['lastname'],
            telephone : values['telephone'],
            birthDate : values['birthday'],
            cp : values['cp'],
            ville : values['city'],
            adress : values['adress'],
            mail : values['email'],
            password : values['password']
        }).then((response) => {
            console.log(response)
        })
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="inscription">
            <form onSubmit={handleSubmit}>
                <div className="titreinsc"><h1>INSCRIPTION</h1></div>
                {inputs.map((input) => (
                    <div className="input">
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    </div>

                ))}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Inscription