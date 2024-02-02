import { createSlice } from '@reduxjs/toolkit';

// Añade datos por defecto a initialState
export const initialState = {
  form: {
    vehicles: [{
        id: 1,
        sellerId: 1,
        brand: 'Toyota',
        model: 'Camry',
        licensePlate: 'ABC123',
        price: 25000,
      },],
    sellers: [{
        id: 1,
        name: 'John Doe',
        rut: '123456789',
      },],
  },
};

export const tableSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: { 
      addSeller: (state, action) => {
      console.log('actionpene: ' + JSON.stringify(action.payload.seller));
      state.form.sellers.push({id: action.payload.seller.id,name: action.payload.seller.nom, rut: action.payload.seller.rut,
        licensePlate: action.payload.seller.licensePlate, model: action.payload.seller.model,
        brand:  action.payload.seller.brand,price: action.payload.seller.price
    });
    },
    initializeTable: (state, action) => {
        state.form.sellers.push(...action.payload.sellers);
    },
},
});

export const { addVehicle, addSeller, initializeTable } = tableSlice.actions;

export default tableSlice.reducer;
