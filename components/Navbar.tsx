import { Flex, Text, Link as ChakraLink, Image } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      py={4}
      alignItems="center"
      bg="var(--primary)"
      color="var(--text)"
      px={8}
    >
      <Link href="/">
        <ChakraLink outline="none" border="none">
          <Image src="/Logo.svg" alt="Logo" width="100%" height="50%" />
        </ChakraLink>
      </Link>

      <ChakraLink
        outline="none"
        border="none"
        _focus={{
          border: 'none',
          outline: 'none',
        }}
        isExternal
        href="https://github.com/JanaSundar/svg2jsx"
        textAlign="center"
      >
        <Image src="/Github.svg" alt="Logo" width="100%" height="50%" />
      </ChakraLink>
    </Flex>
  );
};

export default Navbar;
