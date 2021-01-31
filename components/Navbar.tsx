import { Flex, Text, Link as ChakraLink, Skeleton } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
          <Image
            src="/Logo.svg"
            alt="Logo"
            width="40%"
            height="40%"
            priority={true}
          />
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
        <Image
          src="/Github.svg"
          alt="Github"
          width="40%"
          height="40%"
          priority={true}
        />
      </ChakraLink>
    </Flex>
  );
};

export default Navbar;
