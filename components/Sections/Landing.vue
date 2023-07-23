<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div
    class="grid content-center h-[40vh] bg-no-repeat bg-fixed bg-cover bg-bottom"
    id="background"
  >
    <div class="mx-10 text-center lg:w-3/5 lg:mx-auto" id="glass">
      <p class="text-2xl font-bold mt-5 mx-auto text-Dark">
        Lorem ipsum Neque porro
      </p>
      <p class="text-center mx-auto my-5 lg:w-[450px] text-DarkGray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor exercitation
      </p>

      <!-- show search -->
      <div class="mx-5 mb-5 lg:mx-20">
        <form>
          <div class="flex">
            <!-- search -->
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-Dark rounded-l-full border-l-2 border"
              style="
                background: rgba(255, 255, 255, 0.35);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 3px solid rgba(255, 255, 255, 0.3);
              "
              placeholder="Search"
              required
            />

            <!-- dropdown -->
            <label
              for="search-dropdown"
              class="mb-2 text-sm font-medium text-Dark sr-only"
              >Your Email</label
            >
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-Dark focus:outline-none text-left"
              style="
                background: rgba(255, 255, 255, 0.35);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 3px solid rgba(255, 255, 255, 0.3);
              "
              type="button"
            >
              Location
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <div
              id="dropdown"
              class="z-10 hidden bg-Light divide-y divide-Light rounded-lg shadow w-44"
              style="
                background: rgba(255, 255, 255, 0.35);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 3px solid rgba(255, 255, 255, 0.3);
              "
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-Light"
                  >
                    Location
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-Light"
                  >
                    Location
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-Light"
                  >
                    Location
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-Light"
                  >
                    Location
                  </button>
                </li>
              </ul>
            </div>
            <!-- bottom sumit -->
            <button
              type="submit"
              class="top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#114754] rounded-r-full border focus:outline-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <!-- Search -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
#background {
  background-image: url("@/assets/css/images/Main_Search.png");
}

#glass {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
