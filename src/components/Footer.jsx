import React, { useState, useEffect } from "react";

const Footer = () => {
    const [timeLeft, setTimeLeft] = useState({hours: 0, minutes: 0});

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const nextDay = new Date();
            nextDay.setDate(now.getDate() + 1);
            nextDay.setHours(0, 0, 0, 0);

            const timeDiff = nextDay - now;
            const hours = Math.floor((timeDiff) / (1000 * 60 * 60) % 24);
            const minutes = Math.floor((timeDiff) / (1000 * 60) % 60);

            setTimeLeft({hours, minutes});
        };
        updateTimer();
        const timeInterval = setInterval(updateTimer, 1000);
        return () => clearInterval(timeInterval);
    }, []);

    return(
        <div>
            <div className="h-[60px] w-[200px] dark:bg-black bg-[#514178] bottom-0 right-0 fixed mr-10 rounded-[10px] flex justify-center items-center">
                <p className="text-white text-sm text-center">
                    Time Left for Next Day: <br />
                    <strong>
                        {timeLeft.hours}h {timeLeft.minutes}m
                    </strong>
                </p>
            </div>
            {/* Footer */}
            <div className="w-full h-3 dark:bg-black bg-[#514178] fixed bottom-0 right-0"></div>
        </div>
    );
};

export default Footer;