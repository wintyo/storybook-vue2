import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import vuetify from '../plugins/vuetify';

Vue.use(Vuetify);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story, context) => {
    const wrapped = story(context);
    return Vue.extend({
      vuetify,
      components: { wrapped },
      template: `<v-app><wrapped /></v-app>`,
    });
  },
];
