import React, { useEffect, useState } from "react";
import { https } from "../../../service/api";
import { Carousel } from "antd";
import "./Banner.css";

export default function Banner() {
  const [bannerArr, setBannerArr] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachBanner")
      .then((res) => setBannerArr(res.data.content))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ marginTop: -70 }}>
      <Carousel autoplay>
        {bannerArr.map((banner, index) => {
          return (
            <div key={index}>
              <img
                className="bannerImg"
                src={banner.hinhAnh}
                alt={banner.hinhAnh}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
