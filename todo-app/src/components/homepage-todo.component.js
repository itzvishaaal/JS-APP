import React from "react";
import SignInForm from "./signIn-todo.component";
import { Table, TableCell, TableBody, TableRow, TableHeader } from "grommet";

const ToDoList = () => {
  let array = JSON.parse(localStorage.getItem("user"));

  const key = [];
  let id = array[key].ID;
  let email = array[key].Email;
  let password = array[key].Password;
  let firstName = array[key].FirstName;
  let lastName = array[key].LastName;
  let confirmPassword = array[key].ConfirmPassword;
  let phone = array[key].Phone;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            <strong>ID</strong>
          </TableCell>
          <TableCell scope="col" border="bottom">
            <strong>First Name</strong>
          </TableCell>
          <TableCell scope="col" border="bottom">
            <strong>Last Name</strong>
          </TableCell>
          <TableCell scope="col" border="bottom">
            <strong>Email</strong>
          </TableCell>
          <TableCell scope="col" border="bottom">
            <strong>Password</strong>
          </TableCell>
          <TableCell scope="col" border="bottom">
            <strong>Confirm Password</strong>
          </TableCell>
          <TableCell scope="col" border="bottom">
            <strong>Phone</strong>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope="row">{id}</TableCell>
          <TableCell>{firstName}</TableCell>
          <TableCell>{lastName}</TableCell>
          <TableCell>{email1}</TableCell>
          <TableCell>{password}</TableCell>
          <TableCell>{confirmPassword}</TableCell>
          <TableCell>{phone}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default ToDoList;
