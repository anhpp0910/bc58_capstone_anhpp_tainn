import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import "./TicketInfo.css";

export default function TicketInfo({ thongTinPhim }) {
  let ngayChieuGioChieu = `${thongTinPhim.ngayChieu} ${thongTinPhim.gioChieu}`;
  let { dsGheBanChon } = useSelector((state) => state.ticketSlice);

  // Render ds ghế bạn chọn
  const renderDsGheBanChon = () => {
    return dsGheBanChon.map((ghe) => {
      return (
        <p key={ghe.tenGhe}>
          Ghế {ghe.tenGhe} - {ghe.giaVe.toLocaleString()}đ
        </p>
      );
    });
  };

  // Tính tổng tiền
  const tongTien = dsGheBanChon.reduce((total, cur) => total + cur.giaVe, 0);

  return (
    <div className="ticketInfo grid grid-cols-subgrid col-span-2 mx-5 p-5 text-md font-medium">
      <h3 className="text-3xl text-center font-medium text-purple-700">
        {thongTinPhim.tenPhim}
      </h3>
      <div>
        <div className="ticketInfo_item line flex justify-between items-center">
          <p>Cụm rạp: </p>
          <span className="text-purple-700">{thongTinPhim.tenCumRap}</span>
        </div>
        <div className="ticketInfo_item line flex justify-between items-center">
          <p>Địa chỉ: </p>
          <span className="text-purple-700">{thongTinPhim.diaChi}</span>
        </div>
        <div className="ticketInfo_item line flex justify-between items-center">
          <p>Rạp: </p>
          <span className="text-purple-700">{thongTinPhim.tenRap}</span>
        </div>
        <div className="ticketInfo_item line flex justify-between items-center">
          <p>Ngày giờ chiếu: </p>
          <span className="text-purple-700">
            {moment(ngayChieuGioChieu).format("DD/MM/YYYY - hh:mm")}
          </span>
        </div>
        <div className="ticketInfo_item flex justify-between">
          <p>Ghế bạn chọn: </p>
          <span className="text-purple-700">{renderDsGheBanChon()}</span>
        </div>
      </div>
      <div className="grid grid-row-2 mt-5">
        <div className="flex justify-between items-center text-3xl">
          <p>TỔNG TIỀN: </p>
          <span className="text-purple-700">{tongTien.toLocaleString()}đ</span>
        </div>
        <div className="m-auto">
          <button className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-48 py-3 mt-5">
            ĐẶT VÉ
          </button>
        </div>
      </div>
    </div>
  );
}
