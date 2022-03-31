import { Story, Meta } from '@storybook/react/types-6-0'
import { Card, CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'Title',
    subtitle: 'Subtitle',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Card {...args} />
  </div>
)

export const withRibbon: Story<CardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Card {...args} />
  </div>
)

withRibbon.args = {
  ribbon: '10% OFF'
}
