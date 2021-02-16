import React, { useState } from "react";
import { Box, Text, Button, Form, TextInput } from "grommet";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    let array = JSON.parse(localStorage.getItem("user"));
    const emailArray = [];
    const passArray = [];
    for (const prop in array) {
      var keys = [];
      keys.push(prop);
      const loginEmail = array[keys].Email;
      const loginPass = array[keys].Password;

      emailArray.push(loginEmail);
      passArray.push(loginPass);
    }
    if (emailArray.includes(email) && passArray.includes(password)) {
      window.open("/", "_self");
    } else {
      window.open("/login", "_self");
    }
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
            setEmail(event.target.value);
          }}
        />
      </Box>
      <Box style={{ padding: 10, width: 300, alignSelf: "center" }}>
        <TextInput
          placeholder="Password"
          required
          name="password"
          autocomplete="off"
          type="password"
          className="StyledTextInput-sc-1x30a0s-0 dosfMp"
          value={password}
          onChange={(event) => {
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
            onClick={handleSubmit}
          />
        </Box>
      </Box>
      <Box style={{ padding: 10 }}>
        <Text>
          New User? &nbsp; &nbsp;
          <Button
            type="submit"
            className="form-input"
            primary
            label="Sign Up"
            onClick={(event) => window.open("/signup", "_self")}
          />
        </Text>
      </Box>
    </Form>
  );
};

export default SignInForm;
