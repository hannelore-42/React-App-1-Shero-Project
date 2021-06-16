import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  
  const FrontImgMediaCard = (props) => {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"//img of person
            alt='hex color 9ad3bc'
            height="250"
            image='https://cdn4.vectorstock.com/i/1000x1000/09/33/female-diverse-faces-different-women-seamless-vector-28210933.jpg'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    );
  }
  
  export default FrontImgMediaCard;
  
  
  
  
  