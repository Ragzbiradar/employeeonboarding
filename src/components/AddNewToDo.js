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

const designation = [
    {
        value: 'Mandatory Task',
        label: 'Mandatory Task'
      },
    {
      value: 'SE',
      label: 'SE'
    },
    {
      value: 'SD',
      label: 'SD'
    },
    {
      value: 'TL',
      label: 'TL'
    },
    {
        value: 'PM',
        label: 'PM'
      },
      {
        value: 'SSE',
        label: 'SSE'
      }
  ];

const AddNewToDo = (props) => {
  const [values, setValues] = useState({
    taskName: '',
    amountCompleted: "0",
    date: "",
    designation: 'Select Designation'
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
          title="Add New To Do"
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
                label="Task name"
                name="taskName"
                onChange={handleChange}
                required
                value={values.taskName}
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
                required
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
                label="Date"
                name="date"
                onChange={handleChange}
                required
                value={values.date}
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
                label="Select Designation"
                name="designation"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {designation.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
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
            Add task
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AddNewToDo;