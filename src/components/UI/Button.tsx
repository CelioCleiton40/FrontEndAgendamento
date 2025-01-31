import React, { ButtonHTMLAttributes } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant" | "size"> {
  variant?: 'primary' | 'secondary'
  size?: 'normal' | 'large'
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'normal',
  children,
  ...props 
}) => {
  const baseStyles = 'rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2'
  
  const sizeStyles = size === 'large' 
    ? 'px-8 py-4 text-lg' 
    : 'px-6 py-3 text-md'

  const variantStyles = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300'
    : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-200'

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${sizeStyles} ${variantStyles}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export const btnPrimary = 'btn-primary bg-blue-600 text-white hover:bg-blue-700'
export const btnSecondary = 'btn-secondary bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
export const btnPrimaryLg = 'btn-primary-lg px-8 py-4 text-lg'

export default Button