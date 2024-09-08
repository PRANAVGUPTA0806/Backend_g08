import React from 'react';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import './HomepageBS.css';
import { Avatar, Box, Heading, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

function HomepageBS() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/homepage');
    }
  },[])

  return (
    <div>
      <Navbar />

      <div className="banner">
        <div style={{ paddingLeft: '120px' }}>
          <h1>Human
            <br></br>
          stories & ideas</h1>
          <h3>
          A place to read, write, and deepen your understanding
          </h3>
          <button
            
          >
            <Link to='/sign'>
            Start reading
            </Link>
          </button>
        </div>

        <div id="banner-img-box">
          <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" id="mmmmmimg" alt="" />
        </div>
      </div>

      <div className="trending">
        <Link to="/">
          <img src="/tranding.png" alt="F9BO9K.png" border="0" />
        </Link>
      </div>
      <br />

      <div className="blogs">

        <div style={{ position: 'relative', right: '0' }} className="discover">
          <div style={{ position: 'sticky', top: '110px' }}>
            <h1>DISCOVER MORE OF WHAT MATTERS TO YOU</h1>

            <div className="explore">
              <button>Self</button>
              <button>Relationships</button>
              <button>Data Science</button>
              <button>Programming</button>
              <button>Productivity</button>
              <button>Javascript</button>
              <button>Development</button>
              <button>Politics</button>
              <button>Health</button>
            </div>

            <div style={{ width: '100%', gap: '55px' }} className="info">
              <p>Help</p>
              <p>Status</p>
              <p>Writers</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Privacy</p>
              <p>Terms</p>
              <p>About</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageBS;
