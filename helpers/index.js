const bcrypt = require('bcrypt')

module.exports = {
  encryptPassword: async plainPassword => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(plainPassword, salt)
    return {
      salt,
      hashedPassword
    }
  }
}
