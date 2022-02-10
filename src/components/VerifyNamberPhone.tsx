import { Input } from 'antd';
import React, { ChangeEvent, useState } from 'react';
import InputMask, { ReactInputMask } from 'react-input-mask'
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import foneImg from "../assets/fone.png";

const VerifyNamberPhone: React.FC = (props) => {

    const [namber, setNamber] = useState<string>("+7(___)___-__-__")

    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setNamber(event.target.value)
    }

    return (
        <div id="verifyNamberPhone">
            <div id="namberPhone" className='namber-phone'>
                <h2>Введите ваш номер мобильного телефона</h2>
                <InputMask className='input' {...props} mask="+7(999)999-99-99" value={namber} onChange={changeInput} />
                <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>Стереть</button>
                    <button>0</button>
                </div>
                <div className='checkbox'>
                    <input type="checkbox" id="checkboxInput" />
                    <label htmlFor={"checkboxInpu"}>Согласие на обработку персональных данных</label>
                </div>
                <button>Подтвердить номер</button>
            </div>
            <img src={foneImg} alt="" className="img-fone" />
        </div>
    )
}

export default VerifyNamberPhone