import React, {useState} from "react";
import { Row, Col} from "reactstrap";
import {
    Button,
    Card,
    CardContent,
  } from '@material-ui/core';
import "../styles/employees.css"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PanelHeader from "../components/PanelHeader";
import { NavLink } from 'react-router-dom';

function getModalStyle() {
  const top = 50
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        float:"right"
      },
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    btn: {
      margin:"auto",
      textAlign:"center"
    },
    btn1: {
      margin:"5px",
    },
    btn2: {
      margin:"5px",
    },
  }));

function Employees() {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

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
                <th> 
                  <Button variant="contained" color="default" onClick={handleOpen}>Edit</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                  >
                    <div style={modalStyle} className={classes.paper}>
                      <table>
                        <tr>
                          <th>First Name:</th>
                          <td><input type="text" value="" /></td>
                        </tr>
                        <tr>
                          <th>Last Name:</th>
                          <td><input type="text" value="" /></td>
                        </tr>
                        <tr>
                          <th>Designation:</th>
                          <td><input type="text" value="" /></td>
                        </tr>
                        <tr>
                          <th>Department:</th>
                          <td><input type="text" value="" /></td>
                        </tr>
                        <tr>
                          <th>Email Id:</th>
                          <td><input type="text" value="" /></td>
                        </tr>
                        {/* <tr>
                          <td><Button variant="contained" color="primary" onClick={handleClose}>Close</Button></td>
                          <td><Button variant="contained" color="primary">Save</Button></td>
                        </tr> */}
                      </table>
                      <div className={classes.btn}>
                        <Button className={classes.btn1} variant="contained" color="primary" onClick={handleClose}>Close</Button>
                        <Button className={classes.btn2} variant="contained" color="primary">Save</Button>
                      </div>
                    </div>
                  </Modal>
                </th>
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

export default Employees;









// // import { Helmet } from 'react-helmet';
// import { Box, Container } from '@material-ui/core';
// import CustomerListResults from '../components/EmployeeListResults';
// import CustomerListToolbar from '../components/EmployeeListToolBar';
// import customers from '../mocks/customer';

// const Employee = () => (
//   <>
//     <Box
//       sx={{
//         backgroundColor: 'background.default',
//         minHeight: '100%',
//         py: 3
//       }}
//     >
//       <Container maxWidth={false}>
//         <CustomerListToolbar />
//         <Box sx={{ pt: 3 }}>
//           <CustomerListResults customers={customers} />
//         </Box>
//       </Container>
//     </Box>
//   </>
// );

// export default Employee;

