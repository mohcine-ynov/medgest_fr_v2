import FormInput from "../FormInput";
import { useState } from "react";
import axios from "axios";

function Connexion() {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/test/connexion", {
      mail: values['email'],
      password: values['password']
    }).then((response) => {
      console.log(response)
    })
  };


  return (
    <div className="inscription">
      <form onSubmit={handleSubmit}>
        <div className="titreinsc"><h1>CONNEXION</h1></div>
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

export default Connexion