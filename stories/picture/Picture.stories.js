import { Picture } from "../../components/img/Picture";
import styles from "../../components/Cards/Card.module.css";
import { getTemplate } from "../../helpers/storybook";

// const Template = getTemplate(Picture, styles);
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pictures/Picture",
  component: Picture,
  args: {
    src: "https://images.unsplash.com/photo-1679095007377-e6c8e13f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
};

const Template = (args) => <Picture {...args} />;

export const Default = Template.bind({});

// export const Rounded = Template.bind({});
// Rounded.args = {
//   isRounded: true,
// };
