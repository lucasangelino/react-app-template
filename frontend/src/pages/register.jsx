import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export default function Register() {
  const { register } = React.useContext(AuthContext);
  const [hasErrors, setHasErrors] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    setHasErrors(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registered = await register(form.name, form.email, form.password);
    if (!registered) {
      setHasErrors(true);
    }
  };

  return <div>THIS IS THE REGISTER PAGE</div>;
}
