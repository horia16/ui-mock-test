<template>
  <!-- We need to wrap the icon; If the name changes we want vue to be able to replace the old component 
    This will only work if we mark the key on the div and since our spam will be replaced with the iconify svg 
    we have to build everyting inisde a wrapper
 -->
  <div class="icon-wrapper" :key="name">
    <!-- Iconify will bin to this span -->
    <span class="iconify" :data-icon="name"></span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// I will be using iconify for this, however iconify does not have a vue component so we have to create one
export default defineComponent({
  name: "Icon",
  props: {
    name: { type: String, required: true },
  },
  components: {},
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.icon-wrapper {
  // Make sure the svg is centered and the wrapper won't affect it
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
