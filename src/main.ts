import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

export const useBackgroundColor = () => {
  const selectedColor = ref<string>('white'); // Default background color
  const colors = ref<string[]>([
    'white', 'red', 'green', 'blue', 'yellow', 'purple', 'orange'
  ]);

  return {
    selectedColor,
    colors,
  };
};
