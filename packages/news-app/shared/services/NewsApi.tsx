import httpRequest from './http-request/';

const getTopHeadlines = ({ queryString }: { queryString?: any }) => {
  return httpRequest({
    method: 'get',
    url: `/top-headlines${queryString}`,
  });
};

const getHeadlineSources = ({ queryString }: { queryString?: any }) => {
  return httpRequest({
    method: 'get',
    url: `/top-headlines/sources${queryString}`,
  });
};

const getEveryNews = ({ queryString }: { queryString?: any }) => {
  return httpRequest({
    method: 'get',
    url: `/everything${queryString}`,
  });
};

export { getTopHeadlines, getHeadlineSources, getEveryNews };
