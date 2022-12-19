import React from 'react';
import './Header.css';

import { Button, Box, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      p={4}
      display='flex'
      justifyContent='space-between'
      className='header'
      alignItems={'center'}
    >
      <h1 className='header-text'>Artificial Intelligence Image Generator</h1>
      <Button
        target={'_blank'}
        as='a'
        href='https://beta.openai.com/docs'
        variantcolor='teal'
        size='md'
        mr={'2rem'}
      >
        API Docs
      </Button>
    </Box>
  );
};

export default Header;
