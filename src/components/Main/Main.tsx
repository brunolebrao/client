import * as S from './Main.styles'

const Main = ({
  title = 'Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Container>
    <S.Logo src="/img/code.svg" alt="logo" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Article>
      <S.ImgTechnologies src="/img/ts.svg" alt="logo" />
      <S.ImgTechnologies src="/img/react.svg" alt="logo" />
      <S.ImgTechnologies src="/img/next.svg" alt="logo" />
      <S.ImgTechnologies src="/img/storybook.png" alt="logo" />
      <S.ImgTechnologies src="/img/sc.png" alt="logo" />
    </S.Article>
  </S.Container>
)

export default Main
