<template>
  <div class="py-8 px-4">
    <p-header/>
    <div class="content-wrapper">
      <div class="main-wrapper">
        <div class="flex-1">
          <nuxt/>
        </div>
        <p-footer/>
      </div>
    </div>
    <adapter/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import PHeader from "../components/partials/Header";
import PFooter from "../components/partials/Footer";
import Adapter from "../components/helpers/Modal/Adapter";

export default {
  name: "default",
  components: {Adapter, PFooter, PHeader},
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        }
      ],
      ...this.getMeta
    }
  },
  async fetch() {
    await this.fetchData( this.$route)
  },
  watch: {
    "$route": {
      deep: true,
      handler() {
        this.fetchData(this.$route)
      }
    }
  },
  computed: {
    ...mapGetters('config', ['getMeta']),
  },
  methods: {
    ...mapActions('data', ['fetchData'])
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.zoom-enter-active, .zoom-leave-active {
  transform: scale(1);
}

.zoom-enter, .zoom-leave-to /* .fade-leave-active below version 2.1.8 */
{
  transform: scale(.9);
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #F0F0F0;
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: #4cb8ae;
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
}

[placeholder]:empty::before {
  content: attr(placeholder);
  color: #555;
}

[placeholder]:empty:focus::before {
  content: "";
}

.main-wrapper {
  min-height: calc(100vh - 120px);
  @apply flex flex-col flex-1;
}

@media only screen and (min-width: 600px) {
  .content-wrapper {
    @apply flex-1 flex;
    scroll-behavior: smooth;
    overflow-y: overlay;
  }
}
</style>
