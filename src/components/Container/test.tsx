import theme from 'styles/theme'
import { Container } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Container />', () => {
  it('Should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Container</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Container
        </span>
      </div>
    `)
  })
})
