import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { ResultArticlesList } from '../shared/components';
import { brazilTheme, portugalTheme } from '../stitches.config';

import { NewsApi } from '../shared/services';
import { turnToQueryString } from '../shared/helpers';
import Layout from './_layout';
import { useArticleState } from '../shared/store';

const Business: NextPage = () => {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const { search, language } = useArticleState();

  useEffect(() => {
    renderSearch();
  }, []);

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
      <ResultArticlesList title="Results" articles={searchResult} />
    </Layout>
  );
};

export default Business;
