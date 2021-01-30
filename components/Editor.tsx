import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import debounce from '../utils';
import { UnControlled as CodeEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/hint/xml-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';

interface Props {
  readOnly?: boolean;
  defaultValue?: string;
  name: string;
  type: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<Props> = ({
  readOnly,
  defaultValue,
  name,
  type,
  setValue,
}) => {
  const onChange = (editor: any, data: any, value: string) => {
    setValue(value);
  };

  return (
    <Flex direction="column" flex="1">
      <Text
        color="var(--text)"
        textTransform="uppercase"
        fontSize="12px"
        fontWeight="bold"
        bg="#282a36"
        px={4}
        py={2}
      >
        {name}
      </Text>
      <CodeEditor
        value={defaultValue}
        options={{
          mode: type === 'editor' ? 'xml' : 'javascript',
          theme: 'dracula',
          lineNumbers: true,
          readOnly: readOnly,
          indentUnit: 2,
          tabSize: 2,
          styleActiveLine: true,
          lineWrapping: true,
          smartIndent: true,
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
          autoCloseTags: true,
          keyMap: 'sublime',
          matchBrackets: true,
          autoCloseBrackets: true,
          viewportMargin: Infinity,
        }}
        onChange={type === 'editor' ? debounce(onChange, 200) : null}
        className="xml-editor"
        autoScroll
      />
    </Flex>
  );
};

export default Editor;
