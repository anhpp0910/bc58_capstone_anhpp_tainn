import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dsGheBanChon: [],
};

const ticketSlice = createSlice({
  name: "ticketSlice",
  initialState,
  reducers: {
    addToDsGheBanChon: (state, action) => {
      let index = state.dsGheBanChon.findIndex(
        (ghe) => ghe.tenGhe === action.payload.tenGhe
      );
      // Nếu ghế chưa được chọn thì add vào ds ghế bạn chọn
      if (index === -1) {
        state.dsGheBanChon = [...state.dsGheBanChon, action.payload];
        // Nếu ghế đang được chọn thì remove khỏi ds ghế bạn chọn
      } else state.dsGheBanChon.splice(index, 1);
    },
    clearDsGheBanChon: (state) => {
      state.dsGheBanChon = [];
    },
  },
});

export const { addToDsGheBanChon, clearDsGheBanChon } = ticketSlice.actions;

export default ticketSlice.reducer;
