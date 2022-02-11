import { Input } from 'antd';
import React, { ChangeEvent, useState } from 'react';
import InputMask, { ReactInputMask } from 'react-input-mask'
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import foneImg from "../assets/fone.png";

const VerifyNamberPhone: React.FC = (props) => {

    const [namber, setNamber] = useState<string>("+7(___)___-__-__")

    // const blurInput = () => {

    // }

    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value)
        setNamber(event.target.value)
    }

    return (
        <div id="verifyNamberPhone">
            <div id="namberPhone" className='namber-phone'>
                <h2>Введите ваш номер мобильного телефона</h2>
                <div className="box">
                    <InputMask 
                    {...props}
                    className='input'
                    mask="+7(999)999-99-99"
                    value={namber} 
                    onChange={changeInput}
                     />
                </div>
                <div className="box">
                    <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                </div>
                <div className="box box-nam-pad">
                    <div className='nam-pad'>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button className='erase'>Стереть</button>
                        <button>0</button>
                    </div>
                </div>
                <div className='box checkbox-box'>
                    <div className='checkbox-block'>
                        <input type="checkbox" className='checkbox' id="checkbox" value={0} />
                        <label className='checkbox-input' htmlFor={"checkbox"}></label>
                        <label className='text' htmlFor={"checkbox"}>Согласие на обработку персональных данных</label>
                    </div>
                </div>
                <div className='box ready-box'>
                    <button>Подтвердить номер</button>
                </div>
            </div>
            <img src={foneImg} alt="" className="img-fone" />
        </div>
    )
}

export default VerifyNamberPhone