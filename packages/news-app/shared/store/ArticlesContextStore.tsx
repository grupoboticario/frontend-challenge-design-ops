/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useEffect } from 'react';
import { useLocalStorage } from '../hooks/UseLocalStorage';

const ArticleStateContext = React.createContext<any>(null!);

const ArticleDispatchContext = React.createContext<any>(null!);

const STORAGE_KEY = 'WorldNews.Front';

const initialState = {
  language: {
    name: null,
  },
  articles: [
    {
      urlToImage: null,
      url: null,
      title: null,
    },
  ],
  search: [
    {
      text: null,
    },
  ],
};

function ArticleReducer(state: any, action: any) {
  switch (action.type) {
    case 'saveLanguage': {
      return {
        ...state,
        language: {
          ...state.language,
          ...action.value,
        },
      };
    }
    case 'saveArticles': {
      return {
        ...state,
        articles: {
          ...state.articles,
          ...action.value,
        },
      };
    }
    case 'saveSearch': {
      return {
        ...state,
        search: {
          ...state.search,
          ...action.value,
        },
      };
    }

    default: {
      return state;
    }
  }
}

function ArticleProvider({ children }: { children: any }) {
  const [storedValue, setValue] = useLocalStorage(STORAGE_KEY, initialState);
  const [state, dispatch] = useReducer(ArticleReducer, storedValue);

  useEffect(() => {
    setValue(state);
  }, [state]);
  return (
    <ArticleStateContext.Provider value={state}>
      <ArticleDispatchContext.Provider value={dispatch}>{children}</ArticleDispatchContext.Provider>
    </ArticleStateContext.Provider>
  );
}

function useArticleState() {
  const context = React.useContext(ArticleStateContext);

  if (context === undefined) {
    throw new Error('useArticleState must be used within a UserProvider');
  }

  return context;
}

function useArticleDispatch() {
  const context = React.useContext(ArticleDispatchContext);

  if (context === undefined) {
    throw new Error('useArticleDispatch must be used within a UserProvider');
  }

  return context;
}

export { ArticleProvider, useArticleState, useArticleDispatch };
