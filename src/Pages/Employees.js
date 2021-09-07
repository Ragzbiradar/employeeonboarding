import React, {useState} from "react";
import { Row, Col} from "reactstrap";
import {
    Button,
    Card,
    CardContent,
    CardHeader
  } from '@material-ui/core';
import "../styles/employees.css"
import { makeStyles } from '@material-ui/core/styles';
import PanelHeader from "../components/PanelHeader";
import { NavLink } from 'react-router-dom';
import RouteComp from '../RouteComp';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        float:"right"
      },
    },
  }));

function Courses() {

    const classes = useStyles();

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card className="employeeTitle">
                <h5 className="title">All Employees</h5>
                <NavLink to="/AllEmployees/newEmp">
                  <div className={classes.root}>
                      <Button variant="contained" color="primary">Add New Employee</Button>
                  </div>
                </NavLink>
            </Card>
          </Col>
        </Row>
        <Card className="employeeCard">
          <CardContent>
            <table>
              <tr>
                <th>First Name</th>
                <th>Second Name</th>
                <th>Employee ID</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Email Id</th>
                <th>Course Completion %</th>
                <th>Task Completion %</th>
                <th> <Button variant="contained" color="default">Edit</Button> </th>
              </tr>
            </table>
          </CardContent>
        </Card>
        <Card className="employeeCard">
          <CardContent>
            <table>
              <tr>
                <th>First Name</th>
                <th>Second Name</th>
                <th>Employee ID</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Email Id</th>
                <th>Course Completion %</th>
                <th>Task Completion %</th>
                <th> <Button variant="contained" color="default">Edit</Button> </th>
              </tr>
            </table>
          </CardContent>
        </Card>
        <Card className="employeeCard">
          <CardContent>
            <table>
              <tr>
                <th>First Name</th>
                <th>Second Name</th>
                <th>Employee ID</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Email Id</th>
                <th>Course Completion %</th>
                <th>Task Completion %</th>
                <th> <Button variant="contained" color="default">Edit</Button> </th>
              </tr>
            </table>
          </CardContent>
        </Card>
    </div>
    </>
  );
}

export default Courses;
