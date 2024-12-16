<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import TodoList from './components/TodoList.vue';
import { ref, reactive, watch } from 'vue';

// Define reactive variables
const selectedColor = ref('Purple'); // Default background color
const colors = reactive([
  { name: 'Gray', value: 'gray' },
  { name: 'Crimson', value: 'crimson' },
  { name: 'Darkgreen', value: 'darkgreen' },
  { name: 'Navy', value: 'navy' },
  { name: 'Purple', value: 'purple' },
  { name: 'Darkgoldenrod', value: 'darkgoldenrod' },
  { name: 'Vue Green', value: '#41B883' },
  { name: 'Vue Blue', value: '#34495E' },
  { name: 'Rust', value: '#702828' },
  { name: 'Deeppink', value: 'deeppink' }
]);

// Function to update the body background color
const updateBodyBackgroundColor = () => {
  document.body.style.backgroundColor = selectedColor.value;
  // document.body.style.color = selectedColor.value;
};

// Watch for changes in selectedColor and update the body background color
watch(selectedColor, () => {
  updateBodyBackgroundColor();
});
</script>

<template>
  <div class="content-wrap">
    <label>Change Background Color</label>
    <select v-model="selectedColor" @change="updateBodyBackgroundColor">
      <option v-for="color in colors" :key="color.value" :value="color.value" :style="{ backgroundColor: color.value }">
        {{ color.name }}
      </option>
    </select>
    <AppHeader />
    <TodoList />
    <ColorChanger />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.content-wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  header {
    display: block;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

select {
  padding: 8px;
  font-size: 16px;
}
</style>
