import React from "react";
import styled from "styled-components";

import { Header } from '../components/atom/Header'
import { EpisodeItem as EpisodeItemComp } from '../components/atom/EpisodeItem'
import { Wrap } from '../components/template/Wrap'
import { Episode as episode } from '../domain'

const Description = styled.p`
  line-height: 1.7rem;
`;

const EpisodeLabel = styled.h2`
  margin: 32px 0 16px 0;
  font-size: 16px;
  color: #444444;
`


type EpisodeListItemType = {
  title: string;
  description: string;
  pubDate: string;
  duration: number;
  uid: string;
};

export default () => (
  <Wrap>
    <Header />
    <Description>
      FAcastは、フロントエンド、車などの雑談を中心に、いま現在フリーランスで仕事をする人達が話す、暇をつぶすためのためのラジオです。
    </Description>
    <EpisodeLabel>エピソード</EpisodeLabel>
    {episode.episodeList.map((item: EpisodeListItemType, index: number) => {
      return <EpisodeItemComp
        key={index}
        uid={item.uid}
        title={item.title}
        description={item.description}
      />
    })}
  </Wrap>
);
