import css from "styled-jsx/css";
import Image from "next/image";
import Caketable from "public/images/Caketable.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../pages/components/Sidebar";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Main() {
  const [nickname, setNickname] = useState("");
  // const [user, setUser] = useState({ nickname: "사용자" });
  // const [count, setCount] = useState({ visitor: 0 });
  useEffect(() => {
    const savedNickname = sessionStorage.getItem("nickname");
    setNickname(savedNickname);
  }, []);

  return (
    <div className="main_container">
      <Sidebar />
      <p className="main_text">{nickname}님의 케이크</p>
      <p className="main_text">명이 축하메세지를 보냈습니다</p>
      <div>
        <Image src={Caketable} alt="caketableimg" width={450} height={400} />
      </div>
      <FontAwesomeIcon icon={faAngleLeft} />
      <FontAwesomeIcon icon={faAngleRight} />
      <div className="main_btn_container">
        <Link href="/Visitoruse">
          <button className="main_btn">생일 축하해주기</button>
        </Link>
        <Link href="/Useruse">
          <button className="main_btn">내 케이크 만들기</button>
        </Link>
      </div>
      <style jsx>{main}</style>
    </div>
  );
}

const main = css`
  @font-face {
    font-family: "Bazzi";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .main_container {
    width: 500px;
    height: 100vh;
    background-color: #f7bedf;
    color: white;
    text-align: center;
    font-family: "Bazzi";
    //중앙정렬
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .main_text {
    font-size: 30px;
    line-height: 15px;
  }
  .main_btn_container {
    display: grid;
    justify-content: center;
  }
  .main_btn {
    width: 250px;
    height: 45px;
    border-radius: 15px;
    border: none;
    font-family: "Bazzi";
    background-color: #f073cd;
    color: white;
    margin-top: 10px;
    font-size: 15px;
  }
`;
