import "./App.css";
import { Switch, Route } from "react-router-dom";
import { SignUpForm } from "./Authentication/SignUpForm";
import { SigninForm } from "./Authentication/SigninForm";
import { PasswordVerify } from "./Authentication/resetPassword";
import { ForgetPassword } from "./Authentication/forgetpassword";
import { ProtectedRouter } from "./Authentication/protected";
import Home from "./home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SigninForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route
          exact
          path="/forgot-password/verify/:token"
          component={PasswordVerify}
        />
        <Route exact path="/signin" component={SigninForm} />
        <Route exact path="/forget-password" component={ForgetPassword} />
        <ProtectedRouter exact path="/home" component={Home} />
      </Switch>
      <ToastContainer />
    </div>
  );
}
