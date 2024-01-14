import React, { useState, useEffect } from "react";
import { https } from "../../service/api";
import { useParams } from "react-router";
import Screen from "./Screen/Screen";
import TicketInfo from "./TicketInfo/TicketInfo";

export default function TicketRoomPage() {
  const [danhSachGhe, setDanhSachGhe] = useState([]);
  const [thongTinPhim, setThongTinPhim] = useState([]);

  let { maLichChieu } = useParams();

  useEffect(() => {
    https
      .get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
      .then((res) => {
        setDanhSachGhe(res.data.content.danhSachGhe);
        setThongTinPhim(res.data.content.thongTinPhim);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-5">
      <Screen danhSachGhe={danhSachGhe} thongTinPhim={thongTinPhim} />
      <TicketInfo danhSachGhe={danhSachGhe} thongTinPhim={thongTinPhim} />
    </div>
  );
}
