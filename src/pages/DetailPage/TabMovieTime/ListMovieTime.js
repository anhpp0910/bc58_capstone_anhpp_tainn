import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function List({ dsCumRapChieu }) {
  return (
    <div className="ms-6 space-y-5 overflow-y-scroll" style={{ height: 600 }}>
      {dsCumRapChieu.map((cumRap, index) => {
        return (
          <div key={index} className="py-5 flex justify-start">
            <div>
              <img
                className="w-32 h-40 object-cover"
                alt={cumRap.tenCumRap}
                src={cumRap.hinhAnh}
              />
            </div>
            <div className="ms-6">
              <h1 className="text-purple-700 text-xl font-medium">
                {cumRap.tenCumRap}
              </h1>
              <p>{cumRap.diaChi}</p>
              <div className="grid grid-cols-3 gap-5 mt-5">
                {cumRap.lichChieuPhim.map((item) => {
                  return (
                    <NavLink
                      key={item.maLichChieu}
                      to={`/ticketroom/${item.maLichChieu}`}
                    >
                      <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        {moment(item.ngayChieuGioChieu).format(
                          "DD/MM/YYYY - hh:mm"
                        )}
                      </button>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
