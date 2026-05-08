const FloralBackground = () => (
  <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
    <svg className="absolute -bottom-20 -right-20 w-96 h-96 md:w-[500px] md:h-[500px] md:-bottom-32 md:-right-32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 150 C 120 100, 180 80, 190 30 C 150 40, 110 80, 100 120 C 90 80, 50 40, 10 30 C 20 80, 80 100, 100 150 Z" stroke="white" strokeWidth="0.5" />
      <path d="M100 150 C 110 120, 160 110, 180 70 C 140 90, 110 130, 100 140 C 90 130, 60 90, 20 70 C 40 110, 90 120, 100 150 Z" stroke="white" strokeWidth="0.25" />
      <path d="M100 200 Q 100 170 100 150" stroke="white" strokeWidth="0.5" />
      <path d="M100 170 Q 130 180 150 160 Q 120 160 100 170" stroke="white" strokeWidth="0.25" />
      <path d="M100 170 Q 70 180 50 160 Q 80 160 100 170" stroke="white" strokeWidth="0.25" />
    </svg>
    <svg className="absolute -top-10 -left-10 w-64 h-64 md:w-[300px] md:h-[300px] md:-top-16 md:-left-16 rotate-180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 150 C 120 100, 180 80, 190 30 C 150 40, 110 80, 100 120 C 90 80, 50 40, 10 30 C 20 80, 80 100, 100 150 Z" stroke="white" strokeWidth="0.5" />
      <path d="M100 200 Q 100 170 100 150" stroke="white" strokeWidth="0.5" />
    </svg>
  </div>
);

export default FloralBackground;
