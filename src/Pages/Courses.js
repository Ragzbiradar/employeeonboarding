import React, {useState} from "react";
import { Row} from "reactstrap";
import {
    Button,
    Card,
    CardContent,
  } from '@material-ui/core';
import "../styles/courses.css"
import { makeStyles } from '@material-ui/core/styles';
import {  NavLink } from 'react-router-dom'; 

const useStyles = makeStyles(theme => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
      float:"right"
    },
  },
  toolbar: {
    minHeight: 128,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: theme.spacing(9),
    },
  },
}));

function Courses() {

    const classes = useStyles();

  return (
    <>
      <div className="content123">
        <Row>
          <Card className="coursesTitle">
              <h5 className="title">All Courses Available</h5>
              <NavLink to="/courses/addCourse">
                <div className={classes.root}>
                  <Button variant="contained" color="primary">Add Course</Button>
                </div>
              </NavLink>
          </Card>
        </Row>
        <Row>
        <Card className="coursesCard">
          <CardContent>
            <table>
              <tr>
                <th>Course Image </th>
                <th>Course Name</th>
                <th>weightage</th>
                <th>Due Date</th>
                <th> <Button variant="contained" color="default">Edit</Button> </th>
              </tr>
            </table>
          </CardContent>
        </Card>
        <Card className="coursesCard">
          <CardContent>
            <table>
              <tr>
                <th>Course Image </th>
                <th>Course Name</th>
                <th>weightage</th>
                <th>Due Date</th>
                <th> <Button variant="contained" color="default">Edit</Button> </th>
              </tr>
            </table>
          </CardContent>
        </Card>
        <Card className="coursesCard">
          <CardContent>
            <table>
              <tr>
                <th>Course Image </th>
                <th>Course Name</th>
                <th>weightage</th>
                <th>Due Date</th>
                <th> <Button variant="contained" color="default">Edit</Button> </th>
              </tr>
            </table>
          </CardContent>
        </Card>
        </Row>
    </div>
    </>
  );
}

export default Courses;
