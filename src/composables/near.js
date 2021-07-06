import { ref, onMounted, watch } from "vue";
import { getWallet } from "../services/near";
import { Contract } from "near-api-js";
import Big from "big.js";

const wallet = ref();
const accountId = ref();
const contractId = ref("guest-book.testnet");
const contract = ref();
const messages = ref();

export const useWallet = () => {
  onMounted(async () => {
    wallet.value = await getWallet();
  });

  const signIn = () => {
    if (wallet.value.isSignedIn()) {
      wallet.value.signOut();
      window.location.reload();
    } else {
      wallet.value.requestSignIn(contractId.value);
    }
  };

  return { wallet, signIn };
};

export const useNearAuth = () => {
  onMounted(() => {
    if (wallet.value?.isSignedIn())
      accountId.value = wallet.value.getAccountId();
  });

  watch(wallet, () => {
    accountId.value = wallet.value.getAccountId();
  });

  return {
    accountId,
  };
};

export const useContract = async () => {
  contract.value = await new Contract(
    wallet.value.account(),
    contractId.value,
    {
      viewMethods: ["getMessages"],
      changeMethods: ["addMessage"],
      sender: accountId.value,
    }
  );

  messages.value = await contract.value.getMessages();

  return { messages };
};

export const addMessage = (message, donation = 0) => {
  const BOATLOAD_OF_GAS = Big(3)
    .times(10 ** 13)
    .toFixed();

  contract.value
    .addMessage(
      { text: message.value },
      BOATLOAD_OF_GAS,
      Big(donation.value || "0")
        .times(10 ** 24)
        .toFixed()
    )
    .then(async () => {
      messages.value = await contract.value.getMessages();
      message.value = "";
      donation.value = "";
    });

  return { messages };
};
