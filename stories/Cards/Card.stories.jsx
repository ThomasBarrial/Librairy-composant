import { Card } from "../../components/Cards/Card";
import { options } from "../../components/Cards/constant";
import styles from "../../components/Cards/Card.module.css";
import {
  getListTemplate,
  getOptionsArgTypes,
  getTemplate,
} from "../../helpers/storybook";

const Template = getTemplate(Card, styles);
const ListTemplates = getListTemplate(Card, styles);
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/Card",
  component: Card,

  args: {
    children: "I'm a card by default",
  },

  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
  // parameters: {
  //   __sb: { fd: "row", fw: "no-wrap" },
  // },
};

// const Template = (args) => <Card {...args} />;
// const ListTemplates = ({ items, ...args }) =>
//   items.map((item, index) => <Card key={index} {...args} {...item} />);

export const Default = Template.bind({});

export const Clickable = Template.bind({});
Clickable.args = {
  isClickable: true,
};

export const Dragable = Template.bind({});
Dragable.args = {
  isDragable: true,
};

// export const Sizes = () =>
//   options.sizes.map((sizes, index) => {
//     return <Card children="Hello" key={index} size={sizes} />;
//   });

// export const Color = () => <Card children={options.sizes[1]} />

export const Colors = ListTemplates.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplates.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};

// export const Colors = () =>
//   options.colors.map((color, index) => {
//     return <Card key={index} color={color} />;
//   });

// // M$ore on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <Card {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   children: 'Card',
// };
