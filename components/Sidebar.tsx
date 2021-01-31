import { Box, Checkbox, Flex, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface SidebarProps {
  checkedItems: {
    memo: boolean;
    typescript: boolean;
    singleQuote: boolean;
    semi: boolean;
  };
  setCheckedItems: React.Dispatch<
    React.SetStateAction<{
      memo: boolean;
      typescript: boolean;
      singleQuote: boolean;
      semi: boolean;
    }>
  >;
  allChecked: boolean;
  isIndeterminate: boolean;
}

const Sidebar: FC<SidebarProps> = ({
  checkedItems,
  allChecked,
  isIndeterminate,
  setCheckedItems,
}) => {
  return (
    <Flex direction="column" flex="1" color="var(--text)">
      <Text
        textTransform="uppercase"
        fontSize="12px"
        fontWeight="bold"
        letterSpacing="1px"
        px={4}
        py={2}
      >
        Options
      </Text>
      <Flex flex="1" px={4} py={2} fontWeight="bold">
        <Box>
          <Checkbox
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) => {
              setCheckedItems({
                memo: e.target.checked,
                typescript: e.target.checked,
                semi: e.target.checked,
                singleQuote: e.target.checked,
              });
            }}
          >
            All
          </Checkbox>
          <Stack pl={6} mt={1} spacing={1}>
            <Checkbox
              isChecked={checkedItems.memo}
              onChange={(e) =>
                setCheckedItems({
                  memo: e.target.checked,
                  typescript: checkedItems.typescript,
                  semi: checkedItems.semi,
                  singleQuote: checkedItems.singleQuote,
                })
              }
            >
              Memo
            </Checkbox>
            <Checkbox
              isChecked={checkedItems.typescript}
              onChange={(e) =>
                setCheckedItems({
                  memo: checkedItems.memo,
                  typescript: e.target.checked,
                  semi: checkedItems.semi,
                  singleQuote: checkedItems.singleQuote,
                })
              }
            >
              Typescript
            </Checkbox>

            <Checkbox
              isChecked={checkedItems.singleQuote}
              onChange={(e) =>
                setCheckedItems({
                  memo: checkedItems.memo,
                  typescript: checkedItems.typescript,
                  semi: checkedItems.semi,
                  singleQuote: e.target.checked,
                })
              }
            >
              Single Quote
            </Checkbox>
            <Checkbox
              isChecked={checkedItems.semi}
              onChange={(e) =>
                setCheckedItems({
                  memo: checkedItems.memo,
                  typescript: checkedItems.typescript,
                  semi: e.target.checked,
                  singleQuote: checkedItems.singleQuote,
                })
              }
            >
              Semi Colon
            </Checkbox>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
