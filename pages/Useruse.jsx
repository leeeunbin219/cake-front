import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import Image from "next/image";
import cakeimg from "public/images/Caketable.png";
import { createGlobalStyle } from "styled-components";
import css from "styled-jsx/css";
import Sidebar from "pages/components/Sidebar.jsx";
import { useRouter } from "next/router";

const getToken = () => {
  return sessionStorage.getItem("accessToken");
};

export default function Useruse() {
  const [tablecolor, setTableColor] = useState("#FFFFFF");
  const [nickname, setNickname] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    setToken(getToken());
  }, []);

  const isLoggedIn = () => {
    return token !== "";
  };

  const handleChange = (newColor) => {
    setTableColor(newColor.hex);
    document.getElementById("image-container").style.backgroundColor =
      newColor.hex;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLoggedIn()) {
      alert("로그인이 필요합니다");
      window.location.href = "/Login"; // 로그인 페이지로 이동
      return;
    }

    fetch(`http://127.0.0.1:8001/api/caketables/new/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   nickname: nickname,
      //   total_visitor: total_visitor,
      // }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("서버에서 에러가 발생했습니다.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.exist) {
          // 이미 생성된 테이블이 있다면
          alert("이미 케이크 테이블이 생성되어 있습니다."); // alert를 띄웁니다.
        } else {
          // 생성된 테이블이 없다면
          // 새로운 테이블을 생성합니다.
          fetch(`http://127.0.0.1:8001/api/caketables/new/`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nickname: nickname,
              tablecolor: tablecolor,
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("케이크는 하나만 생성이 가능합니다.");
              }
              return response.json();
            })
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="useruse_container">
      <Global />
      <Sidebar />
      <form onSubmit={handleSubmit}>
        <div className="useruse_nickname_container font">
          <label for="nickname" className="useruse_name font">
            닉네임 :{" "}
          </label>
          <input
            type="text"
            maxLength="7"
            className="useruse_nickname font"
            id="nickname"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />
        </div>
        <div className="useruse_color_button">
          <ChromePicker
            color={tablecolor}
            onChange={handleChange}
            width={450}
          />
          <div id="image-container" style={{ backgroundColor: tablecolor }}>
            <Image src={cakeimg} width={450} />
          </div>
        </div>

        <button type="submit" className="useruse_submit_button font">
          만들기
        </button>
      </form>
      <style jsx>{useruse}</style>
    </div>
  );
}

const Global = createGlobalStyle`
.flexbox-fix:last-child {
  visibility: hidden;
}
.flexbox-fix:nth-child(1) {
  visibility: hidden;
}
.chrome-picker > div > div:nth-child(1){
  height:100px;
  /* margin-top: 50px; */
}
.chrome-picker:nth-child(1){
  height:100px;

}
.hue-horizontal {
  visibility: visible;
  position: fixed;
  top: -175px;
  left: -15px;
}
`;

const useruse = css`
  @font-face {
    font-family: "Bazzi";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .font {
    font-family: "Bazzi";
  }
  .useruse_container {
    width: 500px;
    height: 100vh;
    background-color: #f7bedf;
    color: white;
    text-align: center;
    //중앙정렬
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .useruse_nickname_container {
    margin-top: 7vh;
  }
  .useruse_name {
    font-size: 35px;
  }
  .useruse_nickname {
    border: none;
    height: 40px;
    width: 200px;
    border-radius: 15px;
    text-align: center;
    font-size: 25px;
  }
  .useruse_nickname:focus {
    border: 2px solid #f073cd;
    outline: none;
  }

  .useruse_color_button {
    height: 400px;
    width: 450px;
    margin: 0 auto;
    margin-top: 20px;
  }
  .useruse_submit_button {
    border: none;
    border-radius: 15px;
    height: 35px;
    width: 90px;
    font-size: 20px;
    margin-top: 120px;
    color: white;
    background-color: #f073cd;
  }
`;

