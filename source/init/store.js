// Core
import { createStore } from 'redux';

// Reduser
import { rootReducer } from './rootReducer';

//Enhancer
import { enhancedStore } from './middleware/core';

export const store = createStore(rootReducer, enhancedStore);
