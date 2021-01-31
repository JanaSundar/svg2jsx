import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
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
      <Text fontWeight="bold">Github</Text>
    </Flex>
  );
};

export default Navbar;
