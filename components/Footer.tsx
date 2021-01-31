import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box bg="var(--primary)" color="var(--text)" p={4}>
      <Text textAlign="center" fontWeight="bold">
        Developed by Jana
      </Text>
    </Box>
  );
};

export default Footer;
