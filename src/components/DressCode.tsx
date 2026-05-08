import { motion } from 'framer-motion';

const DressCode = () => (
  <section className="slate-section py-24 md:py-32 px-4 text-center w-full relative">
    
    {/* Decorative minimal lines */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-white/20"></div>

    <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
      
      <div className="text-center mb-16 md:mb-24 relative">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[140px] font-display italic text-white/[0.03] whitespace-nowrap pointer-events-none">
          Dress Code
        </span>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 font-medium mb-4"
        >
          Etiqueta
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="script-title-white mb-8 text-5xl md:text-7xl relative z-10"
        >
          Elegancia Atemporal
        </motion.h2>
        
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="flex items-center justify-center gap-4 max-w-md mx-auto"
        >
           <div className="h-px w-8 bg-white/20"></div>
           <p className="text-[10px] md:text-[11px] uppercase tracking-widest md:tracking-[0.2em] text-white/70 leading-relaxed text-center">
             Hemos seleccionado una paleta de tonos neutros para inspirar tu atuendo. Nos encantará crear juntos una atmósfera en perfecta armonía.
           </p>
           <div className="h-px w-8 bg-white/20"></div>
        </motion.div>
      </div>

      {/* Pantone Style Swatches */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full max-w-4xl">
        {[
          { color: '#e8e4dc', label: 'Arena', code: 'TONO 01' },
          { color: '#d5d0c8', label: 'Piedra', code: 'TONO 02' },
          { color: '#8895a3', label: 'Acero', code: 'TONO 03' },
          { color: '#5c6b79', label: 'Pizarra', code: 'TONO 04' },
        ].map((c, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 40 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             viewport={{ once: true }} 
             transition={{ delay: i * 0.15 }}
             className="w-[140px] md:w-[180px] aspect-[2/3] bg-paper shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col group transform hover:-translate-y-4 transition-all duration-500 ease-out"
           >
             <div 
               className="w-full flex-grow border-b border-slate/5 relative overflow-hidden"
               style={{ backgroundColor: c.color }} 
             >
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%] ease-in-out"></div>
             </div>
             <div className="w-full h-24 md:h-28 bg-[#fbfbfb] p-4 md:p-5 flex flex-col justify-between text-left">
                <div>
                   <p className="text-dark font-display italic text-xl md:text-2xl leading-none mb-1">{c.label}</p>
                   <p className="text-[9px] uppercase tracking-[0.2em] text-slate/40">{c.code}</p>
                </div>
                <div className="w-full flex items-center justify-between">
                   <div className="w-full h-px bg-slate/10"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-slate/20 ml-3"></div>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium"
      >
        Por favor, reservar el color blanco para la novia
      </motion.p>

    </div>
  </section>
);

export default DressCode;
