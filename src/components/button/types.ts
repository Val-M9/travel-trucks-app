export interface ButtonProps
  extends Omit<
    React.HTMLProps<HTMLButtonElement>,
    'size' | 'className' | 'style' | 'type'
  > {
  variant?: 'filled' | 'outlined'
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'lg'
}
