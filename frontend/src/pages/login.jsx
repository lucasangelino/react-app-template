import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export default function Login() {
  const { login } = React.useContext(AuthContext);

  const [hasErrors, setHasErrors] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    remember: true,
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    setHasErrors(false);
  };

  const handleCheckboxChange = ({ target }) => {
    setForm({ ...form, remember: !form.remember });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.remember) {
      localStorage.setItem("email", form.email);
    } else {
      localStorage.removeItem("email");
    }
    const loggedIn = await login(form.email, form.password);
    if (!loggedIn) {
      setHasErrors(true);
    }
  };

  React.useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setForm((form) => ({ ...form, email }));
    }
  }, []);

  return <div>THIS IS THE LOGIN PAGE</div>;
}
