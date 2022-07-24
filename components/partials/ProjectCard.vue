<template>
  <div class="p-4 py-2 -mx-4 flex space-x-4 items-center hover:bg-gray-100 duration-300 border-t">
    <div class="flex-1">
      <h4 class="font-bold leading-none">
        <nuxt-link :to="`/${value.id}-${value.name}.eth`">{{ value.name }}.eth</nuxt-link>
      </h4>
    </div>
    <div class="w-24 flex space-x-1 items-center justify-end">
      <span>{{ formatPrice }}</span>
      <icon name="eth"></icon>
    </div>
    <div class="w-24 hidden md:block text-right">
      {{ formatDateMint }}
    </div>
    <div class="w-24 text-right flex justify-end items-center space-x-2">
      {{ formatDate }}
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
    formatDate() {
      const date = new Date(this.value.expired_date)
      return date.toLocaleDateString()
    },
    formatDateMint() {
      if (this.value.mint_date) {
        const date = new Date(this.value.mint_date)
        return date.toLocaleDateString()
      } else {
        return '_'
      }
    }
  }
}
</script>
