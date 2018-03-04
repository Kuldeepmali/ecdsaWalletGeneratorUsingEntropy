const ecdsaWalletGenerator = require('./helpers/ecdsaWalletGenerator')

ecdsaWalletGenerator(
  '487eef4f0af249afb22f3f75436930ff',
  (err, wallet) => {
    if (err) console.log(err)
    else console.log(wallet)
  }
)
