import React from "react";
import { Form, Input, message } from "antd";
import { https } from "../../service/api";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

export default function LoginForm() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const onFinish = (values) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        // Đẩy data lên redux
        dispatch(setUser(res.data.content));
        // Chuyển hướng user về home sau khi đăng nhập thành công
        navigate("/");
        // Lưu data xuống localStorage để user load trang sẽ không mất data
        let dataJson = JSON.stringify(res.data.content);
        localStorage.setItem("USER_INFO", dataJson);
        message.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.content);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <div className="mt-44">
      <h3 className="my-8 text-3xl font-bold text-purple-700 text-center">
        ĐĂNG NHẬP
      </h3>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div className="flex justify-between items-center">
            <button
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 me-3 mt-3"
              htmltype="submit"
            >
              Đăng nhập
            </button>
            <div>
              <span>Bạn chưa có tài khoản?</span>
              <button
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 ms-3 mt-3"
                onClick={handleToRegisterPage}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
