import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
  import AccountProfile from '../components/AccountProfile';
  import AccountProfileDetails from '../components/AccountProfileDetails'
  import TaskProgress from "../components/TaskProgress"
  import ToDoList from '../components/toDoList'
  import Slideshow from '../components/Slideshow';
  import Login from './Login';

  const Account = () => (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
        <h2> Telstra On-Boarding Page </h2>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountProfileDetails />
            </Grid>
          </Grid>
        </Container>
        <Container className="progress">
        <h2> On-Boarding Progress </h2>
          <TaskProgress />
        </Container>
        <Container className="toDoList">
          <ToDoList />
        </Container>
        <Container>
        <h2> Assigned Courses </h2>
          <Slideshow/>
        </Container>
        {/* <Container>
          <Login />
        </Container> */}
      </Box>
    </>
  );
  
  export default Account;
