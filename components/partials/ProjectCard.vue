<template>
  <div class="p-4 py-2 -mx-4 flex space-x-4 hover:bg-gray-100 duration-300 border-t">
    <div class="flex-1 relative">
      <div class="absolute inset-0 flex items-center">
        <h4 class="font-bold leading-none limit">
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
