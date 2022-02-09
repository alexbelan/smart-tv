import React, { useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player'
// import './App.css';
import qrImg from "../assets/qr.png";

const ViewVideo: React.FC = () => {

  const [showBanner, setShowBanner] = useState<boolean>(false)

  const progressPlayr = (event: ReactPlayerProps) => {
    if (event.playedSeconds >= 5 && !showBanner) {
      setShowBanner(true)
    }
  }

  return (
    <>
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=M7FIvfx5J10'
        loop={true}
        controls={true}
        width={"100%"}
        height={"720px"}
        onProgress={progressPlayr}
      />
      <div id="notification" className={showBanner ? "show" : ""}>
        <h3>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br /> ПОДАРИТЕ ЕМУ СОБАКУ!</h3>
        <div className="box">
          <img src={qrImg} alt="" />
        </div>
        <div className="box qr">
          <p>Сканируйте QR-код или нажмите ОК</p>
        </div>
        <div className="box">
          <button>OK</button>
        </div>
      </div>
     </>
    );
}

export default ViewVideo;