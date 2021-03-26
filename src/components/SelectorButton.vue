<template>
  <div class="flex f-col j-center a-center">
    <button class="selector-button" :class="{ 'sb-active': active }">
      <icon :name="icon" />
    </button>
    <div class="mb-2 mt-4 bold fs-small c-black-transparent-40">
      {{ animal }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import Icon from "./Icon.vue";
export default defineComponent({
  name: "SelectorButton",
  props: {
    active: { type: Boolean, default: false },
    icon: { type: String, required: true },
    animal: { type: String, required: true },
  },
  components: { Icon },
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.selector-button {
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-left: 1rem;
  margin-right: 1rem;
  border: none;
  font-size: 2rem;
  background-color: white;
  box-shadow: 0 7px 10px 5px rgba(0, 0, 0, 0.1);
  color: #bebebe;
  outline: none;
  transition: all 0.2s;
  &:focus {
    box-shadow: 0 7px 10px 5px rgba(0, 0, 0, 0.1), 0 0 0 8px rgba(0, 0, 0, 0.1);
  }
}
.sb-active {
  background-color: var(--color-primary);
  box-shadow: 0 15px 15px 0px var(--color-primary-transparent),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  color: white;
  &:focus {
    box-shadow: 0 15px 15px 0px var(--color-primary-transparent),
      0 0 40px rgba(0, 0, 0, 0.1) inset,
      0 0 0 8px var(--color-primary-transparent);
  }
}
</style>
