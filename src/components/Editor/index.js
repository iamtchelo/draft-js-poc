import React, {useState} from 'react';
import {Editor as DraftEditor, EditorState} from 'draft-js';
import {EditorWrapper} from './elements';
import 'draft-js/dist/Draft.css';

const Editor = () => {
  const [currentState, setCurrentState] = useState(EditorState.createEmpty());

  const onChange = state => {
    setCurrentState(state);
  };

  return (
    <EditorWrapper>
      <DraftEditor editorState={currentState} onChange={onChange} />
    </EditorWrapper>
  );
};

export default Editor;
