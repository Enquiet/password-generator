const random = (number: number):  number => {
  return Math.floor(Math.random() * number)
}
const  generatePassword = (length: number): string => {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?'
  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters

  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = random(allCharacters.length)
    password += allCharacters[randomIndex]
  }
  return password
}

const evaluatePassword = (password: string): number => {
  const hasUppercase = /[A-Z]/.test(password) as unknown as number
  const hasLowercase = /[a-z]/.test(password) as unknown as number
  const hasNumber = /\d/.test(password) as unknown as number
  const hasSpecialChar = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password) as unknown as number
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

export const initPassword = (passwordCount: number = 1000000, passwordLength: number = 18) => {
  const generatedPasswords = generateMultiplePasswords(passwordCount, passwordLength)
  return findBestPassword(generatedPasswords)
}
