// import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import AccountDetails from "./AccountProfileDetails"

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  email:'example@gmail.com'
};

const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 100,
            width: 100
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h3"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {user.email}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
            {/* incase time is needed */}
          {/* {`${moment().format('hh:mm A')} ${user.timezone}`} */}
        </Typography>
        <Divider />
        <Typography>
          
        </Typography>
      </Box>
    </CardContent>
    <Divider />
  </Card>
);

export default AccountProfile;
