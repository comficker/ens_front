<template>
  <header class="mb-4">
    <div class="max-w-4xl mx-auto flex gap-4 items-center justify-between font-bold">
      <div class="flex items-center">
        <nuxt-link class="text-xs flex flex-col uppercase font-sans" to="/">
          <svg width="57" height="22" xmlns="http://www.w3.org/2000/svg" class="css-1c7z3f0 ek5lauz0">
            <g fill-rule="nonzero">
              <path
                d="M0 21.405V.465a.11.11 0 0 1 .105-.1H13.41c.06 0 .11.05.11.11V3.14c0 .06-.05.11-.11.11H3.21v6.17h8.675c.06 0 .11.05.11.11v2.635c0 .06-.05.11-.11.11H3.21v6.355h10.2c.06 0 .11.05.11.11v2.665c0 .06-.05.11-.11.11H.105a.11.11 0 0 1-.105-.11zM33.085 21.46L23.35 6.635V21.4c0 .06-.05.11-.11.11h-3a.11.11 0 0 1-.11-.11V.48c0-.06.05-.11.11-.11h2.775c.036 0 .07.02.09.05l9.745 14.795V.48c0-.06.05-.11.11-.11h3c.06 0 .11.05.11.11V21.4c0 .06-.05.11-.11.11h-2.785a.11.11 0 0 1-.09-.05zM45.885 17.45v1c1.285.28 2.595.433 3.91.46 1.3-.027 2.594-.179 3.865-.455v-4.74L42.77 9.91a.11.11 0 0 1-.07-.1V1.105a.095.095 0 0 1 .07-.1 27.17 27.17 0 0 1 6.97-1c2.367.031 4.72.367 7 1a.095.095 0 0 1 .07.1V4.39c0 .06-.05.11-.11.11h-2.945a.11.11 0 0 1-.11-.11v-1a20.425 20.425 0 0 0-3.91-.455 20.25 20.25 0 0 0-3.865.45l.015 4.48 10.85 3.8a.11.11 0 0 1 .07.1v8.975a.095.095 0 0 1-.07.1 27.18 27.18 0 0 1-6.97 1 27.555 27.555 0 0 1-7-1 .095.095 0 0 1-.07-.1v-3.29c0-.06.05-.11.11-.11h2.94a.11.11 0 0 1 .14.11z"></path>
            </g>
          </svg>
          <span>Hunt</span>
        </nuxt-link>
      </div>
      <div class="flex gap-4 text-xl">
        <div class="flex">
          <input v-model="name" class="border border-r-0 outline-none p-3 w-full" type="text" placeholder="Search">
          <div class="btn xl pri" @click="search()">
            <icon name="search"></icon>
          </div>
        </div>
        <div class="flex">
          <client-only>
            <div class="p-3 px-4 flex space-x-2 items-center cursor-pointer border" @click="login()">
              <icon class="md" name="user"/>
              <span class="font-bold">{{ getUserName }}</span>
              <div v-if="loggedIn" class="border-l pl-1" @click="logout()">
                <icon name="close"></icon>
              </div>
            </div>
          </client-only>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import Search from "@/components/partials/Search";

export default {
  name: "PHeader",
  components: {Search},
  data() {
    return {
      name: null
    }
  },
  methods: {
    ...mapActions('auth', [
      'login',
      'logout'
    ]),
    search() {
      if (!this.name) return;
      let x = this.name;
      if (x && x.includes(".eth")) {
        x.replace(".eth", "")
      }
      this.$router.push(`/?search=${x}`)
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getUserName',
      'loggedIn'
    ])
  }
}
</script>

<style scoped>
</style>
