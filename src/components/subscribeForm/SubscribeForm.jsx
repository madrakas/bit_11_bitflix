import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import style from './SubscribeForm.module.css';


export function SubscribeForm(){
    const [EmailPlaceholder, setEmailPlaceholder] = useState('Email address');
    const [subscribeLabelHide, setSubscribeLabelHide] = useState('none');
    const [emailInputClassName, setEmailInputClassName ] = useState(style.subscribeInputIdle);
    const [emailInputValue, setEmailInputValue] = useState('');

    function emailGotFocus(){
        setEmailPlaceholder('');
        setSubscribeLabelHide('flex')
        setEmailInputClassName(style.subscribeInputActive);
    }
    function emaillLostFocus(){
        if (emailInputValue === ''){
            setEmailPlaceholder('Email address' );
            setSubscribeLabelHide('none')
            setEmailInputClassName(style.subscribeInputIdle);
        }
        
    }

    const emailInput = <input className={emailInputClassName} 
                              type='text' 
                              placeholder={EmailPlaceholder} 
                              onFocus={emailGotFocus} 
                              onBlur={emaillLostFocus}
                              onChange={e => setEmailInputValue(e.target.value)}
                              value={emailInputValue}>
                       </input>;
    return(
        <>
            <div className={style.subscribeIntro}>
                Ready to watch? Enter your email to createe or restart your membership.
            </div>
            <div className={style.subscribeContainer}>
                <div className={style.inputbox}>
                <div className={style.subscribeLabel} style={{display: subscribeLabelHide}}>Email address</div>
                {emailInput}     
                </div>
                <div className={style.subscribeBtn}>
                    Get Started <IoIosArrowForward />
                </div>
            </div>
        </>
    )
}