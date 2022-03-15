import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'
import * as S from './styles'

export type ButtonAttributeTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
} & ButtonAttributeTypes

const ButtonWithRef: ForwardRefRenderFunction<
  HTMLAnchorElement & HTMLButtonElement,
  ButtonProps
> = ({ children, size = 'medium', fullWidth = false, icon, ...rest }, ref) => (
  <S.Whapper
    ref={ref}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...rest}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Whapper>
)

export const Button = forwardRef(ButtonWithRef)
