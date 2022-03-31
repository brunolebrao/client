import { Button } from 'components/Button'
import {
  Ribbon,
  RibbonColors,
  RibbonProps,
  RibbonSizes
} from 'components/Ribbon'
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from 'styled-icons/material-outlined'
import * as S from './styles'

export type CardProps = {
  img: string
  title: string
  subtitle: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

export const Card = ({
  title,
  subtitle,
  price,
  img,
  promotionalPrice,
  favorite,
  onFav,
  ribbon,
  ribbonColor,
  ribbonSize
}: CardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Info>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.PriceBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.PriceBox>
    </S.Content>
  </S.Wrapper>
)
