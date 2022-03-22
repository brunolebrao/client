import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'default' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'default'
}: RibbonProps) => (
  <S.Whapper color={color} size={size}>
    {children}
  </S.Whapper>
)
