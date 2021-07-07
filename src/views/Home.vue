<template>
  <div class="flex flex-col lg:flex-row justify-between items-center">
    <Form :addMessage="addMessage" />
    <img class="w-96 lg:w-2/5 my-10" src="@/assets/hero.png" alt="hero" />
  </div>
  <Messages :messages="messages" />
</template>

<script>
import { useMessages } from "@/composables/near";

import Messages from "@/components/Messages";
import Form from "@/components/Form";

export default {
  components: { Messages, Form },
  setup() {
    // use our custom hook to get (reactive) messages state
    // we get this state from the Home component because it is shared with both Form and Messages
    // lifting shared state to a parent component is the easiest way to have components share state.
    const { messages, addMessage } = useMessages();

    return {
      messages,
      addMessage,
    };
  },
};
</script>

<style></style>
