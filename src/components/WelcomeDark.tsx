import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';
import FloralBackground from './FloralBackground';

const WelcomeDark = () => (
  <section className="slate-section py-20 md:py-32 px-4 w-full">
    <FloralBackground />
    <div className="relative z-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
      
      {/* Visual Element: Overlapping Image */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1 w-full max-w-sm relative hidden md:block"
      >
         <div className="aspect-[3/4] w-3/4 bg-slate border-8 border-white/10 shadow-2xl overflow-hidden ml-auto">
            <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale contrast-125 mix-blend-luminosity opacity-80" alt="Detalle" />
         </div>
         <div className="aspect-square w-1/2 bg-white absolute -bottom-10 -left-10 border-4 border-slate/50 shadow-xl overflow-hidden p-2">
            <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover filter grayscale" alt="Anillos" />
         </div>
      </motion.div>

      {/* Right Text Block */}
      <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start w-full relative">
        <Heart className="absolute -top-10 -right-10 w-32 h-32 text-white/5 opacity-50 md:hidden" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm md:text-xl uppercase tracking-widest font-medium mb-6 leading-relaxed flex items-center gap-4"
        >
          <span className="hidden md:inline-block w-8 h-px bg-white/50"></span>
          ¡Queridos familiares y amigos!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs uppercase tracking-wider md:tracking-[0.2em] leading-relaxed opacity-80 max-w-[280px] md:max-w-md mb-12"
        >
          Con inmensa alegría y llenos de ilusión, los invitamos a ser testigos del momento más especial de nuestras vidas. Será un honor compartir este capítulo con ustedes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm w-full max-w-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-6 h-6 opacity-60" />
            <div>
              <p className="font-display italic text-3xl">28 de Junio</p>
              <p className="text-[8px] uppercase tracking-widest opacity-60">Sábado • 2025</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/10 mb-6"></div>

          <div className="flex items-center gap-4 mb-10">
            <MapPin className="w-6 h-6 opacity-60" />
            <div className="text-left">
              <p className="font-display italic text-2xl">Hacienda Los Olivos</p>
              <p className="text-[8px] uppercase tracking-widest opacity-60">Valle de Bravo, Edomex</p>
            </div>
          </div>

          <button className="btn-outline w-full text-[10px]">Ver Ubicación</button>
        </motion.div>
      </div>

    </div>
  </section>
);

export default WelcomeDark;
