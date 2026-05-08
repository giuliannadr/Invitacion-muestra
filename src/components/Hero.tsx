import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const Hero = () => (
  <section className="paper-effect flex flex-col items-center justify-start pt-20 px-4 w-full relative z-10">
    <div className="text-center w-full max-w-4xl relative flex flex-col items-center flex-grow">
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] text-slate font-medium mb-6"
      >
        Nos Casamos
      </motion.p>
      
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-display italic text-6xl md:text-8xl text-slate text-center mb-10 leading-none py-2"
      >
        Stas & Ellen
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-[280px] md:max-w-xl aspect-[4/5] md:aspect-[16/9] bg-gray-200 mb-10 overflow-hidden border-[8px] md:border-[12px] border-white shadow-lg relative group"
      >
        <img 
          src="/wedding_hero_couple_1778269812875.png" 
          alt="Pareja" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 border border-white/20 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-[11px] md:text-sm uppercase tracking-widest text-slate/80 leading-relaxed max-w-xs md:max-w-lg mx-auto"
      >
        Hay momentos en la vida que imaginamos por siempre, <br className="hidden md:block" />
        <span className="font-display italic text-2xl md:text-4xl lowercase normal-case text-slate block mt-4">y otros que deciden nuestra eternidad.</span>
      </motion.p>
    </div>

    {/* Countdown seamlessly integrated at the bottom of Hero */}
    <motion.div 
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.8 }}
       className="w-full mt-12 md:mt-20 border-t border-slate/10"
    >
      <CountdownTimer />
    </motion.div>
  </section>
);

export default Hero;
