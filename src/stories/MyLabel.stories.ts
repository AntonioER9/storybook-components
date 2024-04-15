import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';



const meta = {
  title: 'UI/labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'], //Documentación del storybook
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'inline-radio' }, // Modificar como se va a mostrar el campo 
    fontColor: { control: 'color' }, // Modificar como se va a mostrar el campo 
  }
} satisfies Meta<typeof MyLabel>;


export default meta;
type Story = StoryObj<typeof meta>


export const Basic: Story = {
  args: {
    label: 'Basic label',
  }
};

export const AllCaps: Story = {
  args: {
    label: 'All Caps label',
    allCaps: true,
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary label',
    color: 'text-secondary',
  }
};

export const CustomColor: Story = {
  args: {
    label: 'Custom color label',
    fontColor: '#5517ac',
  }
};