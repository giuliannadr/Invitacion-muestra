import { motion } from 'framer-motion';
import { User, Phone } from 'lucide-react';
import FloralBackground from './FloralBackground';

const Contacts = () => (
  <section className="slate-section py-24 px-4 text-center w-full relative overflow-hidden">
    <FloralBackground />
    <div className="relative z-20 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
      
      <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="script-title-white mb-6 md:mb-8 text-5xl md:text-6xl"
        >
          Contacto
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.2em] text-white/80 leading-relaxed max-w-[280px] md:mx-0"
        >
          Nuestra Wedding Planner está a tu disposición para cualquier duda sobre logística o alojamiento.
        </motion.p>
      </div>

      <div className="hidden md:flex flex-col items-center gap-4">
         <div className="w-px h-12 bg-white/20"></div>
         <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
            <User className="w-5 h-5 text-white/60" />
         </div>
         <div className="w-px h-12 bg-white/20"></div>
      </div>
      <div className="md:hidden w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
         <User className="w-5 h-5 text-white/40" />
      </div>
      
      <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start w-full">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
          <p className="text-[10px] uppercase tracking-widest text-white font-medium mb-2">Valeria Domínguez</p>
          <p className="font-display italic text-3xl text-white">+52 55 1234 5678</p>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white text-white px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-white hover:text-slate transition-colors flex items-center gap-3"
        >
          <Phone className="w-3 h-3" /> Llamar
        </motion.button>
      </div>

    </div>
  </section>
);

export default Contacts;
