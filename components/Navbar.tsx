import { Flex, Text } from '@chakra-ui/react';
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
        <a>
          <Image src="/Logo.svg" alt="Logo" width="100%" height="50%" />
        </a>
      </Link>
      <Text fontWeight="bold">Github</Text>
    </Flex>
  );
};

export default Navbar;
