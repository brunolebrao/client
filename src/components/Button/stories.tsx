import { Story, Meta } from '@storybook/react/types-6-0'
import { Button } from '.'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Default Button'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}
