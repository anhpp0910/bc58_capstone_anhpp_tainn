import React, { useState, useEffect } from "react";
import { https } from "../../../service/api";
import { Tabs } from "antd";
import List from "./List";

export default function TabMovie() {
  const [dsHeThongRap, setDsHeThongRap] = useState([]);

  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((res) => {
        setDsHeThongRap(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  const items = dsHeThongRap.map((heThongRap) => {
    return {
      key: heThongRap.tenHeThongRap,
      label: (
        <img
          key={heThongRap.tenHeThongRap}
          className="w-16"
          src={heThongRap.logo}
          alt={heThongRap.tenHeThongRap}
        />
      ),
      children: (
        <Tabs
          items={heThongRap.lstCumRap.map((cumRap) => {
            return {
              key: cumRap.tenCumRap,
              label: (
                <div
                  style={{ width: 400 }}
                  key={cumRap.tenCumRap}
                  className="text-left flex justify-start items-center"
                >
                  <img
                    key={cumRap.tenCumRap}
                    className="w-16 me-5"
                    src={cumRap.hinhAnh}
                    alt={cumRap.tenCumRap}
                  />
                  <div>
                    <h1 className="text-purple-700 text-xl font-medium">
                      {cumRap.tenCumRap}
                    </h1>
                    <p>{cumRap.diaChi}</p>
                  </div>
                </div>
              ),
              children: <List dsPhim={cumRap.danhSachPhim} />,
            };
          })}
          tabPosition="left"
          style={{ height: 600 }}
        />
      ),
    };
  });

  return (
    <Tabs
      style={{ boxShadow: "inset 2px 4px 8px 2px rgb(0 0 0 / 0.05)" }}
      items={items}
      tabPosition="left"
    />
  );
}
