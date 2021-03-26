<template>
  <div class="image-changer">
    <loader-image :source="sources[currentImage]" />
    <div class="imc-button-list flex w-100 j-center">
      <button
        v-for="(x, index) in sources"
        :key="index"
        class="imc-button"
        :class="[index == currentImage ? 'imc-button-active' : '']"
        @click="setImage(index)"
      ></button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, Ref, ref } from "vue";
import LoaderImage from "./LoaderImage.vue";
// I probably won't have time to finish this but I'll try my best
export default defineComponent({
  name: "ImageChanger",
  props: {
    sources: { type: Array as PropType<Array<string>>, required: true },
  },
  components: { LoaderImage },
  setup() {
    const currentImage = ref(0);
    function setImage(index: number) {
      currentImage.value = index;
    }
    return {
      currentImage,
      setImage,
    };
  },
});
</script>
<style lang="scss">
.image-changer {
  position: relative;
  height: 25rem;
}
.imc-button-list {
  position: absolute;
  bottom: 4.5rem;
}
.imc-button {
  border-radius: 0.7rem;
  border: none;
  width: 0.7rem;
  height: 0.7rem;
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  outline: none;
  &:focus {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 0 0 4px rgba(0, 0, 0, 0.1);
  }
}
.imc-button-active {
  width: 1.4rem;
  background-color: var(--color-primary);
  box-shadow: 0 2px 2px var(--color-primary-transparent);
  &:focus {
    box-shadow: 0 2px 2px var(--color-primary-transparent),
      0 0 0 4px var(--color-primary-transparent);
  }
}
</style>
