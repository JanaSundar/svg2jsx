import { Flex, useToast, Skeleton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import createJsxTemplate from '../utils/createJsxTemplate';

const Editor = dynamic(import('./Editor'), {
  ssr: false,
  loading: () => <Skeleton flex="1" />,
});

interface ApiResponse {
  success: boolean;
  code: string;
}

const Content = () => {
  const [value, setValue] = useState('');
  const [code, setCode] = useState('');
  const toast = useToast();

  useEffect(() => {
    const generateJsx = async () => {
      try {
        const { data } = await axios.post<ApiResponse>('/api/svg2jsx', {
          svg: value,
        });

        const FormattedCode = createJsxTemplate({
          code: data.code,
          memo: true,
          typescript: true,
        });

        setCode(FormattedCode);
      } catch (error) {
        toast({
          title: error?.response?.message || 'Error Occurred',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };

    if (value) {
      generateJsx();
    } else {
      setCode('');
    }
  }, [value]);

  return (
    <Flex
      flex="1"
      bg="var(--primary)"
      wrap={['wrap', 'wrap', 'nowrap']}
      overflow="auto"
    >
      <Flex
        flex={['1', '1', '0.5']}
        minW={['300px', '350px', '250px']}
        m={2}
        bg="var(--secondary)"
        shadow="md"
      ></Flex>
      <Flex flex="1" p={2} overflowX="auto" minW={['300px', '350px', '250px']}>
        <Editor name="svg input" type="editor" {...{ setValue }} />
      </Flex>
      <Flex flex="1" p={2} overflowX="auto" minW={['300px', '350px', '250px']}>
        <Editor readOnly defaultValue={code} name="jsx output" type="preview" />
      </Flex>
    </Flex>
  );
};

export default Content;
