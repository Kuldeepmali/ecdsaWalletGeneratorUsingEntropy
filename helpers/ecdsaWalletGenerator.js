const bip39 = require('bip39')
const hdWallet = require('ethereumjs-wallet/hdkey')
const generateMnemonicsFromEntropy = require('./generateMnemonicsFromEntropy')

const ecdsaWalletGenerator = async (entropy, callback) => {
  try {
    const mnemonic = await generateMnemonicsFromEntropy(entropy)
    if (!bip39.validateMnemonic(mnemonic)) throw new TypeError('INVALID ARGUMENTS')
    const HDKey = hdWallet.fromMasterSeed(mnemonic)
    const wallet = {
      privateKey: HDKey.getWallet().getPrivateKeyString(),
      publicKey: HDKey.getWallet().getPublicKeyString(),
      address: HDKey.getWallet().getAddressString(),
      mnemonic
    }
    callback(null, wallet)
  } catch (err) {
    callback(err, null)
  }
}

module.exports = ecdsaWalletGenerator
