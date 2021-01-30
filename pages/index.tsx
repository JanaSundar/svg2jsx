import { Flex } from '@chakra-ui/react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import MetaData from '../components/MetaData';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Flex flex="1" direction="column" height="100vh">
      <MetaData />
      <Navbar />
      <Content />
      <Footer />
    </Flex>
  );
}
