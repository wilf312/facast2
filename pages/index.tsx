import React from "react";
import Link from "next/link";

import styled from "styled-components";

const Wrap = styled.div`
  padding: 0 2rem;
`;
const Title = styled.h1`
  text-align: center;
  > img {
    width: 200px;
  }
`;
const Description = styled.p`
  line-height: 1.7rem;
`;

export default () => (
  <Wrap>
    <Title>
      <img src="/logo.svg" alt="FAcast" />
    </Title>
    <Description>
      FAcastは、フロントエンド、車などの雑談を中心に、いま現在フリーランスで仕事をする人達が話す、暇をつぶすためのためのラジオです。
    </Description>
    <h2>エピソード</h2>
    <Link href="/about">
      <a>っっっｂ</a>
    </Link>
  </Wrap>
);
