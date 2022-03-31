import React from 'react';

export const Projects = () => {

  return (
    <div className="card-grid">
      <div className="proj-card">
        <div className='card-image'>
          <img src={"./thumbsUp.png"}></img>
        </div>
        <div className="card-body">
          <h2>Thumbs Up</h2>
          <p>Thumbs Up is a fullstack web application for connecting riders with drivers in their area. Drivers are able to plan trips and approve or decline requests from riders to join. Riders are able to search for nearby trips and request a seat. The goal of Thumbs Up is to provide rides to those without access and reduce fuel costs, carbon emissions, and traffic through carpooling.</p>
        </div>
        <div className='project-links'>
        <a target='_blank' className='project-link' href='https://thumbsup-sterling.herokuapp.com/'>Site</a>
          <a target='_blank' className='project-link' href='https://github.com/sterlingmuller/ThumbsUp'>Github</a>
        </div>
      </div>
      <div className="proj-card">
        <div className='card-image'>
          <img src={"./backend.png"}></img>
        </div>
        <div className="card-body">
          <h2>Atelier Backend System Design</h2>
          <p>Atelier System Design is a backend system designed to increase performance of the Ratings and Reviews section of a mock e-commerce website. The goal was to replace the existing API with a backend system that can support a data set with over 10 million entries and can scale to meet the demands of production traffic. The databse was created with PostgreSQL and the server and API enpoints were developed using ExpressJS. The system was deployed on AWS and horizontally scaled by using an NGINX load balancer, three EC2 micro servers, and a database server. Testing was performed locally using k6 and remotely using loader.io and AWS: CloudWatch.</p>
        </div>
        <div className='project-links'>
        <a target='_blank' className='project-link' href='https://github.com/sterlingmuller/Atelier-System-design'> Github</a>
        </div>
      </div>
      <div className="proj-card">
        <div className='card-image'>
          <img src={"./Nanya.png"}></img>
        </div>
        <div className="card-body">
          <h2>Nanya</h2>
          <p>Nanya is a dynamic frontend web application designed and built for a mock e-commerce clothing brand. The application offers users ability to view store products/styles, select items for purchase, view questions and answers, and see how others rated the selected product. The app was built by myself and two other engineers, primarily using ReactJS with an ExpressJS proxy server. I developed the Overview section of the application which includes a magnifiable main image, image carousel, product information, and a cart.
          </p>
        </div>
        <div className='project-links'>
        <a target='_blank' className='project-link' href='https://github.com/sterlingmuller/Nanya'> Github</a>
        </div>
      </div>
    </div>
  )
}