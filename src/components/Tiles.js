import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles=makeStyles((theme)=>({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      labels:{
          fontWeight:"bold",
          color:'#3f51b5',
          marginBottom:'1.5rem',
      }

}))

function Tiles(props) {
    const classes=useStyles();
    console.log(props);
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
            <div className={classes.labels}>
                {props.myLabel}
            </div>
            <div>
                {props.data}
            </div>
        </Paper>
        </Grid>
    );
}

export default Tiles;