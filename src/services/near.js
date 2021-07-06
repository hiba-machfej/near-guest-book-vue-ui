import { keyStores, Near, utils, WalletConnection } from "near-api-js";

export const CONTRACT_ID = "guest-book.testnet";

// use new NEAR here to avoid needing async/await
export const near = new Near({
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
});

// can now create a new WalletConnection with the created Near object
export const wallet = new WalletConnection(near, "guest-book");

// a service to get messages from the blockchain
export const getMessages = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "getMessages", {});
};

// a service to add a message to the blockchain
export const addMessage = ({ text, donation = 0 }) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "addMessage",
    args: { text },
    attachedDeposit: utils.format.parseNearAmount(donation),
  });
};
