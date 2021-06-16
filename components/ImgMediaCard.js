//import { render } from '@testing-library/react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"//img of person
          alt={props.name}
          height="250"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ImgMediaCard;




