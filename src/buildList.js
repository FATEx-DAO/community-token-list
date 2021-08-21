const { version } = require("../package.json");
const harmony_mainnet = require("./tokens/harmony-mainnet.json");
const harmony_testnet = require("./tokens/harmony-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "FATExDAO Community",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://fatex.io/fatex-token-logo-large.png",
    keywords: ["fatex", "community"],
    tokens: [...harmony_mainnet, ...harmony_testnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
