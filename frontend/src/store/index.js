import { createStore } from 'redux';

// Estado inicial vazio (você pode expandir depois)
const initialState = {};

function rootReducer(state = initialState, action) {
  return state;
}

// Criação da store
const store = createStore(rootReducer);

// Exporta corretamente a store
export { store };
