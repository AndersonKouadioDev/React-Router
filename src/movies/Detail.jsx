import React from "react";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import {useNavigate, useParams} from 'react-router-dom'
import {StarRate} from '@mui/icons-material'
const DetailComponent = (props) => {
    const {Lists} =props
  const returnStyle = {
    color: "#fff",
    borderColor: "white",
  };
  const contentStyle = {
    position: "relative",
    top: 80,
  };
  const styleStar={color:'red'};
  const navigate = useNavigate();
  const params =useParams();
  const Elt = (() =>  Lists[params.id])();
  const {title,description,rate} = Elt;
    // Variables 
    let rating = [];
    // add star
    for(let i = 0; i < rate; i++){
   rating .push(<StarRate  className="card-img-top" style={styleStar} key={i}/>);
    }
  return (
    <Container maxWidth="md">
      <AppBar color="error">
        <Toolbar>
          <Button variant="outlined" style={returnStyle} onClick={()=>navigate("/")}>
            Retour 
          </Button>
        </Toolbar>
      </AppBar>
      <div style={contentStyle}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body1" className="rating">{rating}</Typography>
       
      </div>
    </Container>
  );
};
const  Detail = React.memo(DetailComponent);
export default Detail;