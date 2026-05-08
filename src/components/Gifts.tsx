import { motion } from 'framer-motion';
import { Gift, CreditCard, HeartHandshake } from 'lucide-react';

const Gifts = () => (
  <section className="paper-effect py-24 md:py-32 px-4 w-full relative">
    <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
      
      <div className="flex flex-col items-center mb-16 md:mb-20">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-6">
          <Gift className="w-10 h-10 text-slate/30" strokeWidth={1} />
        </motion.div>
        <h2 className="script-title mb-6 md:mb-4 text-6xl md:text-7xl text-center">Mesa de Regalos</h2>
        <p className="text-[9px] md:text-[11px] uppercase tracking-widest md:tracking-[0.3em] text-slate/60 text-center leading-relaxed max-w-md">
          Nuestro mayor regalo es tu presencia. Si deseas tener un detalle adicional, te dejamos algunas opciones.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-12 justify-center max-w-4xl">
        
        {/* Transfer Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-8 md:p-10 relative group border border-slate/5"
        >
          <CreditCard className="w-8 h-8 text-slate/40 mb-6" strokeWidth={1.5} />
          <h3 className="font-display italic text-3xl text-slate mb-2">Transferencia</h3>
          <div className="w-8 h-px bg-slate/20 mb-6"></div>
          
          <div className="space-y-5">
            <div>
              <p className="text-[8px] uppercase tracking-widest text-slate/40 mb-1">Banco</p>
              <p className="text-xs font-medium text-slate uppercase tracking-widest">Santander</p>
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-widest text-slate/40 mb-1">Titular</p>
              <p className="text-xs font-medium text-slate uppercase tracking-widest">Elena & Stas</p>
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-widest text-slate/40 mb-1">Alias</p>
              <p className="text-sm font-medium text-slate font-mono bg-slate/5 px-3 py-1.5 rounded inline-block">NUESTRA.BODA.2025</p>
            </div>
          </div>
        </motion.div>

        {/* Gift Ideas Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-8 md:p-10 relative group border border-slate/5"
        >
          <HeartHandshake className="w-8 h-8 text-slate/40 mb-6" strokeWidth={1.5} />
          <h3 className="font-display italic text-3xl text-slate mb-2">Inspiración</h3>
          <div className="w-8 h-px bg-slate/20 mb-6"></div>
          
          <p className="text-[11px] md:text-xs text-slate/60 leading-relaxed mb-6 text-justify">
            Estamos ahorrando para nuestra luna de miel y para amueblar nuestro nuevo hogar. También nos encantaría recibir:
          </p>
          <ul className="text-[10px] md:text-[11px] uppercase tracking-widest text-slate/70 space-y-4">
             <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate/40 rounded-full"></span> Decoración de hogar</li>
             <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate/40 rounded-full"></span> Electrodomésticos pequeños</li>
             <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate/40 rounded-full"></span> Lluvia de sobres (en el evento)</li>
          </ul>
        </motion.div>

      </div>

    </div>
  </section>
);

export default Gifts;
