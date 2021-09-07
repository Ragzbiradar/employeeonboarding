import React from 'react';
import {Card,CardTitle,CardFooter,CardContent} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import '../styles/coursecard.css';


 
const CourseCard=(props)=>(
<div>
<Card >
        <CardContent>
          <h3>{props.name}</h3>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button className='add'>+</Button>
          {/* <Badge color="light" className='b1' >{"   "+props.count+"   "}</Badge> */}
          <p>{props.count}</p>
          <Button className='sub'>-</Button>
          </ButtonGroup><br/>
          <Button color="primary" >Done</Button>    
        </CardContent>
        
      </Card>
</div>
);
    

export default CourseCard;