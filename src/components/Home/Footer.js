import React from 'react';
import Gmail from "../../images/gmail.png";
// config

// components
import {
  Nav,
  NavLink,
  CardDeck
} from 'reactstrap';

// images

// styles

class Footer extends React.Component {
  render() {
    return (
      <div className="footies row-lg-12 row-md-12 row-sm-12">
        <CardDeck id="contact" >
          <div className="col-lg-4 col-md-4 col-sm-4">
            <Nav vertical >
              <img className="footer-logo" data-aos="flip-left" src={require("../../images/Donifez.png")} width="80"  alt="ofj" />
              <div className="icons">
                <a className="hov" href='https://github.com/Donifez/'><i className="fab fa-github"></i></a>
                <a className="hov" href='https://twitter.com/donifez224/'><i className="fab fa-twitter"></i></a>
                <a className="hov" href='https://www.instagram.com/donifez224/'><i className="fab fa-instagram" ></i></a>
              </div>
            </Nav>
          </div>
          <div className="txt col-lg-4 col-md-4 col-sm-4">
            <Nav vertical  >
              <h4 id='project'>Projects</h4> <a className="links" href="http://doni-train.netlify.com">Train Booking System </a> <a className="links" href="http://doni-recipe.netlify.com">Food Recipe </a> <a className="links" href="http://simovierentals.netlify.com">Movie Rental</a> <a className="links" href="http://doni-currency.netlify.com">Currency Converter</a>
            </Nav >
          </div>
          <div className="txt col-lg-4 col-md-4 col-sm-4">
           <figure className="gmail">
             <figurecaption> Click image to send a mail</figurecaption>
           <a  href=" https://mail.google.com/mail/u/0/?view=cm&fs=1&to=donifez224@gmail.com&su=SUBJECT&body&tf=1"> <img  src={Gmail} width='240' height="150" alt='f' /></a>
           </figure>
         
          </div>
          <div className="footer-text col-lg-12 col-md-12 col-sm-12">
            <p>Phone Number: 07067346058</p>
          <p>© 2019 Donifez, All Rights Reserved.</p>
          </div>
        </CardDeck>
        
         </div>

    );
  }
}

export default Footer;
