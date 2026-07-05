import React from 'react';
import { motion } from 'framer-motion';
import { heroItem } from '../../utils/motion';

interface MicroLabelProps {
  label: string;
}

export const MicroLabel: React.FC<MicroLabelProps> = ({ label }) => {
  return (
    <motion.div 
      variants={heroItem} 
      className="flex items-center gap-3 mb-6"
    >
      {/* The "Pulse Point" Signature */}
      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
        {label}
      </span>
    </motion.div>
  );
};
