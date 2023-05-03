import css from "styled-jsx/css";
import Image from "next/image";
import Pinktable from "public/images/Pinktable.png";
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
import { useState } from "react";

export default function Cakechoice() {
  const [pickcake, setPickcake] = useState(null);

  const handleImageSelection = (imageId) => {
    setPickcake(imageId);

    // Send the selected image to the backend
    fetch("http://127.0.0.1:8000/api/caketables/pick/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from backend:", data);
        // Do something with the response from the backend
      })
      .catch((error) => {
        console.error("Error sending selected image to backend:", error);
        // Handle the error
      });
  };
  
  return (
    <div>
      <Image src={Pinktable} width={500} />
      <div
        className={pickcake === 1 ? "selected" : ""}
        onClick={() => handleImageSelection(1)}
        id="cake1"
      >
        <Image src={cake1} width={100} height={100} />
      </div>
      <div
        className={pickcake === 2 ? "selected" : ""}
        onClick={() => handleImageSelection(2)}
        id="cake2"
      >
        <Image src={cake2} width={100} height={100} />
      </div>
      <div
        className={pickcake === 3 ? "selected" : ""}
        onClick={() => handleImageSelection(3)}
        id="cake3"
      >
        <Image src={cake3} width={100} height={100} />
      </div>
      <div
        className={pickcake === 4 ? "selected" : ""}
        onClick={() => handleImageSelection(4)}
        id="cake4"
      >
        <Image src={cake4} width={100} height={100} />
      </div>
      <div
        className={pickcake === 5 ? "selected" : ""}
        onClick={() => handleImageSelection(5)}
        id="cake5"
      >
        <Image src={cake5} width={100} height={100} />
      </div>
      <div
        className={pickcake === 6 ? "selected" : ""}
        onClick={() => handleImageSelection(6)}
        id="cake6"
      >
        <Image src={cake6} width={100} height={100} />
      </div>
      <div
        className={pickcake === 7 ? "selected" : ""}
        onClick={() => handleImageSelection(7)}
        id="cake7"
      >
        <Image src={cake7} width={100} height={100} />
      </div>
      <div
        className={pickcake === 8 ? "selected" : ""}
        onClick={() => handleImageSelection(8)}
        id="cake8"
      >
        <Image src={cake8} width={100} height={100} />
      </div>
      <div
        className={pickcake === 9 ? "selected" : ""}
        onClick={() => handleImageSelection(9)}
        id="cake9"
      >
        <Image src={cake9} width={100} height={100} />
      </div>
      <div
        className={pickcake === 10 ? "selected" : ""}
        onClick={() => handleImageSelection(10)}
        id="cake10"
      >
        <Image src={cake10} width={100} height={100} />
      </div>
      <div
        className={pickcake === 11 ? "selected" : ""}
        onClick={() => handleImageSelection(11)}
        id="cake11"
      >
        <Image src={cake11} width={100} height={100} />
      </div>
      <div
        className={pickcake === 12 ? "selected" : ""}
        onClick={() => handleImageSelection(12)}
        id="cake12"
      >
        <Image src={cake12} width={100} height={100} />
      </div>
      <style jsx>{cakechoice}</style>
    </div>
  );
}

const cakechoice = css`
  .selected {
    border: 2px dashed #f073cd;
  }
  #cake1 {
    position: absolute;
    right: 30px;
    top: -65px;
  }
  #cake2 {
    position: absolute;
    right: 140px;
    top: -65px;
  }
  #cake3 {
    position: absolute;
    right: 250px;
    top: -65px;
  }
  #cake4 {
    position: absolute;
    right: 370px;
    top: -65px;
  }
  #cake5 {
    position: absolute;
    right: 30px;
    top: 60px;
  }
  #cake6 {
    position: absolute;
    right: 140px;
    top: 60px;
  }
  #cake7 {
    position: absolute;
    right: 250px;
    top: 60px;
  }
  #cake8 {
    position: absolute;
    right: 370px;
    top: 60px;
  }
  #cake9 {
    position: absolute;
    right: 30px;
    top: 190px;
  }
  #cake10 {
    position: absolute;
    right: 140px;
    top: 190px;
  }
  #cake11 {
    position: absolute;
    right: 250px;
    top: 190px;
  }
  #cake12 {
    position: absolute;
    right: 370px;
    top: 190px;
  }
`;
