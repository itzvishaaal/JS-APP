import React, { useState } from "react";
import { Box, Text, Button, Form, TextInput } from "grommet";

const SignUpForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const isEmailValid = (email) => {
    const regex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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

    if (!isEmailValid(email)) {
      window.alert("Please enter correct email");
    } else if (password.length < 8) {
      alert("Minimum 8 chars password required");
    } else if (password !== confirmPassword) {
      window.alert("Password do not match");
    } else {
      temp[email] = user;
      localStorage.setItem("user", JSON.stringify(temp));
      alert("Redirecting to login page");
      window.open("/login", "_self");
    }
  };

  return (
    <Form>
      <Box style={{ justify: "center", padding: 10, width: 300 }}>
        <TextInput
          autocomplete="off"
          placeholder="First Name"
          required
          type="first name"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value={firstName}
          onChange={(event) => {
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
          value={lastName}
          onChange={(event) => {
            setlastName(event.target.value);
          }}
        />
      </Box>
      <Box style={{ padding: 10, width: 300 }}>
        <TextInput
          pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
          autocomplete="off"
          placeholder="Email"
          required
          type="email"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </Box>
      <Box style={{ padding: 10, width: 300 }}>
        <TextInput
          minLength="8"
          placeholder="Password"
          required
          autocomplete="off"
          type="password"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </Box>
      <Box style={{ padding: 10, width: 300 }}>
        <TextInput
          minLength="8"
          autocomplete="off"
          required
          placeholder="Confirm Password"
          type="password"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value={confirmPassword}
          onChange={(event) => {
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
            onClick={handleSubmit}
          />
        </Box>
      </Box>
      <Box direction="row">
        <Text>
          Already Registered? &nbsp; &nbsp;
          <Button
            type="submit"
            className="form-input"
            primary
            label="Log In"
            onClick={(event) => window.open("/login", "_self")}
          />
        </Text>
      </Box>
    </Form>
  );
};

export default SignUpForm;
