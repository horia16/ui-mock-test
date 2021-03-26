<template>
  <!-- hard code the route -->
  <router-link
    :to="`/listing/${data.id}`"
    class="listing flex a-center undecorated slide-in-right"
  >
    <div class="img-container" :style="{ backgroundColor: data.color }">
      <img
        :src="data.animal.thumbnail"
        :alt="`Picture of ${data.animal.name}`"
      />
    </div>
    <div class="details-container f-grow flex f-col a-start">
      <div class="flex j-between w-100 mb-1 a-center">
        <div class="bold fs-xx-large c-black-transparent-80">
          {{ data.animal.name }}
        </div>
        <div>
          <icon
            class="fs-xxx-large c-black-transparent-20"
            :name="
              data.animal.gender == 'male' ? 'ic:round-male' : 'ic:round-female'
            "
          />
        </div>
      </div>
      <div class="fs-small bold mb-2 c-black-transparent-60 ">
        {{ data.animal.breed }}
      </div>
      <div class="fs-small mb-2 c-black-transparent-40 bold">
        {{ data.animal.age }} {{ data.animal.age > 1 ? "years" : "year" }} old
      </div>
      <div class="fs-small bold flex c-black-transparent-40">
        <icon name="el:map-marker" class="c-primary mr-2" />Distance:
        {{ data.distance }} km
      </div>
    </div>
  </router-link>
</template>
<script lang="ts">
import { Listing } from "@/hooks/listings/interfaces";
import { defineComponent, PropType } from "vue";
import Icon from "./Icon.vue";
export default defineComponent({
  name: "Listing",
  props: {
    data: { type: Object as PropType<Listing>, required: true }, // PropType will help convet props to ts interfaces
  },
  components: { Icon },
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.listing {
  margin: 1rem;
  margin-top: 2rem;
}
.img-container {
  position: relative;
  width: 12rem;
  height: 14rem;
  border-radius: 30px;

  box-shadow: 0 25px 30px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1) inset;
  img {
    top: -1.5rem;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.details-container {
  background-color: white;
  padding: 1rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0 25px 30px rgba(0, 0, 0, 0.1);
}
</style>
