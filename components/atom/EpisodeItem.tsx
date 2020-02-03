import React from "react";
import Link from "next/link";

import styled from "styled-components";

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

type EpisodeItemProps = {
  uid: string,
  title: string,
  description: string
}
export const EpisodeItem = (props: EpisodeItemProps) => {
  return <Episode >
    <Link as={`/${props.uid}`} href="/article" >
      <a>
        <span></span>
        <EpisodeTitle>{props.uid} : {props.title}</EpisodeTitle>
        <EpisodeBody>{props.description}</EpisodeBody>
      </a>
    </Link>
  </Episode>
}