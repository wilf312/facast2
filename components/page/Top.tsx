import React from "react";
import Link from "next/link";
import styled from "styled-components";

const config = require('../../public/config.yml')
const { episodeList } = require('../../public/episode.yml')



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
const Episode = styled.div`
  
`;

type episodeListItem = {
  title: string;
  description: string;
  pubDate: string;
  duration: number;
  uid: string;
};

export const Top = () => (
  <Wrap>
    <Title>
      <img src="/logo.svg" alt={config.name} />
    </Title>
    <Description>
      FAcastは、フロントエンド、車などの雑談を中心に、いま現在フリーランスで仕事をする人達が話す、暇をつぶすためのためのラジオです。
    </Description>
    <h2>エピソード</h2>
    {episodeList.map((item: episodeListItem) => {
      return <Episode>
        <span>{item.uid}</span>
        <span>{item.title}</span>

        <p>{item.description}</p>

      </Episode>
    })}
    <Link href="/about">
      <a>っっっｂ</a>
    </Link>
  </Wrap>
);
