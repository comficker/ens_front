<template>
  <div class="p-3 py-1.5 -mx-4 flex space-x-4 hover:bg-gray-100 duration-300 bg-white border-t">
    <div class="flex-1 relative">
      <div class="absolute inset-0 flex items-center">
        <h4 class="font-bold leading-none limit text-xl tracking-wide">
          <nuxt-link :to="`/${value.id}-${value.name}.eth`">{{ value.name }}.eth</nuxt-link>
        </h4>
      </div>
    </div>
    <div class="w-24 flex space-x-1 items-center justify-end">
      <span>{{ formatPrice }}</span>
      <icon name="eth"></icon>
    </div>
    <div class="w-24 hidden md:block text-right text-xs">
      <div class="font-bold">{{ mintDate.toLocaleDateString() }}</div>
      <div class="text-gray-500">{{ mintDate.toLocaleTimeString() }}</div>
    </div>
    <div class="w-24 text-right text-xs">
      <div class="font-bold">{{ expiredDate.toLocaleDateString() }}</div>
      <div class="text-gray-500">{{ expiredDate.toLocaleTimeString() }}</div>
    </div>
    <div class="w-24 hidden md:block">
      <div class="flex space-x-2 justify-end text-xs">
        <a
          ref="nofollow"
          :href="`https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/${value.item_id}`"
          target="_blank"
        >
          <img class="w-4 h-4" src="/opensea.svg" alt="">
        </a>
        <a ref="nofollow" :href="`https://etherscan.io/address/${value.owner}`" target="_blank">
          <img class="w-4 h-4" src="/etherscan.svg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const web3 = require("web3");
export default {
  name: "ProjectCard",
  props: {
    value: {
      default: null,
      type: Object
    },
  },
  computed: {
    formatPrice() {
      return (+web3.utils.fromWei(Number.parseInt(this.value.current_price).toString())).toFixed(5)
    },
    expiredDate() {
      return new Date(this.value.expired_date)
    },
    mintDate() {
      return new Date(this.value.mint_date)
    }
  }
}
</script>
