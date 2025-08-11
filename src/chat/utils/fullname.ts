export function getInitialNameLetters(fullname: string) {
  const parts = splitByWhiteSpace(fullname)
  if (parts.length === 0) return ''
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

export function formatFullName(fullname: string) {
  const parts = splitByWhiteSpace(fullname)
  if (parts.length === 1) return parts[0]
  const firstName = parts[0]
  const lastName = parts[parts.length - 1]
  return `${firstName} ${lastName}`
}

export function splitByWhiteSpace(text: string) {
  return text.trim().split(/\+s/).filter(Boolean)
}
