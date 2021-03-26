<template>
  <div v-if="listings.awaitingData">
    <!-- Again a loader or a spinner -->
  </div>
  <div v-else-if="listing">
    <div
      class="listing-img-wrapper flex"
      :style="{ backgroundColor: listing.color }"
    >
      <img
        :src="listing.animal.thumbnail"
        :alt="`Picture of ${listing.animal.name}`"
      />
    </div>
    <div class="listing-view">
      <div class="animal-details-container f-grow flex f-col a-start">
        <div class="flex j-between w-100 mb-1 a-center">
          <div class="bold fs-xx-large c-black-transparent-80">
            {{ listing.animal.name }}
          </div>
          <div>
            <icon
              class="fs-xxx-large c-black-transparent-20"
              :name="
                listing.animal.gender == 'male'
                  ? 'ic:round-male'
                  : 'ic:round-female'
              "
            />
          </div>
        </div>
        <div
          class="fs-small bold mb-2 c-black-transparent-60 flex j-between w-100"
        >
          <div>{{ listing.animal.breed }}</div>
          <div>
            {{ listing.animal.age }}
            {{ listing.animal.age > 1 ? "years" : "year" }} old
          </div>
        </div>

        <div class=" bold flex c-black-transparent-40">
          <icon name="el:map-marker" class="c-primary mr-2" />Distance:
          {{ listing.distance }} km
        </div>
      </div>
      <div class="owner-container flex">
        <img
          src="https://amo-dating.com/img/avatar-245px-sample.jpg"
          alt="Owner's picture"
          class="avatar mr-2"
        />
        <div class="flex f-col w-100 a-start j-between">
          <div class="flex j-between w-100">
            <div class="bold">
              {{ listing.animal.owner.name }}
            </div>
            <div class="c-black-transparent-40">
              {{ listing.createdAt }}
            </div>
          </div>
          <div class="fs-small bold c-black-transparent-40">
            Owner
          </div>
        </div>
      </div>
      <div
        class="flex a-start p-8  c-black-transparent-60 fs-small text-justify"
      >
        {{ listing.description }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Icon from "@/components/Icon.vue";
import listings from "@/hooks/listings";
import { computed, defineComponent, Ref, ref } from "vue";
export default defineComponent({
  name: "ListingView",
  props: {
    id: { type: String, required: true },
  },
  components: { Icon },
  setup(props) {
    // We would do a listing.get(id); but since this is only an example I'll just use the
    // hardcoded values
    listings.getAll("cat");
    // I'll just create a computed variable for this example only
    const listing = computed(() => {
      if (listings.data) {
        return listings.data.find((x) => x.id == parseInt(props.id));
      }
      return null;
    });
    return {
      listings,
      listing,
    };
  },
});
</script>
<style lang="scss">
.listing-view {
  position: relative;
  padding-top: 6rem;
}
.owner-container {
  padding: 1rem;
}
.listing-img-wrapper {
  width: 100%;
  height: 25rem;
  box-shadow: 0 0 40px 20px rgba(0, 0, 0, 0.1) inset;
  img {
    margin-top: 1rem;
    width: 100%;
    height: 75%;
    object-fit: contain;
  }
}
.animal-details-container {
  width: 80%;
  position: absolute;
  box-sizing: border-box;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.157);
  background-color: white;
  top: -4rem;
  left: 10%;
  right: 10%;
  border-radius: 35px;
  padding: 1rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
}
</style>
