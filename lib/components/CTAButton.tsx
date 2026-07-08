import Link from 'next/link';
import { ReactNode } from 'react';

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary',
  className = ''
}: { 
  href: string; 
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}) {
  const base = "inline-flex items-center justify-center rounded-xl px-8 py-4 font-bold text-lg transition-all duration-300";
  const styles = {
    primary: "bg-gradient-to-r from-brand-600 to-purple-600 text-white hover:scale-105 shadow-xl hover:shadow-brand-500/50",
    outline: "border-2 border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white"
  };
  
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="sponsored noopener noreferrer" 
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children} <span className="ml-2">→</span>
    </Link>
  );
}
