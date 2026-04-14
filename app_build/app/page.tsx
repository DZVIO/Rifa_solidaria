'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import RaffleGrid from '../components/RaffleGrid';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("###");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <header className="text-center w-full mt-10">
        <motion.div
          className="relative inline-block mb-10"
          initial={{ y: -50, opacity: 0, rotate: -2 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <div className="relative bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-2 mx-auto overflow-hidden">

            <div className="border-4 border-dashed border-orange-300 rounded-xl px-10 py-6 md:px-16 md:py-8 bg-[#fffaf0] flex items-center justify-center relative">

              {/* Recortes del ticket simulados con pseudoelementos */}
              <div className="absolute w-10 h-10 rounded-full bg-orange-500/80 -left-6 top-1/2 -translate-y-1/2 shadow-inner mix-blend-multiply"></div>
              <div className="absolute w-10 h-10 rounded-full bg-yellow-400/80 -right-6 top-1/2 -translate-y-1/2 shadow-inner mix-blend-multiply"></div>

              <h1 className="text-center font-black leading-none drop-shadow-md">
                <span className="text-red-600 text-5xl md:text-8xl tracking-tight block">SUPER RIFA</span>
                <span className="text-orange-400 text-3xl md:text-5xl tracking-[0.2em] md:tracking-[0.3em] block mt-2">SOLIDARIA</span>
              </h1>
            </div>

          </div>
        </motion.div>

        <motion.div
          className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-2xl max-w-2xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">¡Participa y Gana!</h2>
          <p className="text-lg text-white/90">
            Hoy queremos compartir con ustedes una causa muy especial para nuestra familia. Estamos realizando una rifa solidaria con el propósito de recaudar fondos destinados a apoyar los gastos médicos de <b>Jorge Ramos</b>, un padre, abuelo y esposo muy querido por todos nosotros.<br></br>

            Los recursos recolectados serán utilizados para cubrir sesiones de terapia y la adquisición de implementos ortopédicos necesarios para su proceso de recuperación, los cuales son fundamentales en esta etapa de su tratamiento.<br></br>

            Agradecemos profundamente a cada persona que pueda apoyarnos participando en la rifa o compartiendo esta iniciativa. Su ayuda representa una gran esperanza para su bienestar y recuperación. 💙<br></br>
            La familia <b>Ramos</b> les expresa su más sincero agradecimiento por su solidaridad.
          </p>
        </motion.div>
      </header>

      <section className="w-full flex flex-col items-center">
        <CountdownTimer targetDate="2026-05-31T23:59:59" />
        <h2 className="text-xl md:text-2xl font-semibold text-white mt-4 drop-shadow-md tracking-wide">
          Fecha de la Rifa: 31/05/2026
        </h2>
      </section>

      <section className="w-full pb-20 flex flex-col items-center">
        <RaffleGrid />

        <motion.div
          className="mt-24 text-6xl md:text-8xl font-black text-white drop-shadow-[0_5px_15px_rgba(255,255,255,0.5)] select-none text-center z-10"
          style={{ rotate: "-15deg" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          ¡GANA $500.000!
        </motion.div>

        <div className="bg-white text-orange-500 font-extrabold text-xl md:text-3xl px-8 py-4 md:py-5 rounded-2xl shadow-2xl mt-16 md:mt-20 border-b-8 border-orange-200 z-20">
          Valor de la boleta: $20.000
        </div>

        {/* Sección de Contacto */}
        <div className="mt-12 flex flex-col items-center gap-8 bg-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-xl z-20 w-full max-w-2xl">
          <div className="w-full flex flex-col items-center gap-4">
            <h3 className="text-white/90 font-bold text-xl md:text-2xl drop-shadow-md">Responsables:</h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center">
              <a href="https://wa.me/573202845574" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 transition-all backdrop-blur-md px-6 py-3 rounded-full border border-white/40 text-white font-bold text-lg md:text-xl shadow-lg hover:-translate-y-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.46-1.761-1.633-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                320 284 5574
              </a>
              <a href="https://wa.me/573134533277" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 transition-all backdrop-blur-md px-6 py-3 rounded-full border border-white/40 text-white font-bold text-lg md:text-xl shadow-lg hover:-translate-y-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.46-1.761-1.633-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                313 453 3277
              </a>
            </div>
          </div>

          <div className="w-[80%] h-px bg-white/20 my-2"></div>

          <div className="w-full flex flex-col items-center gap-3">
            <h3 className="text-white/90 font-bold drop-shadow-md">Compartir enlace:</h3>
            <div className="flex items-center w-full max-w-sm bg-black/15 backdrop-blur-md p-1.5 pl-6 rounded-full border border-black/10 shadow-inner">
              <span className="text-white/90 font-mono text-sm md:text-base select-all mr-4 flex-1 truncate">https://rifadzvio.netlify.app</span>
              <button
                onClick={handleCopy}
                className={`p-3 transition-colors rounded-full text-white shadow flex items-center justify-center ${copied ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600'}`}
                title="Copiar enlace"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
