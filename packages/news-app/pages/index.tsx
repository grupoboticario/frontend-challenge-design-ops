import type { NextPage } from "next";

import { styled } from '@stitches/react';

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

const Home: NextPage = () => {
  return <>
    <h1>Hello World!</h1>
    <Button>Click me</Button>
    </>;
};

export default Home;
