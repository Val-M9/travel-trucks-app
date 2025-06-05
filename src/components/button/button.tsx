import React from 'react'

import type { ButtonProps } from './types'
import styles from './button.module.css'

const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = 'filled',
  type = 'button',
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      data-variant={variant}
      type={type}
      className={`${styles.btn} ${className}`}
      {...props}>
      {children}
    </button>
  )
}

export default Button
