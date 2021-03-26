<template>
  <div class="spinner flex a-center j-center">
    <div class="spin">
      <icon name="gg-spinner" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import Icon from "./Icon.vue";
export default defineComponent({
  name: "Spinner",
  props: {},
  components: { Icon },
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.spinner {
  font-size: 5rem;
  color: var(--color-primary);

  overflow: hidden;
}
</style>
