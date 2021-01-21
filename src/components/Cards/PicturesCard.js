import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: '-20%',
        alignItems: 'left'
    },
    picture: {
        maxHeight: '55%',
        padding: theme.spacing(2),
        borderRadius: '5px'
    }
}));

function PicturesCard(props) {
    const classes = useStyles();
    const picturesCard = props.picturesCard;
    const picLable = props.picLable;
    return(
        <div className={classes.container}>
        <Grid item xs={12}>
            <Typography style={{alignItems: 'left', padding: '1%', fontWeight: 'bold', color: 'white'}} variant="h5">Past Observations</Typography>
        </Grid>
          <Divider />
        <Grid container spacing={0}>
            {picturesCard.map((pictures, index) => (
                <Grid key={index} item xs={6} >
                    <img className={classes.picture} src={pictures} alt="pic with #id"/>
                    <br/>
                    <Typography style={{fontWeight: 'bold', fontSize: '20px', color: 'white'}}>{picLable} {index}</Typography>
                </Grid>
            ))};
        </Grid>
        </div>
    )
}

export default PicturesCard;