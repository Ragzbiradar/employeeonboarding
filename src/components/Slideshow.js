import React from 'react';
import Carousel from 'react-elastic-carousel';
import CourseCard from './Coursecard';


function Slideshow(){
const breakpoints=[
  {width:1,itemsToShow:1},
  {width:300,itemsToShow:2},
  {width:600,itemsToShow:3},
  {width:1100,itemsToShow:4}
]

  return(
    <div>
      <Carousel breakPoints={breakpoints}>
        <CourseCard name="React" count="10" />
        <CourseCard name="Node" count="20"/>
        <CourseCard name="MongoDB" count="20" />
        <CourseCard name="JavaScript" count="35" />
        <CourseCard name="Express JS" count="78" />
        <CourseCard name="Java" count="90" />
        </Carousel>
    </div>
  )
}
export default Slideshow