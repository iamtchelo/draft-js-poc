import React, {useState} from 'react';
import {
  Editor as DraftEditor,
  EditorState,
  RichUtils,
  CompositeDecorator,
} from 'draft-js';
import {Wrapper, Toolbar, Container} from './elements';
import InlineStyleButtons from './inlineStyleButtons';
import decorators from './decorators';
import 'draft-js/dist/Draft.css';

const plugins = new CompositeDecorator(decorators);

const Editor = () => {
  const [currentState, setCurrentState] = useState(
    EditorState.createEmpty(plugins)
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
