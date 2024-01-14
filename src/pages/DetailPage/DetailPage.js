import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { https } from "../../service/api";
import { Rate } from "antd";
import TabMovieTime from "./TabMovieTime/TabMovieTime";

export default function DetailPage() {
  const [detail, setDetail] = useState({});
  let { maPhim } = useParams();

  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((res) => setDetail(res.data.content))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container flex space-x-16 justify-start">
        <div className="w-96 max-h-80">
          <img
            className="object-cover w-full h-full"
            src={detail.hinhAnh}
            alt={detail.tenPhim}
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-purple-700">
            {detail.tenPhim}
          </h1>
          <p>{detail.moTa}</p>
          <Rate disabled allowHalf value={detail.danhGia / 2} />
        </div>
      </div>
      <div className="container">
        <TabMovieTime />
      </div>
    </>
  );
}
