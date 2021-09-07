// import * as React from 'react';
// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function AddToDo() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//       <div>
//     <Button onClick={handleOpen}>Open modal</Button>
// <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
//   <Box sx={style}>
//     <Typography id="modal-modal-title" variant="h6" component="h2">
//       Text in a modal
//     </Typography>
//     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//     </Typography>
//     <Button onClick={handleClose}>close</Button>
//   </Box>
// </Modal>
// </div>
//   );
// }


import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
  import ExistingToDo from '../components/ExistingToDo';
  import AddNewToDo from '../components/AddNewToDo'
  
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
              <ExistingToDo />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AddNewToDo />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
  
  export default Account;