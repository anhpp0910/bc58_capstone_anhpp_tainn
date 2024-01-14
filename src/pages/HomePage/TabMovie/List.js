import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function List({ dsPhim }) {
  return (
    <div className="space-y-5 overflow-y-scroll" style={{ height: 600 }}>
      {dsPhim.map((phim, index) => {
        return (
          <div key={index} className="py-5 flex justify-around">
            <NavLink
              to={`/detail/${phim.maPhim}`}
              className="flex justify-around"
            >
              <div>
                <img
                  className="w-32 h-40 object-cover"
                  alt={phim.tenPhim}
                  src={phim.hinhAnh}
                />
              </div>
              <div className="ms-4">
                <h1 className="text-purple-700 text-xl font-medium mb-4">
                  {phim.tenPhim}
                </h1>
                <div className="grid grid-cols-3 gap-8">
                  {phim.lstLichChieuTheoPhim.map((item, index) => {
                    return (
                      <p key={index}>
                        {moment(item.ngayChieuGioChieu).format(
                          "DD/MM/YYYY - hh:mm"
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
