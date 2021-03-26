import { reactive, Ref, ref } from "vue";
import { Listing } from "./interfaces";
/**
 * The array containing all the current listings
 */
const data: Ref<Array<Listing>> = ref([]);

/**
 * Tells us if we are waiting for a response from the api
 */
const awaitingData = ref(false);

/**
 * Load all the listings of a specific animal type
 * @param animalType The type of the animal that we want to get eg "cat" or "dog"
 */
async function getAll(animalType: string) {
  // LOAD FROM AN API, here we are just going to populate or "hard code" the data
  // I'll simulate an api call with set timeout
  awaitingData.value = true;
  setTimeout(() => {
    data.value = [
      {
        id: 1,
        description:
          "My job requires moving to another country. I don't have the opportunity to take the cat with me. I am looking for good people who will shelter my Sola.",
        createdAt: "May 25, 2019",
        distance: 3.6,
        color: "#CAD4D7",
        animal: {
          id: 1,
          name: "Sola",
          breed: "Abyssinian cat",
          age: 2,
          thumbnail: "/images/cat_1.png",
          gender: "female",
          owner: {
            id: 1,
            name: "Maya Berkovskaya",
            profileThumb: "Will add Later",
          },
        },
      },
      {
        id: 2,
        description:
          "My job requires moving to another country. I don't have the opportunity to take the cat with me. I am looking for good people who will shelter my Orion.",
        createdAt: "May 25, 2019",
        distance: 7.8,
        color: "#ECD5B1",
        animal: {
          id: 2,
          name: "Orion",
          breed: "Abyssinian cat",
          age: 1.5,
          thumbnail: "/images/cat_2.png",
          gender: "male",
          owner: {
            id: 1,
            name: "Maya Berkovskaya",
            profileThumb: "Will add Later",
          },
        },
      },
      {
        id: 3,
        description:
          "My job requires moving to another country. I don't have the opportunity to take the cat with me. I am looking for good people who will shelter my Orion.",
        createdAt: "May 25, 2019",
        distance: 2.8,
        color: "#ecb1b1",
        animal: {
          id: 3,
          name: "Winter",
          breed: "Abyssinian cat",
          age: 3.5,
          thumbnail: "/images/cat_3.png",
          gender: "female",
          owner: {
            id: 1,
            name: "Maya Berkovskaya",
            profileThumb: "Will add Later",
          },
        },
      },
      {
        id: 4,
        description:
          "My job requires moving to another country. I don't have the opportunity to take the cat with me. I am looking for good people who will shelter my Orion.",
        createdAt: "May 25, 2019",
        distance: 1,
        color: "#c0ecb1",
        animal: {
          id: 4,
          name: "Sky",
          breed: "Abyssinian cat",
          age: 3.2,
          thumbnail: "/images/cat_4.png",
          gender: "male",
          owner: {
            id: 1,
            name: "Maya Berkovskaya",
            profileThumb: "Will add Later",
          },
        },
      },
    ];

    awaitingData.value = false;
  }, 200);
}
// You would place this somewhere else, doing this for the sake of saving time
const animalTypes = [
  { name: "Cats", icon: "whh:cat" },
  { name: "Dogs", icon: "whh:dog" },
  { name: "Birds", icon: "whh:kiwi" },
  { name: "Bunnies", icon: "whh:rabbit" },
  { name: "Horses", icon: "si-glyph:horse" },
];

const listings = reactive({
  data,
  awaitingData,
  animalTypes,
  getAll,
});

export default listings;
