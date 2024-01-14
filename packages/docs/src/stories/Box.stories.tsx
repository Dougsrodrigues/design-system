import { Box, BoxProps, Text } from '@santiago-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
