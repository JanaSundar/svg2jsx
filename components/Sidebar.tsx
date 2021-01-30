import { Flex, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import React from 'react'

const Options = () => {
    return (
      <Flex p={4} justifyContent="flex-start" alignItems="center">
        <FormControl
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          m={2}
        >
          <FormLabel>Functional</FormLabel>
          <Switch />
        </FormControl>
        <FormControl
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          m={2}
        >
          <FormLabel>Functional</FormLabel>
          <Switch />
        </FormControl>
        <FormControl
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          m={2}
        >
          <FormLabel>Functional</FormLabel>
          <Switch />
        </FormControl>
        <FormControl
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          m={2}
        >
          <FormLabel>Functional</FormLabel>
          <Switch />
        </FormControl>
        <FormControl
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          m={2}
        >
          <FormLabel>Functional</FormLabel>
          <Switch />
        </FormControl>
      </Flex>
    );
}

export default Options
