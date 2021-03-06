<template>
  <div class="flex flex-col justify-start w-full">
    <div>
      <h1 class="text-xl lg:text-5xl">Welcome {{ accountId }}!</h1>
      <p class="lg:text-xl mt-10">
        Sign in with
        <a href="https://near.org/" target="_blank" class="underline">NEAR</a>
        and add a message to the guest book!
      </p>
    </div>
    <form
      class="w-1/3 mt-10 flex flex-col items-start lg:flex-row lg:items-center"
    >
      <label for="message" class="px-2 block text-sm font-medium text-gray-700"
        >Message</label
      >
      <input
        v-model="message"
        type="text"
        name="message"
        id="message"
        class="px-2 shadow-sm border-2 border-near-red-light focus:ring-red focus:border-red border-gray rounded-full"
        placeholder="Message"
      />
      <label for="donation" class="px-2 block text-sm font-medium text-gray-700"
        >Donation</label
      >
      <div
        class="flex justify-start px-2 w-24 shadow-sm border-2 border-near-red-light focus:ring-red focus:border-red border-gray rounded-full"
      >
        <input v-model="donation" type="number" placeholder="0" class="w-16" />
        <span>Ⓝ</span>
      </div>
    </form>
    <div class="flex items-center mt-10 flex-col lg:flex-row">
      <div
        class="bg-near-gray m-3 p-4 w-64 rounded-xl flex flex-col justify-between"
      >
        <div class="flex justify-between">
          <h4 class="mt-2 font-bold">{{ message }}</h4>

          <div
            v-if="donation > 0"
            class="flex flex-col items-center text-near-red"
          >
            <BadgeCheckIcon class="w-10" />
            <span class="text-xs">Premium</span>
          </div>
        </div>
        <p class="text-sm mt-2">Sender: {{ accountId }}</p>
      </div>

      <button
        class="bg-near-red rounded-full px-10 py-2 lg:ml-10 lg:mt-5"
        @click="handleSubmit"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { BadgeCheckIcon } from "@heroicons/vue/outline";
import { wallet } from "@/services/near";

export default {
  props: {
    // pass addMessage as a prop to Form
    // Form and Messages are sybling components that share state (Form sets messages; Messages gets messages)
    // since they share state, the state should be lifted to their parent component (Home)
    addMessage: {
      type: Function,
      required: true,
    },
  },
  components: { BadgeCheckIcon },
  setup(props) {
    const message = ref("");
    const donation = ref("0");

    const handleSubmit = () => {
      props.addMessage({ text: message.value, donation: donation.value });
    };

    return {
      message,
      donation,
      handleSubmit,
      accountId: wallet.getAccountId(),
    };
  },
};
</script>

<style>
h1 {
  text-shadow: 1px 1px theme("colors.near-red.DEFAULT");
}
</style>
