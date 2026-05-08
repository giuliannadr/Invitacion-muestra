import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ días: 0, horas: 0, min: 0, seg: 0 });

  // Fake target time for the template demo (10 days, 7 hours, 45 minutes from now)
  const [targetTime] = useState(() => {
    const tenDays = 10 * 24 * 60 * 60 * 1000;
    const extraTime = (7 * 60 * 60 * 1000) + (45 * 60 * 1000);
    return new Date().getTime() + tenDays + extraTime;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        días: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seg: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 flex justify-center gap-8 md:gap-16 pt-8 pb-16">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
           <span className="block text-3xl md:text-5xl font-sans font-light text-slate mb-1">
             {value.toString().padStart(2, '0')}
           </span>
           <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-slate/50 font-medium">
             {label}
           </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
