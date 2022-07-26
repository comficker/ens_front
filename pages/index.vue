<template>
  <div class="max-w-4xl mx-auto my-4 md:my-6">
    <div class="flex gap-4">
      <div class="flex items-center gap-3">
        <div class="w-3 h-3 flex items-center justify-center rounded-full bg-green-400">
          <div class="animate-ping w-3 h-3 rounded-full bg-green-400">
          </div>
        </div>
        <h2 class="text-lg font-semibold">Live</h2>
        <span class="p-0.5 px-2 font-bold rounded text-xs bg-green-300">minting</span>
      </div>
      <div class="flex-1"></div>
      <div class="flex space-x-4">
        <div class="btn" @click="showFilter = !showFilter" :class="{'active': showFilter}">
          <icon name="sort"></icon>
          <span class="md:block hidden">Filter</span>
        </div>
        <nuxt-link to="/bulk-search" class="btn pri">Bulk Search</nuxt-link>
      </div>
    </div>
    <div class="border px-4 mt-3">
      <div class="-mx-4 my-2 text-xs font-bold uppercase p-3 py-1 flex space-x-4">
        <div class="flex sort flex-1">
          <sort v-model="sort.name"/>
          <span>Name</span>
        </div>
        <div class="flex sort w-24 justify-end">
          <sort v-model="sort.current_price"/>
          <span>Price</span>
        </div>
        <div class="md:flex sort w-28 hidden justify-end">
          <sort v-model="sort.mint_date"/>
          <span>Created</span>
        </div>
        <div class="flex sort w-28 justify-end">
          <sort v-model="sort.expired_date"/>
          <span>Expired</span>
        </div>
        <div class="hidden md:flex sort w-24 justify-end">
          <span>Links</span>
        </div>
      </div>
      <TransitionGroup tag="div" name="list" class="relative">
        <project-card v-for="item in response.results" :key="item.id" :value="item"/>
      </TransitionGroup>
      <div class="bg-gray-50 -mx-4 text-xs font-bold uppercase p-2 flex border-t justify-between items-center">
        <div class="flex space-x-1">total: {{ response.count }}</div>
        <div class="flex space-x-2">
          <nuxt-link v-if="response.previous !== null" :to="response.previous" class="p-1 border cursor-pointer">
            <icon name="chv-left"/>
          </nuxt-link>
          <nuxt-link v-if="response.next !== null" :to="response.next" class="p-1 border cursor-pointer">
            <icon name="chv-right"/>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="my-4 text-sm font-bold uppercase flex justify-center items-center text-gray-300">
      <div class="md:flex gap-1 underline text-center">
        <div class="flex gap-1" v-for="(x, i) in alphabet" :key="i">
          <nuxt-link
            class="block w-5 h-6 md:w-3 md:h-3 hover:text-gray-900"
            v-for="item in x" :key="item"
            :to="`/?start=${item}`"
          >{{ item }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sort from "~/components/helpers/Utils/Sort";
import ProjectCard from "~/components/partials/ProjectCard";

const {io} = require("socket.io-client");

export default {
  name: 'IndexPage',
  components: {ProjectCard, Sort},
  data() {
    return {
      today: new Date().toISOString().split("T")[0],
      alphabet: [
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
        ["N", "O", "P", "Q", "R", "U", "V", "W", "X", "Y", "Z", "S", "T",]
      ],
      showFilter: false,
      display: [],
      text: "",
      query: {
        page: 1
      },
      sort: {
        'name': 0,
        'current_price': 0,
        'mint_date': 0,
        'expired_date': 0
      },
      reports: []
    }
  },
  computed: {
    response() {
      return this.$store.state.data.response;
    },
  },
  mounted() {
    const socket = io("https://signal.enshunt.com/");
    window.socket = socket;
    socket.on("new_register", (res) => {
      this.$store.commit('data/PUSH_RESPONSE', res)
    });
  }
}
</script>
