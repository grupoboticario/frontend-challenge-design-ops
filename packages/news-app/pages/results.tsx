import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { ResultArticlesList, Text, Wrapper } from '../shared/components';

import { NewsApi } from '../shared/services';
import { turnToQueryString } from '../shared/helpers';
import Layout from './_layout';
import { useArticleState } from '../shared/store';

const Business: NextPage = () => {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const { search, language } = useArticleState();

  useEffect(() => {
    renderSearch();
  }, [search]);

  const renderSearch = async () => {
    const response = await NewsApi.getEveryNews({
      queryString: turnToQueryString({
        q: search.text,
        language: language.name,
        pageSize: 6,
      }),
    });

    setSearchResult(response.data.articles);
  };

  return (
    <Layout>
      <Wrapper>
        <Text as="h1" css={{ marginBottom: '$9' }}>
          Results for: {search.text}
        </Text>
        {searchResult.length == 0 && <Text as="p">Try to search for another terms</Text>}
      </Wrapper>
      <ResultArticlesList articles={searchResult} />
    </Layout>
  );
};

export default Business;
