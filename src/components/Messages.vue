<template>
  <h2 class="w-full text-2xl m-4">Signed Messages</h2>
  <div class="flex flex-wrap">
    <div
      v-for="message in messages.messages"
      :key="message"
      class="bg-near-gray m-3 p-4 w-64 rounded-xl flex flex-col justify-between"
    >
      <div class="flex justify-between">
        <h4 class="mt-2 font-bold">{{ message.text }}</h4>

        <div
          v-if="message.premium"
          class="flex flex-col items-center text-near-red"
        >
          <BadgeCheckIcon class="w-10" />
          <span class="text-xs">Premium</span>
        </div>
      </div>
      <p class="text-sm mt-2">Sender: {{ message.sender }}</p>
    </div>
  </div>
</template>

<script>
import { BadgeCheckIcon } from "@heroicons/vue/outline";
export default {
  props: {
    messages: {
      type: Object,
      required: true,
    },
  },
  components: {
    BadgeCheckIcon,
  },
};
</script>

<style scoped></style>
