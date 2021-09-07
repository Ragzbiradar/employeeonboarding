import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Typography
  } from '@material-ui/core';
  import "../styles/taskProgress.css"
  import { orange } from '@material-ui/core/colors';
  import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
  
  const TaskProgress = (props) => (
    <Grid className="mainLayout" container spacing={2}>
      <Grid item xs={6} sm={6}>
            <Card className="mainCard">
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={6}
                >
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="h6"
                    >
                      TASK PROGRESS
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h3"
                    >
                      50%
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        backgroundColor: orange[600],
                        height: 56,
                        width: 56
                      }}
                    >
                      <InsertChartIcon />
                    </Avatar>
                  </Grid>
                </Grid>
                <Box sx={{ pt: 3 }}>
                  <LinearProgress
                    value={50}
                    variant="determinate"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Card className="mainCard">
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={6}
                >
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="h6"
                    >
                      COURSES PROGRESS
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h3"
                    >
                      25%
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        backgroundColor: orange[600],
                        height: 56,
                        width: 56
                      }}
                    >
                      <InsertChartIcon />
                    </Avatar>
                  </Grid>
                </Grid>
                <Box sx={{ pt: 3 }}>
                  <LinearProgress
                    value={25}
                    variant="determinate"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
    </Grid>
  );
  
  export default TaskProgress;