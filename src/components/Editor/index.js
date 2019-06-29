import React, {useState} from 'react';
import {Editor as DraftEditor, EditorState, RichUtils} from 'draft-js';
import {EditorWrapper} from './elements';
import 'draft-js/dist/Draft.css';

const Editor = () => {
  const [currentState, setCurrentState] = useState(EditorState.createEmpty());

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
    <EditorWrapper>
      <DraftEditor
        editorState={currentState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
      />
    </EditorWrapper>
  );
};

export default Editor;
