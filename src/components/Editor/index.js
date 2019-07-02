import React, {useState} from 'react';
import {Editor as DraftEditor, EditorState, RichUtils} from 'draft-js';
import {blockRenderer, attachImage} from './utils';
import {Wrapper, Toolbar, Container} from './elements';
import InlineStyleButtons from './inlineStyleButtons';
import decorators from './decorators';
import 'draft-js/dist/Draft.css';

const Editor = () => {
  const [currentState, setCurrentState] = useState(
    EditorState.createEmpty(decorators)
  );
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

  const toggleStyle = style => e => {
    e.preventDefault();
    setCurrentState(RichUtils.toggleInlineStyle(currentState, style));
  };

  return (
    <Wrapper>
      <Toolbar>
        <InlineStyleButtons
          toggleStyle={toggleStyle}
          currentStyle={currentInlineStyle}
        />
        <input
          type="file"
          accept="image/*"
          onChange={attachImage(currentState, setCurrentState)}
        />
      </Toolbar>
      <Container>
        <DraftEditor
          editorState={currentState}
          onChange={onChange}
          blockRendererFn={blockRenderer}
          handleKeyCommand={handleKeyCommand}
          placeholder="Draft something..."
        />
      </Container>
    </Wrapper>
  );
};

export default Editor;
