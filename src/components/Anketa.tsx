import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Mail } from 'lucide-react';

const Anketa = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attending) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section className="paper-effect py-24 md:py-32 px-4 w-full">
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Area */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="script-title mb-6 text-[44px] leading-[1] md:text-7xl lg:text-8xl md:text-left"
          >
            <span className="whitespace-nowrap">Confirma tu</span><br/>Asistencia
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs uppercase tracking-widest text-slate/80 leading-relaxed mb-8 max-w-[320px] mx-auto md:mx-0"
          >
            Tu presencia será nuestro mejor regalo. Por favor, haznos saber si nos acompañarás en este día tan soñado.
          </motion.p>
          <div className="hidden md:block w-12 h-px bg-slate/30"></div>
        </div>
        
        {/* Form Area */}
        <div className="flex-1 w-full max-w-[400px] mx-auto md:mr-0 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] p-10 md:p-12 relative group">
          {/* Inner elegant border */}
          <div className="absolute inset-0 border border-slate/10 m-3 pointer-events-none transition-colors duration-500 group-hover:border-slate/20"></div>

          {/* Watermark Tag */}
          <div className="absolute top-0 right-6 md:right-8 bg-slate text-white p-3 flex flex-col items-center justify-center transform origin-top shadow-lg">
             <Mail className="w-5 h-5 text-white/90" strokeWidth={1.5} />
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-10"
              >
                <CheckCircle className="w-12 h-12 text-slate mx-auto mb-4 opacity-80" />
                <p className="font-display italic text-3xl mb-2 text-slate">¡Gracias!</p>
                <p className="text-[10px] uppercase tracking-widest text-slate/70">Hemos recibido tu respuesta.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-[9px] uppercase tracking-widest border border-slate/30 px-6 py-2 hover:bg-slate hover:text-white transition-colors text-slate">Volver</button>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-8 mt-4"
              >
                <div className="relative">
                  <input required type="text" placeholder=" " className="peer w-full bg-transparent border-b border-slate/30 py-2 text-slate focus:outline-none focus:border-slate transition-colors text-sm font-light" />
                  <label className="absolute left-0 top-2 text-slate/50 text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[8px] pointer-events-none">Nombre Completo</label>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-slate/80 text-[8px] uppercase tracking-widest">¿Asistirás?</label>
                  <div className="flex gap-3">
                    <button 
                      type="button" 
                      onClick={() => setAttending('yes')}
                      className={`flex-1 py-2.5 text-[9px] uppercase tracking-widest border transition-all duration-300 flex justify-center items-center gap-2 ${attending === 'yes' ? 'border-slate bg-slate text-white shadow-md' : 'border-slate/20 text-slate/60 hover:border-slate/50 bg-transparent'}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${attending === 'yes' ? 'bg-white' : 'bg-transparent border border-slate/40'}`}></div>
                      Sí, asistiré
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setAttending('no')}
                      className={`flex-1 py-2.5 text-[9px] uppercase tracking-widest border transition-all duration-300 flex justify-center items-center gap-2 ${attending === 'no' ? 'border-slate bg-slate text-white shadow-md' : 'border-slate/20 text-slate/60 hover:border-slate/50 bg-transparent'}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${attending === 'no' ? 'bg-white' : 'bg-transparent border border-slate/40'}`}></div>
                      No podré
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input type="text" placeholder=" " className="peer w-full bg-transparent border-b border-slate/30 py-2 text-slate focus:outline-none focus:border-slate transition-colors text-sm font-light" />
                  <label className="absolute left-0 top-2 text-slate/50 text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[8px] pointer-events-none">Alergias / Restricciones</label>
                </div>

                <div className="pt-4">
                  <button disabled={status === 'loading' || !attending} type="submit" className="w-full border border-slate text-slate px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-slate hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed">
                    {status === 'loading' ? 'Enviando...' : 'Confirmar Asistencia'}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Anketa;
