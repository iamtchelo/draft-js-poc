import React from 'react';
import {EditorState, AtomicBlockUtils} from 'draft-js';
import {Image} from './elements';

export const blockRenderer = block => {
  const type = block.getType();
  if (type === 'atomic') {
    return {
      component: ({contentState}) => {
        const entity = contentState.getEntity(block.getEntityAt(0));
        const {src} = entity.getData();

        return <Image src={src} />;
      },
      editable: false,
    };
  }

  return null;
};

export const attachImage = (currentState, setCurrentState) => event => {
  if (event.target.files && event.target.files.length) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      const content = currentState.getCurrentContent();
      const contentWithEntity = content.createEntity('IMAGE', 'IMMUTABLE', {
        src: reader.result,
      });
      const entityKey = contentWithEntity.getLastCreatedEntityKey();
      const newState = EditorState.set(currentState, {
        currentContent: contentWithEntity,
      });
      setCurrentState(
        AtomicBlockUtils.insertAtomicBlock(newState, entityKey, ' ')
      );
    });
  }
};
