import React, { useState, useEffect } from "react";

import CookieImg from '../../assets/images/cookieImg.svg'

function CookieNotification() {
    const [acceptCookies, setAcceptCookies] = useState(true);

    
    useEffect(() => {
        setAcceptCookies(false)
        const cookies = document.cookie.split(";").map(cookie => cookie.trim());
        console.log(typeof cookies)
        const hasAcceptCookies = cookies.includes("accepted_cookies=true");
        if (hasAcceptCookies) {
            setAcceptCookies(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        document.cookie = "accepted_cookies=true; expires=Thu, 31 Dec 2099 23:59:59 GMT; path=/";
        setAcceptCookies(true)
    };

    if (acceptCookies === false) {
        return (
            <div className="cookie-notification p-5 fixed bottom-10 left-6 right-6 bg-white z-10 lg:w-[50%] md:w-[80%] sm:w-[80%] mm:w-[75%] rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">

                <div className="flex pr-0 items-center justify-between">
                    <p className="font-[500] sm:text-base mm:text-xs">Saytımız sizə daha yaxşı bir təcrübə vermək üçün  cookie istifadə edir. Cookie'lər haqqında daha ətraflı məlumat üçün, saytımızın <a href="#" className="text-blue-500 underline "> Gizlilik Siyasətini oxuyun </a>. Davam etməklə, cookie istifadəsini qəbul edirsiniz.
                    </p>
                    <img src={CookieImg} alt="" className="mm:w-[3.5rem] sm:w-32 ml-2" />
                </div>

                <button onClick={handleAcceptCookies} className="mm:m-2 sm:m-1 p-2 bg-premiumColor/100 text-white rounded-sm font-[500] hover:brightness-125 mm:text-xs sm:text-base">
                    Qəbul et
                </button>
                <button className="mm:m-2 sm:m-1 p-2 border-premiumColor/100 text-premiumColor/100 border-[1px] rounded-sm font-[500] hover:brightness-125 mm:text-xs sm:text-base">
                    Seçimlər
                </button>
            </div>

        );

    } else {
        return null;
    }



}

export default CookieNotification;