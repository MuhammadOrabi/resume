<template>
  <div class="relative z-20 flex justify-between items-center">
    <div class="flex md:block lg:flex items-center max-w-full">
      <div
        class="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12"
      >
        <router-link to="/" class="flex items-center no-underline">
          <img
            class="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
            src="https://avatars2.githubusercontent.com/u/19597717?s=460&u=7c4ac3d28654c890f32eaab4357f7849aabfc8f4&v=4"
            alt="Muhammad Orabi"
          />
        </router-link>
      </div>
      <div>
        <router-link
          to="/"
          class="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight"
          >Muhammad Orabi</router-link
        >
        <div
          class="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs spaced-x-6"
        >
          <router-link
            to="/employment"
            :class="
              currentPage.includes('employment')
                ? 'block text-black font-bold no-underline'
                : 'text-grey-dark font-semibold no-underline hover:text-black'
            "
            >Employment</router-link
          >
          <router-link
            to="/education"
            :class="
              currentPage.includes('education')
                ? 'block text-black font-bold no-underline'
                : 'text-grey-dark font-semibold no-underline hover:text-black'
            "
            >Education</router-link
          >
          <router-link
            to="/skills"
            :class="
              currentPage.includes('skills')
                ? 'block text-black font-bold no-underline'
                : 'text-grey-dark font-semibold no-underline hover:text-black'
            "
            >Skills</router-link
          >
          <router-link
            to="/projects"
            :class="
              currentPage.includes('projects')
                ? 'block text-black font-bold no-underline'
                : 'text-grey-dark font-semibold no-underline hover:text-black'
            "
            >Projects</router-link
          >
          <router-link
            to="/playground"
            :class="
              currentPage.includes('playground')
                ? 'block text-black font-bold no-underline'
                : 'text-grey-dark font-semibold no-underline hover:text-black'
            "
            >Playground</router-link
          >
        </div>
      </div>
    </div>
    <div class="block md:hidden">
      <button class="block" @click="toggleMenu">
        <svg
          style="display: block"
          :class="menuOpen ? 'hidden' : 'block'"
          class="block text-black h-6 w-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          style="display: none"
          :class="menuOpen ? 'block' : 'hidden'"
          class="text-black h-6 w-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          />
        </svg>
      </button>
    </div>
  </div>
  <div
    style="display: none"
    :class="menuOpen ? 'block' : 'hidden'"
    class="md:hidden z-10 bg-white fixed pin pt-24"
  >
    <div
      class="spaced-y-8 overflow-y-auto pt-6 pb-8 px-12 max-h-full overflow-y-auto"
    >
      <router-link
        to="/employment"
        class="block text-black font-bold no-underline"
        >Employment</router-link
      >
      <router-link
        to="/education"
        class="block text-black font-bold no-underline"
        >Education</router-link
      >
      <router-link to="/skills" class="block text-black font-bold no-underline"
        >Skills</router-link
      >
      <router-link
        to="/projects"
        class="block text-black font-bold no-underline"
        >Projects</router-link
      >
      <router-link
        to="/playground"
        class="block text-black font-bold no-underline"
        >Playground</router-link
      >
    </div>
  </div>
  <div class="lg:pl-32 mt-12">
    <div class="max-w-md">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
  methods: {
    toggleMenu() {
      if (this.menuOpen) {
        this.menuOpen = false;
        document.body.classList.remove(
          "scrolling-auto",
          "overflow-hidden",
          "fixed",
          "pin-x"
        );
      } else {
        this.menuOpen = true;
        document.body.classList.add(
          "scrolling-auto",
          "overflow-hidden",
          "fixed",
          "pin-x"
        );
      }
    },
  },
};
</script>
