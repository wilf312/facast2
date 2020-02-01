import React from "react";
import Link from "next/link";
import styled from "styled-components";

const config = require('../../public/config.yml')
const { episodeList } = require('../../public/episode.yml')



const Wrap = styled.div`
  padding: 0 16px;
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

const EpisodeLabel = styled.h2`
  margin: 32px 0 16px 0;
`

const Episode = styled.div`
  position: relative;
  a {
    display: block;
    padding: 16px 8px;
    border-bottom: solid 1px gray;
    color: black;
    text-decoration: none;

    span {
      background: rgb(255,255,255);
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(213,213,213,1) 96%, rgba(84,84,84,1) 100%);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
      transition: opacity .25s;
      opacity: 0;
    }
    &:hover span {
      opacity: 1;
    }
  }
`;
const EpisodeTitle = styled.h3`
  font-size: 18px;  
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
    <EpisodeLabel>エピソード</EpisodeLabel>
    {episodeList.map((item: episodeListItem, index: number) => {
      return <Episode key={index}>
        <Link href="/about">
          <a>
            <span></span>
            <EpisodeTitle>{item.uid} : {item.title}</EpisodeTitle>
            <p>{item.description}</p>
          </a>
        </Link>
      </Episode>
    })}
  </Wrap>
);
