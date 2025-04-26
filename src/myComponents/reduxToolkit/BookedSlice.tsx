import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'


const BookedSlice = createSlice({
  name: "bookedSlice",
  initialState: {
    booked: []
  },
  reducers: {
    addBooked: (state, action) => {
      const existingItem = state.booked.find(item => item.id === action.payload.id); // Giả sử mỗi phần tử có thuộc tính 'id'
      if (existingItem) {
        // Nếu phần tử đã tồn tại, tăng quantity
        existingItem.quantity ++;
          // = action.payload.quantity; // Hoặc chỉ đơn giản là tăng 1 nếu bạn muốn
      } else {
        // Nếu không, thêm phần tử mới vào mảng
        state.booked.push(action.payload);
      }
    },
    upQuantity: (state, action) => {
      const existingItem = state.booked.find(item => item.id === action.payload.id); // Giả sử mỗi phần tử có thuộc tính 'id'
      existingItem.quantity++;
    },
    downQuantity: (state, action) => {
      const existingItem = state.booked.find(item => item.id === action.payload.id); // Giả sử mỗi phần tử có thuộc tính 'id'
      existingItem.quantity--;
    },
    removeBooked: (state, action) => {
      // Xóa phần tử có quantity bằng 0
      state.booked = state.booked.filter(item => item.id !== action.payload.id);
    },
    setBookeds: (state, action) => {state.booked = action.payload}
  }
})

export const { addBooked, upQuantity, downQuantity, removeBooked, setBookeds } = BookedSlice.actions;
export default BookedSlice.reducer;