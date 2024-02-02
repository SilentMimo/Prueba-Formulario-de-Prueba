import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tableReducer from './redux/slices/tableSlice';  // Asegúrate de importar el slice correcto

const initialState = {
  form: {
    sellers: [],
    vehicles: [],
  },
  table: {
    vehicles: [],
    sellers: [],
  },
};

const rootReducer = combineReducers({
  table: tableReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
