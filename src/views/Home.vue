<template>
  <div>
    <div class="location-box flex f-col j-center">
      <h1 class="mb-0 fs-large regular">
        Location
      </h1>
      <h2 class="mt-0 fs-xl-large light flex j-center c-black-transparent-60">
        <icon name="el:map-marker" class="mr-5 c-primary" />
        <span class="bold">Kyiv,</span> Ukraine
      </h2>
    </div>
    <div v-if="listings.awaitingData">
      <spinner />
    </div>
    <div v-else class="content-box slide-in-fwd">
      <div class="pb-8">
        <div class="category-selector">
          <selector-button
            v-for="(animal, index) in listings.animalTypes"
            :key="index"
            :active="index == 0"
            :icon="animal.icon"
            :animal="animal.name"
          />
          <!-- The selector buttons, will work on them later -->
        </div>
        <!-- The data will always be loaded here so no errors will be thrown -->
        <listing
          v-for="listing in listings.data"
          :key="listing.id"
          :data="listing"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import listings from "@/hooks/listings";
import Listing from "@/components/Listing.vue";
import Icon from "@/components/Icon.vue";
import SelectorButton from "@/components/SelectorButton.vue";
import Spinner from "@/components/Spinner.vue";
export default defineComponent({
  name: "Home",
  components: { Listing, Icon, SelectorButton, Spinner },
  props: {
    // type: { type: String, required: true },
  },
  setup() {
    listings.getAll("cat"); // Default to cat, doesn't matter in this example; Pobably you would have something
    // like a router variable to identify the type
    return {
      listings, // now we should have access to everything we need in this object
    };
  },
});
</script>
<style lang="scss">
.location-box {
  margin-top: 5rem;
  h1 {
    color: rgba(0, 0, 0, 0.253);
  }
}
.content-box {
  background-color: #f6f6f6;
  min-height: 500px; // Just for testing will remove later
  width: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  box-sizing: border-box;
}
.category-selector {
  display: flex;
  left: 0;
  right: 0;
  top: 4rem;
  overflow-x: auto;
  padding-top: 2.5rem;
}
</style>
