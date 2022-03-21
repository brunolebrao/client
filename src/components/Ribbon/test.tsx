import { screen } from '@testing-library/react'
import Ribbon from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Ribbon />', () => {
  it('Should render the heading', () => {
    renderWithTheme(<Ribbon />)

    expect(screen.getByText(/Ribbon/i)).toBeInTheDocument()
  })
})
