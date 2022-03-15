import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /Boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the color correctly', () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#030517' })
  })
})
