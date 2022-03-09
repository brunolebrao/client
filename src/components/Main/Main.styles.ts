import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.commons.white};
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`
export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`
export const Title = styled.h1`
  font-size: 2.5rem;
`
export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
export const Article = styled.article`
  width: min(40rem, 100%);
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ImgTechnologies = styled.img`
  width: 5rem;
`
