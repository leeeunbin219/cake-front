import css from "styled-jsx/css";
import Image from "next/image";
import Caketable from "public/images/Caketable.png";
import cake1 from "public/images/cakes/1.png";
import cake2 from "public/images/cakes/2.png";
import cake3 from "public/images/cakes/3.png";
import cake4 from "public/images/cakes/4.png";
import cake5 from "public/images/cakes/5.png";
import cake6 from "public/images/cakes/6.png";
import cake7 from "public/images/cakes/7.png";
import cake8 from "public/images/cakes/8.png";
import cake9 from "public/images/cakes/9.png";
import cake10 from "public/images/cakes/10.png";
import cake11 from "public/images/cakes/11.png";
import cake12 from "public/images/cakes/12.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();
  const { user_pk } = router.query;
  const [cakeData, setCakeData] = useState({});

  const copyURL = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      alert("링크가 복사되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };
  console.log(cakeData);
  const handleClick = (event) => {
    event.preventDefault();
    router.push(`/caketables/${cakeData.user_pk}/cake`);
  };
//user 정보
  useEffect(() => {
    if (!user_pk) return;

    fetch(`https://manage.neokkukae.store/api/caketables/${user_pk}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCakeData(data[0, visitors]);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [user_pk]);

  const tableColor = cakeData.tablecolor;
  const style = {
    backgroundColor: tableColor,
  };

  //visitor 정보

  return (
    <div className="main_container">
      <Sidebar />
      <p className="main_text">{cakeData.nickname}님의 케이크</p>
      <p className="main_text">
        {cakeData.total_visitor}명이 축하메세지를 보냈습니다
      </p>
      <p>0{cakeData.visitors}</p>
      <div style={style}>
        <Image src={Caketable} alt="caketableimg" width={500} height={450} />
      </div>
      <FontAwesomeIcon icon={faAngleLeft} />
      <FontAwesomeIcon icon={faAngleRight} />
      <div className="main_btn_container">
        <button className="main_btn" onClick={handleClick}>
          생일 축하해주기
        </button>
        <Link href="/Login">
          <button className="main_btn">내 케이크 만들기</button>
        </Link>
        <button className="main_btn" onClick={copyURL}>
          내 케이크 공유하기
        </button>
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
    display: flex;
    justify-content: space-evenly;
  }
  .main_btn {
    width: 150px;
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
