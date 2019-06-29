import React, {useState} from 'react';
import {Editor as DraftEditor, EditorState, RichUtils} from 'draft-js';
import {Wrapper, Toolbar, Container} from './elements';
import InlineStyleButtons from './inlineStyleButtons';
import 'draft-js/dist/Draft.css';

const Editor = () => {
  const [currentState, setCurrentState] = useState(EditorState.createEmpty());
  const currentInlineStyle = currentState.getCurrentInlineStyle();

  const onChange = state => {
    setCurrentState(state);
  };

  const handleKeyCommand = (command, state) => {
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      setCurrentState(newState);
    }
  };

  return (
    <Wrapper>
      <Toolbar>
        <InlineStyleButtons currentStyle={currentInlineStyle} />
      </Toolbar>
      <Container>
        <DraftEditor
          editorState={currentState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
        />
      </Container>
    </Wrapper>
  );
};

export default Editor;
