import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardGrid from "../components/CardGrid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "CardGrid",
  component: CardGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CardGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardGrid> = (args) => (
  <CardGrid {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  items: new Array(12).fill({}).map((item, index) => {
    return {
      title: `Item ${index}`,
      key: `item-${index}`,
      children: [],
      img: "https://source.unsplash.com/random",
    };
  }),
};
