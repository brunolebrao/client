import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const ButtonWithRef: ForwardRefRenderFunction<
  HTMLAnchorElement & HTMLButtonElement,
  ButtonProps
> = ({ children, size = 'medium', fullWidth = false, icon, ...props }, ref) => (
  <S.Whapper
    ref={ref}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Whapper>
)

export const Button = forwardRef(ButtonWithRef)
