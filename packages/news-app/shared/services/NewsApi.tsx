import httpRequest from './http-request/';

const getTopHeadlines = ({ queryString }: { queryString?: any }) => {
  return httpRequest({
    method: 'get',
    url: `/top-headlines${queryString}`,
  });
};

const getHeadlineSources = () => {
  return httpRequest({
    method: 'get',
    url: `/top-headlines/sources`,
  });
};

const getEveryNews = ({ queryString }: { queryString?: any }) => {
  return httpRequest({
    method: 'get',
    url: `/everything${queryString}`,
  });
};

export { getTopHeadlines, getHeadlineSources, getEveryNews };
