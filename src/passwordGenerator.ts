const  generatePassword = (length: number): string => {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const specialCharacters = '!@#$%^&*()_+-=[]{};"|,.<>/?'
  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters

  let password = ''
  const array = new Uint32Array(length)
  window.crypto.getRandomValues(array)
  for (let i = 0; i < length; i++) {
    const randomIndex = array[i] % allCharacters.length
    password += allCharacters[randomIndex]
  }
  return password
}

const evaluatePassword = (password: string): number => {
  const hasUppercase = /[A-Z]/.test(password)  ? 1 : 0
  const hasLowercase = /[a-z]/.test(password) ? 1 : 0
  const hasNumber = /\d/.test(password) ? 1 : 0
  const hasSpecialChar = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password) ? 1 : 0
  return hasUppercase + hasLowercase + hasNumber + hasSpecialChar // Возвращаем сумму выполненных критериев
}

const  generateMultiplePasswords = (count: number, length: number): string[] =>  {
  const passwords = []
  for (let i = 0; i < count; i++) {
    passwords.push(generatePassword(length))
  }
  return passwords
}

const  findBestPassword = (passwords: string[]): string => {
  return passwords.reduce((best: string , current: string) => {
    return evaluatePassword(current) > evaluatePassword(best) ? current : best
  })
}

const initPassword = (passwordCount: number = 1000000, passwordLength: number = 18) => {
  const generatedPasswords = generateMultiplePasswords(passwordCount, passwordLength)
  return findBestPassword(generatedPasswords)
}

export default {
  initPassword
}