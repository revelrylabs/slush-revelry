export function getErrors(errors, key) {
  return errors && errors[key] ? errors[key][0] : ''
}

export function errorExtractor(errors) {
  return (key) => getErrors(errors, key)
}
