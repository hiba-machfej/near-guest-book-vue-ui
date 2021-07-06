<template>
  <div class="flex flex-col lg:flex-row justify-between items-center">
    <Form />
    <img class="w-96 lg:w-2/5 my-10" src="@/assets/hero.png" alt="hero" />
  </div>
  <Messages v-if="data" :messages="data" />
</template>

<script>
import { ref, watchEffect } from "vue";
import { useNearAuth, addMessage, useContract } from "@/composables/near";

import Messages from "@/components/Messages";
import Form from "@/components/Form";

export default {
  components: { Messages, Form },
  async setup() {
    const { accountId } = useNearAuth();

    const data = ref(null);

    const loadData = () => {
      const messagesContent = useContract();
      messagesContent.then((response) => {
        data.value = response;
      });
    };

    watchEffect(() => {
      if (accountId.value) {
        loadData();
      }
    });

    const message = ref("");
    const donation = ref("0");

    const onSubmit = () => {
      addMessage(message, donation);
    };
    return {
      accountId,
      data,
      message,
      donation,
      onSubmit,
    };
  },
};
</script>

<style></style>
