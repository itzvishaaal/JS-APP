import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Box,
  Text,
  Tabs,
  Tab,
  Button,
  Form,
  FormField,
  TextInput,
} from "grommet";
import useLocalStorage from "../hooks/useLocalStorage";
import globalFunc from "./global";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [status, setStatus] = useState(false);

  var newStatus = globalFunc();
  // console.log(newStatus);

  const handleSubmit = (event) => {
    console.log("I am in the handleSubmit");
    let array = JSON.parse(localStorage.getItem("user"));
    const emailArray = [];
    const passArray = [];
    // console.log("Main array", array);
    for (const prop in array) {
      var keys = [];
      keys.push(prop);
      const loginEmail = array[keys].Email;
      const loginPass = array[keys].Password;

      emailArray.push(loginEmail);
      passArray.push(loginPass);
    }

    console.log("Here are the emails", emailArray);
    console.log("Here are the passwords", passArray);
    if (emailArray.includes(email) && passArray.includes(password)) {
      newStatus = true;
      window.open("/", "_self");
    } else {
      // window.alert("Details are wrong");
      window.open("/login", "_self");
      newStatus = false;
    }
    console.log(emailArray.includes(email));
    console.log(passArray.includes(password));
    console.log("Status =", newStatus);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box style={{ padding: 10, width: 300 }}>
        <TextInput
          autocomplete="off"
          placeholder="Email"
          name="email"
          required
          type="email"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value={email}
          onChange={(event) => {
            console.log(event.target.value);
            setEmail(event.target.value);
          }}
        />
      </Box>
      <Box style={{ padding: 10, width: 300 }}>
        <TextInput
          placeholder="Password"
          required
          name="password"
          autocomplete="off"
          type="password"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value={password}
          onChange={(event) => {
            console.log(event.target.value);
            setPassword(event.target.value);
          }}
        />
      </Box>

      <Box style={{ padding: 10 }}>
        <Box direction="row" gap="medium">
          <Button
            type="submit"
            className="form-input"
            primary
            label="Login"
            // onClick={(event) => {
            //   handleSubmit();
            //   if (newStatus) {
            //     // alert("Welcome user");
            //     window.open("/", "_self");
            //   } else {
            //     // alert("Not registered, Please sign up!");
            //     window.open("/signup", "_self");
            //   }
            // }}
            onClick={handleSubmit}
          />
        </Box>
      </Box>
      <Box style={{ padding: 10 }}>
        <Text>
          New User?
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </Text>
      </Box>
    </Form>
  );
};

export default SignInForm;
