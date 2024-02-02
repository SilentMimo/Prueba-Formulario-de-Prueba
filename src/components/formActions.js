// formAction.js
let sellerIdCounter = 0; 
let vehicleIdCounter = 0; 
export const addVehicle = (vehicle) => {
  return {
    type: 'ADD_VEHICLE',
    payload: {
      id: Date.now(),
      sellerId:  Date.now(), // Asegúrate de tener un identificador del vendedor en tu vehículo
      ...vehicle,
    },
  };
};

export const addSeller = (seller) => {
  return {
    type: 'ADD_SELLER',
    payload: {
      id: Date.now(),
      ...seller,
    },
  };
};
export const updateSellerName = (value) => {
  return {
    type: 'UPDATE_SELLER_NAME',
    value,
  };
};

export const updateSellerRut = (value) => {
  return {
    type: 'UPDATE_SELLER_RUT',
    value,
  };
};

export const updateVehicleBrand = (value) => {
  return {
    type: 'UPDATE_VEHICLE_BRAND',
    value,
  };
};

export const updateVehicleModel = (value) => {
  return {
    type: 'UPDATE_VEHICLE_MODEL',
    value,
  };
};

export const updateVehiclePlate = (value) => {
  return {
    type: 'UPDATE_VEHICLE_PLATE',
    value,
  };
};

export const updateVehiclePrice = (value) => {
  return {
    type: 'UPDATE_VEHICLE_PRICE',
    value,
  };
};




export const resetForm = () => {
  sellerIdCounter = 0; 
  vehicleIdCounter = 0; 
  return {
    type: 'RESET_FORM',
  };
};
