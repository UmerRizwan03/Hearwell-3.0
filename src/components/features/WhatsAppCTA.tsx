import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppCTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[var(--z-sticky)] flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="hidden md:block bg-white text-[var(--color-ink)] px-4 py-2.5 rounded-xl shadow-lg border border-[var(--color-border)] pointer-events-auto"
          >
            <p className="text-sm font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Chat with us</p>
            <p className="text-xs text-[var(--color-ink-secondary)]">We typically reply in minutes</p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/919633626656"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with us on WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-[12px] opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-breathe" />
        <div className="relative w-[52px] h-[52px] bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300">
          <MessageCircle size={28} className="fill-current stroke-[1.5px]" />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppCTA;
