export const queryString = (params: any) => {
  return Object.keys(params)
    .map((key) => key + '=' + encodeURI(params[key]))
    .join('&')
}
