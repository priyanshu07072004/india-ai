'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set conference date (February 14, 2026)
    const conferenceDate = new Date('2026-02-14T09:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = conferenceDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
    
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center max-w-2xl mx-auto">
      <div className="flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-lg p-3 md:p-6 w-full">
          <div className="text-2xl md:text-4xl font-bold text-blue-600">{timeLeft.days}</div>
        </div>
        <div className="mt-2 text-xs md:text-sm font-medium">Days</div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-lg p-3 md:p-6 w-full">
          <div className="text-2xl md:text-4xl font-bold text-blue-600">{timeLeft.hours}</div>
        </div>
        <div className="mt-2 text-xs md:text-sm font-medium">Hours</div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-lg p-3 md:p-6 w-full">
          <div className="text-2xl md:text-4xl font-bold text-blue-600">{timeLeft.minutes}</div>
        </div>
        <div className="mt-2 text-xs md:text-sm font-medium">Minutes</div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-lg p-3 md:p-6 w-full">
          <div className="text-2xl md:text-4xl font-bold text-blue-600">{timeLeft.seconds}</div>
        </div>
        <div className="mt-2 text-xs md:text-sm font-medium">Seconds</div>
      </div>
    </div>
  );
}
