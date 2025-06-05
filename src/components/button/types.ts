export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'style' | 'type'> {
  variant?: 'filled' | 'outlined'
  type?: 'button' | 'submit' | 'reset'
  className?: string
}
