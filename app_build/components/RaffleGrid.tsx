'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRqwwVjg8A6jdlOzl8g8WWlFYrSid0ARg1t8wR0jaBuYVF4iitvQsu6A9ThZvdrCHTfQOP3OE0EQFyJ/pub?output=csv';

interface Ticket {
  number: string;
  status: 'vendido' | 'no_vendido' | 'loading';
}

export default function RaffleGrid() {
  const [tickets, setTickets] = useState<Ticket[]>(() => {
    // Inicializar 100 tickets con estado de carga
    return Array.from({ length: 100 }, (_, i) => ({
      number: i.toString().padStart(2, '0'),
      status: 'loading'
    }));
  });

  const fetchData = async () => {
    try {
      const res = await fetch(CSV_URL);
      const csvText = await res.text();
      
      const rows = csvText.trim().split('\n').slice(1); // Saltar header
      const updatedTickets = rows.map((row) => {
        const [num, stat] = row.split(',').map(s => s.trim());
        return {
          number: num,
          status: stat === 'vendido' ? 'vendido' : 'no_vendido'
        } as Ticket;
      });

      // Crear un mapa para actualizar rápidamente
      const updatesMap = new Map(updatedTickets.map(t => [t.number, t.status]));
      
      setTickets(prev => prev.map(t => ({
        ...t,
        status: updatesMap.get(t.number) || 'no_vendido'
      })));
    } catch (error) {
      console.error('Error fetching CSV:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch inicial
    const intervalId = setInterval(fetchData, 5000); // Polling cada 5 segundos
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white/10 p-4 sm:p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl">
      <h3 className="text-3xl text-white font-extrabold text-center mb-8 drop-shadow">Números Disponibles</h3>
      
      <div className="grid grid-cols-10 gap-1 sm:gap-2 lg:gap-3">
        {tickets.map((ticket) => (
          <div
            key={ticket.number}
            className={`
              relative flex items-center justify-center 
              w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 
              rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg md:text-xl
              transition-all duration-500 overflow-hidden select-none
              ${ticket.status === 'loading' ? 'bg-gray-400/50 animate-pulse text-transparent' : ''}
              ${ticket.status === 'no_vendido' ? 'bg-white text-orange-600 shadow-md hover:scale-110 hover:bg-orange-50 cursor-pointer border border-orange-200' : ''}
              ${ticket.status === 'vendido' ? 'bg-zinc-800/80 text-white shadow-inner cursor-not-allowed border border-zinc-700' : ''}
            `}
            title={`Boleto ${ticket.number} - ${ticket.status === 'vendido' ? 'Vendido' : 'Disponible'}`}
          >
            <AnimatePresence mode="wait">
               {ticket.status === 'vendido' ? (
                 <motion.div
                    key="x"
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    className="absolute text-red-400 drop-shadow-md text-2xl sm:text-4xl"
                 >
                   X
                 </motion.div>
               ) : (
                 <motion.div
                    key="number"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                 >
                   {ticket.number}
                 </motion.div>
               )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
