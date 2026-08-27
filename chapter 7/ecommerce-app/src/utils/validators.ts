/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate if value is a positive number
 */
export const isPositiveNumber = (value: number): boolean => {
  return !isNaN(value) && value > 0
}

/**
 * Validate required field
 */
export const isRequired = (value: string): boolean => {
  return value.trim().length > 0
}
