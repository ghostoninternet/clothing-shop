import PathText from "../../../components/PathText";
import Account from "..";
import Input from "../components/Input";
import TextButton from "../components/TextButton";

import classNames from "classnames/bind";
import styles from "./ResetPassword.module.scss";
import { Fragment, useEffect } from "react";

const cx = classNames.bind(styles);

function ResetPassword() {
  useEffect(() => {
    document.title = "Đặt lại mật khẩu";
  }, []);

  const path = [
    {
      text: "UNIQLO",
      link: "/",
    },
    {
      text: "ĐẶT LẠI MẬT KHẨU CỦA BẠN",
    },
  ];

  return (
    <Fragment>
      <PathText path={path} />
      <Account>
        <div className="container" style={{ marginBottom: "88px" }}>
          <div className="auth-account-title" style={{ marginBottom: "52px" }}>
            ĐẶT LẠI MẬT KHẨU CỦA BẠN
          </div>
          <div className={cx("form-frame")}>
            <div
              className="auth-account-text"
              style={{ width: "81.25%", marginBottom: "48px" }}
            >
              Vui lòng nhập địa chỉ email bạn đã đăng ký
            </div>
            <form method="" action="/">
              <Input
                signup={true}
                title={"ĐỊA CHỈ EMAIL"}
                type={"email"}
                placeholder={"Nhập email hợp lệ"}
                mgBottom="40px"
              ></Input>

              <div style={{ width: "576px" }}>
                <TextButton>GỬI</TextButton>
              </div>
            </form>
          </div>
        </div>
      </Account>
    </Fragment>
  );
}

export default ResetPassword;
