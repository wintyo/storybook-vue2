import MyButton from './Button2.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button2',
  component: MyButton,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button v-bind="$props" />',
});

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Base.args = {};
