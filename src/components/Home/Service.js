import React from 'react';


// config

// components
import {
  // Card,
  CardDeck,
  NavLink,
  // CardBody,
  // CardText
} from 'reactstrap';

// images

// styles

class Service extends React.Component {
  render() {
    return (
      <div className="Service">
        <h1 className="txt2" data-aos="zoom-in">Projects View</h1>
        <CardDeck className="Service row-lg-12 row-md-12 row-sm-12">
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in-right">
            
          <a href="https://doni-train.netlify.com"><h5 className="head">Train Booking System</h5></a>  
              
          <a href="https://doni-train.netlify.com"> <img className="imgproject"  src={ require('../../images/trainmetro.PNG') } width='250' height="160" alt='f' /></a> 
               
          </div>
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in-right">
            
          <a href="https://doni-recipe.netlify.com"><h5 className="head">Food Recipe</h5></a>  
              
          <a href="https://doni-recipe.netlify.com"> <img className="imgproject"  src={ require('../../images/recipe.PNG') } width='250' height="160" alt='f' /></a>  
              
            
          </div>
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in-left">
          <a href="https://simovierentals.netlify.com"><h5 className="head">Movie Rental</h5></a>  
              
          <a href="https://simovierentals.netlify.com"> <img className="imgproject" src={ require('../../images/movierental.jpg') } width='250' height="160" alt='f' /></a>
              
          </div>
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in-left">
            
          <a href="https://doni-currency.netlify.com"><h5 className="head">Currency Converter</h5></a>  
              
          <a href="https://doni-currency.netlify.com"> <img className="imgproject"  src={ require('../../images/currency.PNG') } width='250' height="160"  alt='f' /></a>  
              
          </div>
        </CardDeck>
      </div>
    );
  }
}

export default Service;
