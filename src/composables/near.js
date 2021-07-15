import { ref, onMounted } from "vue";
import { getMessages, addMessage } from "../services/near";

// There is only one reactive piece of data in this application (messages)
// this hook gets the array of messages and returns:
// 1. the array of messages (getter)
// 2. a function to add messages to the array of messages (setter)
export const useMessages = () => {
  // messages starts as an empty array
  const messages = ref([]);
  const isLoading = ref(false);

  // when the component first mounts get messages from the blockchain
  onMounted(async () => {
    messages.value = await getMessages();
  });

  // create a function that allows adding a message to the blockchain
  const handleAddMessage = async ({ text, donation }) => {
    isLoading.value = true;

    await addMessage({
      text,
      donation,
    });

    messages.value = await getMessages();
    isLoading.value = false;
  };

  return {
    messages,
    addMessage: handleAddMessage,
    isLoading,
  };
};
