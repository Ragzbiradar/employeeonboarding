import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Card
} from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import "../styles/toDo.css";

export default function FullWidthGrid() {

  const [state, setState] = React.useState({
    Task1: true,
    Task2: false,
    Task3: false,
  });

  const handleChange = (event) => {
    // console.log(state)
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Task1, Task2, Task3 } = state;

  return (
    <div className="toDo123">
        <Card >
            
            <h1>To Do Tasks</h1>
            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={Task1} onChange={handleChange} name="Task1" />
                        }
                        label="Task 1"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={Task2} onChange={handleChange} name="Task2" />
                        }
                        label="Task 2"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={Task3} onChange={handleChange} name="Task3" />
                        }
                        label="Task 3"
                    />
                </FormGroup>
            </FormControl>
        </Card>
    </div>
  );
}
