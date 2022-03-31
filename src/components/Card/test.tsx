import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { Card } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props = {
  img: 'img/red-dead-card.jpg',
  title: 'Title',
  subtitle: 'Subtitle',
  price: 'R$ 100,00'
}
describe('<Card />', () => {
  it('Should render the Card', () => {
    renderWithTheme(<Card {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.subtitle })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<Card {...props} />)

    const price = screen.getByText('R$ 100,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })

    expect(price).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<Card promotionalPrice="R$ 90,00" {...props} />)

    expect(screen.getByText('R$ 100,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 90,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<Card {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<Card {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <Card
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ background: theme.colors.secondary })

    expect(ribbon).toHaveStyle({
      fontSize: theme.font.sizes.xsmall,
      height: '2.6rem'
    })

    expect(ribbon).toBeInTheDocument()
  })
})
