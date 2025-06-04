import type { ButtonProps } from './types'
import styles from './button.module.css'

const Button = ({
  onClick,
  variant = 'filled',
  type = 'button',
  children,
  style = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      data-variant={variant}
      type={type}
      className={`${styles.btn} ${style}`}
      {...props}>
      {children}
    </button>
  )
}

export default Button
