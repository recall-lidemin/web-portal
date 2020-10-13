export const getValueEnum = (options: { value: string | number; label: string }[]) => {
  return options.reduce((prev, curr) => {
    const { value: status, label: text } = curr
    prev[status] = { text, status }
    return prev
  }, {} as any)
}

export const getKeyValue = (options: { value: string | number; label: string }[]) => {
  return options.reduce((prev, curr) => {
    prev[curr.value] = curr.label
    return prev
  }, {} as any)
}

export const addEmptyText = (options: any) => {
  if (!options) return options
  if (Array.isArray(options)) {
    options.forEach((option) => {
      addEmptyText(option)
    })
  } else {
    for (const key of Object.keys(options)) {
      if (!options[key] && options[key] !== 0) {
        options[key] = '-'
      }
    }
  }
  return options
}
