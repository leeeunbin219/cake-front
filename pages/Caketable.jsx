import css from "styled-jsx/css";
import Image from "next/image";
import Caketable from "public/images/Caketable.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../pages/components/Sidebar";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Test({ data2 }) {
  const router = useRouter();
  const onClick = (user_pk, tablecolor) => {
    router.push(
      {
        pathname: `/caketables/${user_pk}`,
        query: {
          tablecolor,
        },
      },
      `/caketables/${user_pk}`
    );
  };

  const copyURL = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      alert("링크가 복사되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    //   <div>
    //   {data2?.map((caketable) => (
    //     <div
    //       onClick={() => onClick(caketable.user_pk, caketable.tablecolor)}
    //       key={caketable.user_pk}
    //     >
    //       {/* <Link href={`/caketables/${caketable.user_pk}`}> */}
    //       <Link
    //         href={{
    //           pathname: `/caketables/${caketable.user_pk}`,
    //           query: {
    //             tablecolor: caketable.tablecolor,
    //           },
    //         }}
    //         as={`/caketables/${caketable.user_pk}`}
    //       >
    //         <div>{caketable.nickname}</div>
    //         {/* <div>{caketable.tablecolor}</div> */}
    //       </Link>
    //     </div>
    //   ))}
    // </div>

    <div className="main_container">
      <Sidebar />
      {data2?.map((caketable) => (
        <div>
          <p className="main_text">{caketable.nickname}님의 케이크</p>
          <p className="main_text">명이 축하메세지를 보냈습니다</p>
          <div>
            <Image
              src={Caketable}
              alt="caketableimg"
              width={450}
              height={400}
            />
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
            <button className="main_btn" onClick={copyURL}>
              내 케이크 공유하기
            </button>
          </div>
          <style jsx>{main}</style>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const [data1, data2] = await (
    await fetch(`http://127.0.0.1:8000/api/caketables/list`)
  ).json();
  return {
    props: {
      data2,
    },
  };
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
