import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { Header } from '../atom/Header'

const { episodeList } = require('../../public/episode.yml')

const Wrap = styled.div`
  padding: 0 16px;
`;
const Description = styled.p`
  line-height: 1.7rem;
`;

const EpisodeLabel = styled.h2`
  margin: 32px 0 16px 0;
  font-size: 16px;
  color: #444444;
`

const Episode = styled.div`
  position: relative;
  a {
    display: block;
    padding: 16px 8px;
    border-bottom: solid 1px #e8e8e8;
    color: black;
    text-decoration: none;

    span {
      background: rgb(255,255,255);
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(213,213,213,1) 96%, rgba(255,255,255,1) 100%);
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
  font-size: 20px;
  color: #6f6f6f;  
`;
const EpisodeBody = styled.p`
  line-height: 1.4em;
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
    <Header />
    <Description>
      FAcastは、フロントエンド、車などの雑談を中心に、いま現在フリーランスで仕事をする人達が話す、暇をつぶすためのためのラジオです。
    </Description>
    <EpisodeLabel>エピソード</EpisodeLabel>
    {episodeList.map((item: episodeListItem, index: number) => {
      return <Episode key={index}>
        <Link as={`/${item.uid}`} href="/page" >
          <a>
            <span></span>
            <EpisodeTitle>{item.uid} : {item.title}</EpisodeTitle>
            <EpisodeBody>{item.description}</EpisodeBody>
          </a>
        </Link>
      </Episode>
    })}
  </Wrap>
);
