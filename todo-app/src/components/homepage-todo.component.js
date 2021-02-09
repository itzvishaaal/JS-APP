import React, { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import {
  Box,
  Text,
  Tabs,
  Tab,
  Button,
  Form,
  FormField,
  TextInput,
  DataTable,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHeader,
  Meter,
  CheckBox,
} from "grommet";

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
    let confirmPassword = array[keys].confirmPassword;
    let phone = array[keys].Phone;
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            First Name
          </TableCell>
          <TableCell scope="col" border="bottom">
            Last Name
          </TableCell>
          <TableCell scope="col" border="bottom">
            Email
          </TableCell>
          <TableCell scope="col" border="bottom">
            Password
          </TableCell>
          <TableCell scope="col" border="bottom">
            Confirm Password
          </TableCell>
          <TableCell scope="col" border="bottom">
            Phone
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope="row">
            <strong>Eric</strong>
          </TableCell>
          <TableCell>Coconut</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Chris</strong>
          </TableCell>
          <TableCell>Watermelon</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default ToDoList;
