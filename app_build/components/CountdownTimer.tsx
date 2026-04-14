'use client';

import React, { useEffect, useState } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const target = new Date(targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, [targetDate]);

  if (!isClient) {
    return (
      <div className="flex gap-4 justify-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center bg-white/30 backdrop-blur-sm rounded-xl p-4 w-24 h-24 animate-pulse" />
        ))}
      </div>
    );
  }

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isExpired) {
    return (
      <div className="bg-white text-orange-600 font-bold p-8 rounded-2xl shadow-xl text-3xl text-center">
        ¡La rifa ha concluido!
      </div>
    );
  }

  return (
    <div className="flex gap-2 sm:gap-4 justify-center">
      <TimeBox label="Días" value={timeLeft.days} />
      <TimeBox label="Horas" value={timeLeft.hours} />
      <TimeBox label="Minutos" value={timeLeft.minutes} />
      <TimeBox label="Segundos" value={timeLeft.seconds} />
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-md rounded-xl p-3 sm:p-5 w-20 sm:w-28 shadow-lg border border-white/40">
      <span className="text-3xl sm:text-5xl font-black text-white drop-shadow-md">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
}
