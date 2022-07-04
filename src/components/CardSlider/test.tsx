import 'match-media-mock'
import { screen } from '@testing-library/react'
import { CardSlider } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import items from './mock'

describe('<CardSlider />', () => {
  it('Should render the heading', () => {
    const { container } = renderWithTheme(<CardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<CardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/prev/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
