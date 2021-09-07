import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const AddCourses = (props) => {
  const [values, setValues] = useState({
    courseImage: '',
    courseName: '',
    weightage: '',
    amountCompleted: '0',
    courseID:"",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          title="Add New Course"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Course Image"
                name="courseImage"
                onChange={handleChange}
                required
                value={values.courseImage}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Course name"
                name="courseName"
                onChange={handleChange}
                required
                value={values.courseName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Weightage"
                name="weightage"
                onChange={handleChange}
                required
                value={values.weightage}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Amount Completed"
                name="amountCompleted"
                onChange={handleChange}
                type="number"
                value={values.amountCompleted}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Course ID"
                name="courseID"
                onChange={handleChange}
                required
                value={values.courseID}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Add New Course
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AddCourses;