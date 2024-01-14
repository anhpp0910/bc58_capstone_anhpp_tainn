import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dsGheBanChon: [],
  thongTinDatVe: {
    maLichChieu: 0,
    danhSachVe: [],
  },
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
    clearDsGhe: (state, action) => {
      state.dsGheBanChon = [];
    },
    getThongTinMaLichChieu: (state, action) => {
      state.thongTinDatVe.maLichChieu = action.payload;
    },
    addDanhSachVe: (state, action) => {
      let danhSachVeClone = state.thongTinDatVe.danhSachVe;
      state.thongTinDatVe.danhSachVe = [...danhSachVeClone, action.payload];
    },
  },
});

export const {
  getThongTinMaLichChieu,
  addToDsGheBanChon,
  addDanhSachVe,
  clearDsGhe,
} = ticketSlice.actions;

export default ticketSlice.reducer;
