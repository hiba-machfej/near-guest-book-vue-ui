<template>
  <div class="w-full flex justify-between items-center mb-20">
    <div
      class="flex justify-start items-center bg-near-black text-near-white font-bold pr-3 rounded-full"
    >
      <img class="w-8 md:w-12" src="@/assets/logo.svg" alt="logo" />
      <p>GuestBook</p>
    </div>

    <button v-if="accountId" @click="signIn">
      {{ "Log out" }}
    </button>
    <button v-else @click="signIn">
      {{ "Login with NEAR Wallet" }}
    </button>
  </div>
</template>

<script>
import { wallet, CONTRACT_ID } from "@/services/near";

export default {
  setup() {
    const accountId = wallet.getAccountId();

    const signIn = () => {
      if (accountId) {
        wallet.signOut();
        window.location.reload();
      } else {
        wallet.requestSignIn(CONTRACT_ID);
      }
    };

    return {
      accountId,
      signIn,
    };
  },
};
</script>

<style></style>
