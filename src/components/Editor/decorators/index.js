import {CompositeDecorator} from 'draft-js';
import hashtag from './hashtag';
import quotes from './quotes';

const decorators = new CompositeDecorator([hashtag, quotes]);

export default decorators;
