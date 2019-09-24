import React from 'react';
import { Media } from 'reactstrap';


class Feature extends React.Component {
 
  
  render(){
  return (
    <div className='media-container'>
    <h1 data-aos="zoom-in">Why Work With Me ?</h1>
    <Media>
    
      <Media left href="#">
      <div data-aos="fade-right" >
       <img id='img1' className="absence" src={ require('../../images/experience.jpg') } width='500'  alt='f' />
       </div>
      </Media>
      <Media id='text' body>
      <div data-aos="fade-left" >
      <h2 className="center">Experienced</h2>
        
    <p className="center"> I have what it takes to achieve the end result when it comes too development, this was made possible by constant practise and learning from others .</p>
</div>
      </Media>
    </Media>
    <Media>
    
        <Media id='text' body>
        <div data-aos="fade-right" >
        <h2 className="center">Ready to Work</h2>
          
       <p className="center">I am ready to work and a focused, i give my best where it is needed and I am not scared to ask for help, when trapped.</p></div>
        </Media>

        <Media right href="#">
        <div data-aos="fade-left" >
        <img id='img1' className="absence" src={ require('../../images/ready.jpg') } width='440' alt='f' />
        </div>
        </Media>
      </Media>
      <Media>
      <Media left href="#">
      <div data-aos="fade-right" >
      <img className="absence" id='img1' src={ require('../../images/team.jpg') } width='500' height='350' alt='f' />
      </div>
      </Media>
      <Media  id='text' body>
      <div data-aos="fade-left" >
      <h2 className="center">Team Player</h2>
        
     <p className="center"> I'm a teamplayer,I have learnt how to adjust my emotion just to make something work, I have been a team player at many instances and I try to bridge any gap to make a goal attainable.</p>

        </div>
      </Media>
    </Media>
    <Media>
        <Media id='text' body>
        <div data-aos="fade-left" >
        <h2 className="center">Trusted Remote Developer</h2>
          
       <p className="center"> I work well remotely with little or no supervison, communication and time management is the key to achieving this .</p>
        </div>
        </Media>
        <Media right href="#">
        <div data-aos="fade-right" >
        <img id='img1'  className="absence" src={ require('../../images/remote.jpg') } width='440' alt='f' />
        </div>
        </Media>
      </Media>
      
      
    
      </div>
      
  );
}
}

export default Feature;