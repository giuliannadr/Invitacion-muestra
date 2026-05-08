import { motion } from 'framer-motion';
import { Clock, Wine, Heart, Music } from 'lucide-react';

const Timing = () => (
  <section className="paper-effect py-24 md:py-32 px-4 w-full">
    <div className="relative z-20 max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className="mb-6">
          <Clock className="w-10 h-10 text-slate/30" />
        </motion.div>
        <h2 className="script-title mb-6 md:mb-4 text-6xl md:text-7xl">Nuestra Celebración</h2>
        <p className="text-[9px] md:text-[11px] uppercase tracking-widest md:tracking-[0.3em] text-slate/60 text-center leading-relaxed">
          Momentos inolvidables paso a paso
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line for Mobile / Horizontal for Desktop */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate/10 md:hidden"></div>

        <div className="flex flex-col gap-12 md:gap-24">
          {[
            { img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600", time: "14:30", label: "Recepción", desc: "Coctel de bienvenida", icon: <Wine className="w-4 h-4" /> },
            { img: "https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg?auto=compress&cs=tinysrgb&w=600", time: "15:00", label: "Ceremonia", desc: "Enlace nupcial", icon: <Heart className="w-4 h-4" /> },
            { img: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600", time: "16:00", label: "Celebración", desc: "Banquete y fiesta", icon: <Music className="w-4 h-4" /> }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full flex justify-end md:justify-center pl-16 md:pl-0 relative">
                 {/* Icon Node */}
                 <div className="absolute left-0 md:left-auto md:right-[-2.5rem] top-1/2 -translate-y-1/2 w-14 h-14 bg-paper border border-slate/20 rounded-full flex items-center justify-center text-slate z-10 md:hidden">
                    {item.icon}
                 </div>
                 {/* Desktop Node */}
                 <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-14 h-14 bg-paper border border-slate/20 rounded-full items-center justify-center text-slate z-10 ${i % 2 === 0 ? '-right-[calc(2rem+3px)]' : '-left-[calc(2rem+3px)]'}`}>
                    {item.icon}
                 </div>

                 <div className={`w-full max-w-[300px] aspect-square bg-slate/5 p-2 ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <img src={item.img} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" alt={item.label} />
                 </div>
              </div>
              <div className={`flex-1 text-left ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0 w-full`}>
                <p className="text-3xl md:text-5xl font-display italic text-slate mb-2">{item.time}</p>
                <div className="w-12 h-px bg-slate/30 mb-4 inline-block"></div>
                <p className="text-[12px] md:text-sm uppercase tracking-[0.3em] text-slate font-medium mb-2 block">{item.label}</p>
                <p className="text-[11px] md:text-xs text-slate/60 uppercase tracking-widest">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Desktop vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate/10 -translate-x-1/2 z-0"></div>
      </div>
    </div>
  </section>
);

export default Timing;
