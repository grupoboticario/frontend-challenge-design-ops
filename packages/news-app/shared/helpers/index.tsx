export const turnToQueryString = (data: any) => {
  if (!data && !Object.keys(data).length) {
    return '';
  }

  let queryString = '?';

  for (const [key, value] of Object.entries(data)) {
    if (queryString.length <= 1) {
      queryString = `${queryString}${key}=${value}`;
    } else {
      queryString = `${queryString}&${key}=${value}`;
    }
  }

  return queryString;
};
