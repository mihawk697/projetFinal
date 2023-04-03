import React from 'react'
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'


const Blog = ({title,description,imageURL,userName}) => {
  return (
    <div>
      <Card sx={{ width: "40%", margin:'auto', marginTop:10,padding:2, boxShadow:"5px 5px 10px #ccc",":hover:":{ boxShadow :'10px 10px 20px #ccc'} }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
              {userName}
            </Avatar>
          }
          title={title}
            subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {description}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ width: "40%", margin:'auto', marginTop:10,padding:2, boxShadow:"5px 5px 10px #ccc",":hover:":{ boxShadow :'10px 10px 20px #ccc'} }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          userName
        </Avatar>
      }
      title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image="imageURL"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.
      </Typography>
    </CardContent>
  </Card>
    </div>
    
  );
};


export default Blog



