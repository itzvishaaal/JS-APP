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
import { NavLink } from "react-router-dom";

const SignUpForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  // let userData = []

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Details has been saved successfully!");
    var id = Math.floor(Math.random() * 1000000);
    let temp = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : {};

    const user = {
      ID: id,
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
      ConfirmPassword: confirmPassword,
      Phone: phone,
    };
    temp[id] = user;
    localStorage.setItem("user", JSON.stringify(temp));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box style={{ justify: "center", padding: 10, width: 300 }}>
        <TextInput
          autocomplete="off"
          placeholder="First Name"
          required
          type="first name"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value=""
          value={firstName}
          onChange={(event) => {
            console.log(event.target.value);
            setfirstName(event.target.value);
          }}
        />
      </Box>
      <Box style={{ padding: 10, width: 300 }}>
        <TextInput
          autocomplete="off"
          placeholder="Last Name"
          required
          type="last name"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value=""
          value={lastName}
          onChange={(event) => {
            console.log(event.target.value);
            setlastName(event.target.value);
          }}
        />
      </Box>
      <Box style={{ padding: 10, width: 300 }}>
        <TextInput
          autocomplete="off"
          placeholder="Email"
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
      <Box style={{ padding: 10, width: 300 }}>
        <TextInput
          autocomplete="off"
          required
          placeholder="Confirm Password"
          type="text"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value={confirmPassword}
          onChange={(event) => {
            console.log(event.target.value);
            setConfirmPassword(event.target.value);
          }}
        />
      </Box>
      <Box style={{ padding: 10, width: 300 }}>
        <TextInput
          autocomplete="off"
          placeholder="Phone"
          required
          type="number"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value={phone}
          onChange={(event) => {
            console.log(event.target.value);
            setPhone(event.target.value);
          }}
        />
      </Box>
      <Box style={{ padding: 10, width: 300 }}>
        <Box direction="row" gap="medium">
          <Button
            type="submit"
            className="form-input"
            primary
            label="Sign Up"
            onClick={(event) => window.open("/login", "_self")}
          />
        </Box>
      </Box>
      <Box direction="row">
        <Text>Already Registered?</Text>
        <Button
          type="submit"
          className="form-input"
          primary
          label="Log In"
          onClick={(event) => window.open("/login", "_self")}
        />
        {/* <Link to="/login" className="nav-link">Sign In</Link>  */}
      </Box>
    </Form>
  );
};

export default SignUpForm;
