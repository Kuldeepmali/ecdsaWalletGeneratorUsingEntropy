var bip39 = require('bip39')

async function run (entropy) {
  const mnemonicFromEntropy = bip39.entropyToMnemonic(entropy)
  return mnemonicFromEntropy
}

module.exports = run
