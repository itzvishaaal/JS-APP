import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SignInForm from "./components/signIn-todo.component";
import SignUpForm from "./components/signUp-todo.component,js";
import ToDoList from "./components/homepage-todo.component";
import EditTodo from "./components/edit-todo.component";
// import TodosList from "./components/todo-list.component";
import { FormField, Header, Button, Menu, Icons } from "grommet";

// const App = () => {
//   const [values, handleChange] = useForm({email:"", password:""});

//   // const [value1, handleChange1] = useForm()
// return (
//   <div>
//     <input name="email" placeholder= "Email" value = {values.email} onChange={handleChange} />
//     <input type="password" name="password" placeholder="Password" value = {values.password} onChange={handleChange} />
//     <button type="submit" lable="Submit"/>
//   </div>
// )

// }

// export default App;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          {/* <Header background="brand">
            <Button icon={<Icons.Home />} hoverIndicator />
            <Menu label="account" items={[{ label: 'logout' }]} />
        </Header> */}

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="" target="_blank"></a>
            <Link to="/" className="navbar-brand">
              User Form
            </Link>
          </nav>

          <Route path="/" exact component={ToDoList} />
          <Route path="/login" exact component={SignInForm} />
          <Route path="/signup" exact component={SignUpForm} />
        </div>
      </Router>
    );
  }
}
export default App;
