export const truncateString = (description: string, maxLength: number = 80): string => {
  if (description.length <= maxLength) {
    return description;
  }

  return `${ description.substring(0, maxLength) }...`;
}