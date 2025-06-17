import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500',
    secondary: 'bg-gradient-to-r from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 text-slate-700 dark:from-slate-700 dark:to-slate-600 dark:hover:from-slate-600 dark:hover:to-slate-500 dark:text-white',
    outline: 'border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-md hover:shadow-lg focus:ring-red-500',
  };

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const styles = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

