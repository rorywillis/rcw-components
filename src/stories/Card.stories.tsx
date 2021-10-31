import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '../components/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { table: { disable: true } },
    img: {
      name: 'img',
      type: { name: 'string', required: false },
      control: {
        type: 'text'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '15rem' }}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: [
    <div>Basic Card</div>
  ]
};

export const WithTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithTitle.args = {
  title: 'Card Title',
  children: [
    <div>Basic Card</div>
  ],
};

export const WithImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithImage.args = {
  title: 'Card Title',
  img: 'https://source.unsplash.com/random',
  children: [
    <div>Card with Image</div>
  ]
};

export const WithUrl = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithUrl.args = {
  title: 'Card Title',
  img: 'https://source.unsplash.com/random',
  url: '#',
  children: [
    <div>Card with Image</div>
  ]
};