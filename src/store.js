import { configureStore } from '@reduxjs/toolkit';
import carReducer from './features/car/carSlice';
import modalReducer from './features/modal/modalSlice';
import userReducer from './features/users/userSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    modal: modalReducer,
    user: userReducer,
  },
});
