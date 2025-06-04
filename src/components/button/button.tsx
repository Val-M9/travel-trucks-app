import type { ButtonProps } from './types'
import styles from './button.module.css'

const Button = ({
  onClick,
  variant = 'filled',
  type = 'button',
  size = 'lg',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      data-variant={variant}
      data-size={size}
      type={type}
      className={styles.btn}
      {...props}>
      {children}
    </button>
  )
}

export default Button
