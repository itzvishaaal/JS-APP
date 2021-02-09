import React from "react";
import { Table, TableCell, TableBody, TableRow, TableHeader } from "grommet";

const ToDoList = () => {
  let array = JSON.parse(localStorage.getItem("user"));

  for (const prop in array) {
    var keys = [];
    keys.push(prop);
    let id = array[keys].ID;
    let email = array[keys].Email;
    let password = array[keys].Password;
    let firstName = array[keys].FirstName;
    let lastName = array[keys].LastName;
    let confirmPassword = array[keys].ConfirmPassword;
    let phone = array[keys].Phone;
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
            <TableCell>{email}</TableCell>
            <TableCell>{password}</TableCell>
            <TableCell>{confirmPassword}</TableCell>
            <TableCell>{phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
};
export default ToDoList;
