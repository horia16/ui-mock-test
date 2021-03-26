<template>
  <div class="loader-image">
    <img :src="source" :alt="alt" @load="onLoad" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
export default defineComponent({
  name: "LoaderImage",
  props: {
    source: { type: String, required: true },
    alt: { type: String, default: null },
  },
  components: {},
  setup() {
    const loading = ref(true);
    function onLoad() {
      loading.value = false;
    }

    return {
      onLoad,
      loading,
    };
  },
});
</script>
<style lang="scss">
.loader-image {
  width: inherit;
  height: inherit;
  img {
    width: 100%;
    height: 75%;
    object-fit: contain;
  }
}
</style>
