import React, { useState, useEffect } from "react";
import { https } from "../../../service/api";
import { Tabs } from "antd";
import ListMovieTime from "./ListMovieTime";
import { useParams } from "react-router";

export default function TabMovieTime() {
  let { maPhim } = useParams();
  const [dsHeThongRap, setDsHeThongRap] = useState([]);

  useEffect(() => {
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
      .then((res) => {
        setDsHeThongRap(res.data.content.heThongRapChieu);
      })
      .catch((err) => console.log(err));
  }, []);

  const items = dsHeThongRap.map((heThongRap) => {
    return {
      key: heThongRap.tenHeThongRap,
      label: (
        <div className="flex justify-around items-center font-bold space-x-5">
          <img
            key={heThongRap.tenHeThongRap}
            className="w-16"
            src={heThongRap.logo}
            alt={heThongRap.tenHeThongRap}
          />
          <h1>{heThongRap.tenHeThongRap}</h1>
        </div>
      ),
      children: <ListMovieTime dsCumRapChieu={heThongRap.cumRapChieu} />,
    };
  });

  return (
    <>
      {dsHeThongRap.length === 0 ? (
        <h1 className="text-center text-3xl font-bold text-gray-500">
          Chưa có thông tin lịch chiếu
        </h1>
      ) : (
        <Tabs
          style={{ boxShadow: "inset 2px 4px 8px 2px rgb(0 0 0 / 0.05)" }}
          items={items}
          tabPosition="left"
        />
      )}
    </>
  );
}
