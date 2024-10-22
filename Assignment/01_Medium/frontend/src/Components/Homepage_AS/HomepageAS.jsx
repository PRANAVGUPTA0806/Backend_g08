import React, { useState, useEffect } from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import Left from './left.jsx';
import Right from './Right.jsx';
import Posts from './post.jsx';
import { useNavigate } from 'react-router-dom';

function HomepageAS() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <Box display="flex" position="relative">
      <Box width={{ base: '100%', md: '20%' }}>
        <Left />
      </Box>
      <Box width={{ base: '100%', md: '60%' }}>
        <Posts />
      </Box>
      {!isMobile && (
        <Box width={{ base: '0%', md: '20%' }}>
          <Right />
        </Box>
      )}
    </Box>
  );
}

export default HomepageAS;
