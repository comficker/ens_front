<template>
  <div v-if="value" class="max-w-4xl my-4 md:my-6 mx-auto space-y-4 md:space-y-6">
    <div class="flex items-center gap-3">
      <h1 class="text-5xl limit font-bold">{{ value.name }}.eth</h1>
      <div class="flex space-x-3 items-center">
        <a :href="`https://etherscan.io/address/${value.owner}`" target="_blank">
          <img class="w-8 h08" src="/etherscan.svg" alt="">
        </a>
      </div>
    </div>
    <div class="text-xs italic border-t border-dashed pt-3">
      <p>{{ desc }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      <div class="py-2 border p-4 shadow">
        <h4 class="text-xs uppercase">Price</h4>
        <div class="text-3xl flex items-center space-x-1 font-semibold text-green-500 fill-green-500">
          <span>{{ formatPrice }}</span>
          <icon class="lg" name="eth"></icon>
        </div>
      </div>
      <div class="py-2 border p-4 shadow">
        <h4 class="text-xs uppercase">Born</h4>
        <div class="text-lg font-semibold">
          <div>{{ formatDateMint.toLocaleDateString() }}</div>
          <div class="text-xs text-gray-500">{{ formatDateMint.toLocaleTimeString() }}</div>
        </div>
      </div>
      <div class="py-2 border p-4 shadow">
        <h4 class="text-xs uppercase">Expired</h4>
        <div class="text-lg font-semibold">
          <div>{{ formatDate.toLocaleDateString() }}</div>
          <div class="text-xs text-gray-500">{{ formatDate.toLocaleTimeString() }}</div>
        </div>
      </div>
    </div>
    <div class="space-y-3">
      <div class="space-y-2">
        <div class="flex">
          <div class="w-36 text-xs font-bold">ID</div>
          <div class="font-mono limit">{{ value.item_id }}</div>
        </div>
        <div class="flex">
          <div class="w-36 text-xs font-bold">REGISTRANT</div>
          <div class="font-mono limit">{{ value.owner }}</div>
        </div>
        <div class="flex">
          <div class="w-36 text-xs font-bold">CONTROLLER</div>
          <div class="font-mono limit">{{ value.owner }}</div>
        </div>
        <div class="flex">
          <div class="w-36 text-xs font-bold">RESOLVER</div>
          <div class="font-mono limit">{{ value.owner }}</div>
        </div>
        <div class="flex">
          <div class="w-36 text-xs font-bold">OWNER</div>
          <div class="font-mono limit">{{ value.owner }}</div>
        </div>
      </div>
    </div>
    <div class="md:-mx-4 p-4 bg-yellow-50 space-y-2 border">
      <h2 class="uppercase text-gray-500 font-bold">{{ value.name }}.eth Metadata</h2>
      <div v-for="item in Object.keys(traits)" :key="item" class="flex text-xs">
        <div class="w-36 font-bold uppercase">{{ item }}</div>
        <div class="font-mono limit">
          <span v-if="traits[item]">{{ traits[item] }}</span>
          <span class="text-gray-400" v-else>Not set</span>
        </div>
      </div>
    </div>
    <div>
      <table class="min-w-full">
        <thead class="bg-gray-50">
        <tr>
          <th scope="col"
              class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6">Event
          </th>
          <th scope="col" class="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">Price
          </th>
          <th scope="col"
              class="hidden md:table-cell px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
            From
          </th>
          <th scope="col" class="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">To</th>
          <th scope="col" class="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">Date
          </th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="row in value.transactions" :key="row.id">
          <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {{ row.event_name || 'minted' }}
          </td>
          <td class="whitespace-nowrap py-2 px-3 text-sm text-gray-500">
            <div class="flex space-x-1 items-center">
              <icon name="eth"></icon>
              <span>{{ displayPrice(row.price) }}</span>
            </div>
          </td>
          <td class="hidden md:table-cell whitespace-nowrap py-2 px-3 text-sm text-gray-500">{{
              normalizeAdd(row.fr)
            }}
          </td>
          <td class="whitespace-nowrap py-2 px-3 text-sm text-gray-500">{{ normalizeAdd(row.to) }}</td>
          <td class="whitespace-nowrap py-2 px-3 text-gray-500 text-xs">
            <div class="font-bold">{{ new Date(row.timestamp).toLocaleDateString() }}</div>
            <div class="text-gray-500">{{ new Date(row.timestamp).toLocaleTimeString() }}</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import web3 from "web3";
import Chart from "@/components/Chart";

export default {
  name: "NameDetail",
  components: {Chart},
  computed: {
    value() {
      return this.$store.state.data.detail;
    },
    desc() {
      return `${this.value.name}.eth registered by ${this.value.owner} in ${this.formatDateMint.toLocaleString()} and will be expired in ${this.formatDate.toLocaleString()}`
    },
    formatPrice() {
      return this.displayPrice(this.value.current_price)
    },
    formatDate() {
      return new Date(this.value.expired_date)
    },
    formatDateMint() {
      return new Date(this.value.mint_date)
    },
    rows() {
      return [
        {name: "Transfer", from: "0x0000", to: "0x0000", "price": 0.022, timestamp: "22/22/2022"}
      ]
    },
    traits() {
      return {
        "email": "",
        "url": "",
        "avatar": "",
        "description": "",
        "notice": "",
        "keywords": "",
        "com.discord": "",
        "com.github": "",
        "com.reddit": "",
        "com.twitter": "",
        "org.telegram": ""
      }
    }
  }
}
</script>

<style scoped>
</style>
