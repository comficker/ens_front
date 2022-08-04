<template>
  <div class="max-w-4xl my-4 mx-auto space-y-4 text-xl">
    <div>
      <h1 class="text-4xl limit font-semibold">{{ title }}</h1>
      <p class="text-gray-500">Enter a list of domains (line by line)</p>
    </div>
    <textarea v-model="lines" class="border w-full p-4 outline-none" rows="3" placeholder="example.eth"></textarea>
    <div class="flex justify-center">
      <div class="btn pri xl" :class="{'animate-pulse': fetching}" @click="search">
        <icon name="search"></icon>
        <span>Search</span>
      </div>
    </div>
    <div v-if="results.length" class="space-y-3">
      <div class="text-xs uppercase font-bold">Results</div>
      <div class="border">
        <div
          v-for="item in results" :key="item.name"
          class="flex items-center justify-between border-b p-2 px-4"
        >
          <div class="font-bold">{{ item.name }}.eth</div>
          <div class="flex space-x-2 text-xs">
            <a
              v-if="item.isBought" ref="nofollow"
              :href="`https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/${item.id}`"
              target="_blank"
            >
              <img class="w-4 h-4" src="/opensea.svg" alt="">
            </a>
            <a v-if="item.isBought" ref="nofollow" :href="`https://etherscan.io/address/${item.owner}`" target="_blank">
              <img class="w-4 h-4" src="/etherscan.svg" alt="">
            </a>
            <a v-else ref="nofollow" :href="`https://app.ens.domains/name/${item.name}/register`" target="_blank"
               class="btn xs">
              <img class="w-4 h-4" src="/ens.svg" alt="">
              <span>register</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Web3 = require('web3');
const web3 = new Web3("https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79");

export default {
  name: "BulkSearchPage",
  head() {
    return {
      title: this.title
    }
  },
  data() {
    return {
      title: "Bulk ENS Search",
      lines: null,
      results: [],
      fetching: false
    }
  },
  methods: {
    async search() {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      if (!this.lines) return;
      this.fetching = true;
      const lines = this.lines.split("\n").filter(onlyUnique).map(x => {
        if (x.endsWith(".eth")) {
          x = x.substr(0, x.length - 4)
        }
        return x
      })
      const results = await Promise.all(
        lines.map(x => {
          return web3.eth.ens.getOwner(x + ".eth")
        })
      )
      this.results = results.map((x, i) => {

        return {
          name: lines[i],
          owner: x,
          isBought: x !== '0x0000000000000000000000000000000000000000',
          id: web3.utils.BN((web3.utils.keccak256(lines[i]))).toString()
        }
      })
      this.fetching = false;
    }
  },
}
</script>

<style scoped>

</style>
