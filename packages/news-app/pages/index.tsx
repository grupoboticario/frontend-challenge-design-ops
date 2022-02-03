import React from "react";
import type { NextPage } from "next";

import { Button, Header, HighlitedArticles, Line, Main, ArticlesList, Text, Wrapper } from "../shared/components"
import { brazilTheme } from "../stitches.config";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          <HighlitedArticles title="Headlines" />
          <Line />
          <ArticlesList title="Latest News" />
        </Wrapper>  
      </Main>
    </>
    // <div>
    //   <main>
    //     <nav>
    //       <ul>
    //         <li>
    //           <a href="#" title="Go to home page">Home</a>
    //         </li>
    //         <li>
    //           <a href="#" title="Go to business page">Business</a>
    //         </li>
    //       </ul>
    //     </nav>

    //     <section>
    //       <article>
    //         <figure>
    //           <img src="" alt="" />
    //           <figcaption>Category</figcaption>
    //         </figure>
    //         <div>
    //           <Text as="h1">Title</Text>
    //           <a href="#" title="Go to full article">Read full article</a>
    //         </div>
    //       </article>
    //     </section>
    //   </main>
    // </div>
  );
};

export default Home;
