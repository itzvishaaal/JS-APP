import React from "react";
import { DataTable, Text } from "grommet";

const ToDoList = () => {
  let array = JSON.parse(localStorage.getItem("user"));
  var key = [];
  for (const prop in array) {
    key.push(prop);
  }

  const obj = [];
  for (let index = 0; index < key.length; index++) {
    obj.push(array[key[index]]);
  }

  return (
    <DataTable
      columns={[
        {
          property: "ID",
          header: (
            <Text>
              <strong>ID</strong>
            </Text>
          ),
        },
        {
          property: "FirstName",
          header: (
            <Text>
              <strong>First Name</strong>
            </Text>
          ),
          primary: false,
        },
        {
          property: "LastName",
          header: (
            <Text>
              <strong>Last Name</strong>
            </Text>
          ),
          primary: false,
        },
        {
          property: "Email",
          header: (
            <Text>
              <strong>Email</strong>
            </Text>
          ),
          primary: false,
        },
        {
          property: "Password",
          header: (
            <Text>
              <strong>Password</strong>
            </Text>
          ),
          primary: false,
        },
        {
          property: "ConfirmPassword",
          header: (
            <Text>
              <strong>Confirm Password</strong>
            </Text>
          ),
          primary: false,
        },
        {
          property: "Phone",
          header: (
            <Text>
              <strong>Phone</strong>
            </Text>
          ),
          primary: false,
        },
      ]}
      data={obj}
    />
  );
};
export default ToDoList;
