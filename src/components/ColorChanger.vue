<template>
  <div :style="{ backgroundColor: selectedColor }" class="color-changer">
    <label for="color-select">Choose a background color:</label>
    <select id="color-select" v-model="selectedColor">
      <option v-for="color in colors" :key="color.value" :value="color.value" :style="{ backgroundColor: color.value }">
        {{ color.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue';

export default defineComponent({
  name: 'ColorChanger',
  data() {
    const selectedColor = ref('');
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
    const isFormValid = computed(() => { return selectedColor.value.length > 0; });
    return {
      selectedColor, colors, isFormValid,
    };
  }
});
</script>

<style scoped>
.color-changer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#color-select {
  padding: 10px;
  font-size: 16px;
}
</style>
