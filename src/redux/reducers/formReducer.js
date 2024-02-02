const initialState = {
  sellers: [], 
  vehicles: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SELLER_NAME':
      return {
        ...state,
        sellers: state.sellers.map((seller) =>
          seller.id === action.sellerId ? { ...seller, name: action.value } : seller
        ),
      };
    case 'UPDATE_SELLER_RUT':
      return {
        ...state,
        sellers: state.sellers.map((seller) =>
          seller.id === action.sellerId ? { ...seller, rut: action.value } : seller
        ),
      };
      case 'UPDATE_VEHICLE_BRAND':
        return {
          ...state,
          vehicles: state.vehicles.map((vehicle) =>
            vehicle.id === action.vehicleId ? { ...vehicle, make: action.value } : vehicle
          ),
        };
    case 'UPDATE_VEHICLE_MODEL':
      return {
        ...state,
        vehicle: state.vehicles.map((vehicle) =>
          vehicle.id === action.vehicleId ? {...vehicle, model: action.value} :vehicle 
          ),
        };
     case 'UPDATE_VEHICLE_PLATE':
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          licensePlate: action.value,
        },
      };
    case 'UPDATE_VEHICLE_PRICE':
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          price: action.value,
        },
      };
    case 'RESET_FORM':
      return initialState; 
    default:
      return state;
  }
};

export default formReducer;
