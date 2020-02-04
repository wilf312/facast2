import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Sp } from '../../domain'

const config = require('../../public/config.yml')

const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const StyledLogo = styled.img`
  width: 180px;
  ${Sp(`width: 120px;`)}
`;

const StyledRss = styled.img`
  width: auto;
  height: 24px;
`;
const StylediTunes = styled(StyledRss)`
  margin-left: 8px;
`;


export const Header = () => (
  <Title>
    <Link href="/" >
      <a>
        <StyledLogo src="/logo.svg" alt={config.name} />
      </a>
    </Link>
    <div>
      <a href="/feed.xml" target="_blank" rel="noopener"><StyledRss src="/rss.svg" alt={'RSSを登録'} /></a>
      <a href="https://itunes.apple.com/jp/podcast/facast/id1440324892?mt=2" target="_blank"><StylediTunes src="/apple-itunes.svg" alt={'iTunesで購読'} /></a>
    </div>
  </Title>
);
