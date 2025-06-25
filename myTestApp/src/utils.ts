export const formatClientName = (fullName: string): string => {
  if (!fullName) {
    return ""
  }
  const parts = fullName.trim().split(" ")
  if (parts.length < 2) {
    return parts[0]
  }
  const lastName = parts[0]
  const firstNameInitial = parts[1].charAt(0)
  return `${lastName} ${firstNameInitial}.`
}
