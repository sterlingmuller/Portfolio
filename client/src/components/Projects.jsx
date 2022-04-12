import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export const Projects = () => {
  const [popup, setPopup] = useState(false);
  const [currentPic, setCurrentPic] = useState('');

  function handleClick(e) {
    setPopup(!popup);
    setCurrentPic(e.target.src);
  }

  return (
    <div className="card-grid">
      <div className="proj-card">
        <div className='card-image'>
          <img src={"./ThumbsUp.png"} onClick={(e) => handleClick(e)}></img>
        </div>
        <div className="card-body">
          <h2 className="title">Thumbs Up</h2>
          <p> Thumbs Up is a carpooling application that connects riders and drivers who are looking to decrease cost of travel and reduce their carbon footprint. Drivers are able to create trips while riders are able to search for trips they wish to take and request a seat. Once the driver accepts a rider, they are able to use a real time chat feature to schedule pick-up locations and negotiate fuel costs. Both riders and drivers are able to view their upcoming and previous trips, and riders have the ability to rate their driver on a 5 star scale.
            </p>
            <p>
The app was deployed with Heroku and was designed and developed by a team of 6 engineers in 1.5 weeks. Front end technologies used include ReactJS, React Router, Bootstrap, Webpack, Babel, HTML5, and CSS3. Back end technologies include PostgreSQL, Express, and Node.
          </p>
        </div>
        <div className='project-links' style={{'display': 'flex', 'justifyContent': 'space-evenly'}}>
        <a target='_blank' className='project-link' href='https://thumbsup-sterling.herokuapp.com/'>Site</a>
          <a target='_blank' className='project-link' href='https://github.com/sterlingmuller/ThumbsUp'>Github</a>
        </div>
      </div>
      <div className="proj-card">
        <div className='card-image'>
          <img src={"./backend.png"} onClick={(e) => handleClick(e)}></img>
        </div>
        <div className="card-body">
          <h2 className="title">Atelier Backend System Design</h2>
          <p>Atelier System Design is a backend system designed to increase performance of the Ratings and Reviews section of a mock e-commerce website. Originally, the backend of this website was a monolithic design and needed performance improvements to handle increased web traffic.
            </p>
            <p>The database was created with PostgreSQL and loaded with over 10 million records. The server and API enpoints were developed using Express. The system was deployed on AWS and horizontally scaled by using an NGINX load balancer, three EC2 micro servers, and a database server. Testing was performed locally using k6 and remotely using loader.io and AWS: CloudWatch.</p>
          <p>Ultimately, the PostgreSQL queries were capable of processing the dataset in under 4 ms and the deployed system was capable of handling over 8,000 requests per second.</p>
        </div>
        <div className='project-links'>
        <a target='_blank' className='project-link' href='https://github.com/sterlingmuller/Atelier-System-design'> Github</a>
        </div>
      </div>
      <div className="proj-card">
        <div className='card-image'>
          <img src={"./Nanya.png"} onClick={(e) => handleClick(e)}></img>
        </div>
        <div className="card-body">
          <h2 className="title">Nenya</h2>
          <p>Nenya is a dynamic frontend web application designed and built for a mock e-commerce clothing brand. The application offers users ability to view store products/styles, select items for purchase, view questions and answers, and see how others rated the selected product. The app was built by myself and two other engineers, primarily using ReactJS with an ExpressJS proxy server. I developed the app's global styles and the Overview section of the application which includes a magnifiable main image, image carousel, product information, and a cart.
          </p>
        </div>
        <div className='project-links'>
        <a target='_blank' className='project-link' href='https://github.com/sterlingmuller/Nanya'> Github</a>
        </div>
      </div>

      <div className='popup' style={{display: popup ? 'flex' : 'none'}}>
        <img src={currentPic} className='popupImg'/>
         <FaTimes className='exit' onClick={event => handleClick(event)}/>
        </div>
    </div>
  )
}