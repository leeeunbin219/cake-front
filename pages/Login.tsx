"use client";

import css from "styled-jsx/css";
import Image from "next/image";
import Loginimg from "public/images/Loginimg.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faComment } from "@fortawesome/free-solid-svg-icons";
import * as React from 'react';
import Router, { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  
  const handleKakaoLogin = () => {
    // 로그인 페이지로 리디렉션
    // window.location.href = "http://127.0.0.1:8000/api/users/signin/kakao/";
    window.location.href = "https://manage.neokkukae.store/api/users/signin/kakao/"; 
  };
  
  return (
    <div className="login_container">
      <h1 className="login_title">네가 꾸민 케이크</h1>
      <Image
        src={Loginimg}
        alt="loginimg"
        width={300}
        height={250}
        className="login_img"
      />
      <div className="login_btn_container">
          <button className="login_kakao_btn loginbtn" onClick={handleKakaoLogin}>
            <div className="login_text_box">
              <FontAwesomeIcon icon={faComment} />
              카카오 로그인
            </div>
          </button>
      </div>
      <style jsx>{login}</style>
    </div>
  );
}

const login = css`
  @font-face {
    font-family: "Bazzi";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .login_container {
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
  .login_title {
    text-align: center;
    font-size: 55px;
    margin-top: 15vh;
    margin-bottom: 10vh;
    font-family: "Bazzi";
  }

  .login_btn_container {
    margin-top: 7vh;
  }
  .login_text_box {
    display: flex;
    justify-content: center;
  }
  span {
    margin-left: 0px;
  }
  .loginbtn {
    width: 300px;
    height: 60px;
    border-radius: 15px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-family: "Bazzi";
    background-color: yellow;
    margin-bottom: 10px;
  }


`;
