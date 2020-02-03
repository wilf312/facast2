import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Sp } from '../../domain'

const config = require('../../public/config.yml')

const Title = styled.h1`
  text-align: center;
  > img {
    width: 180px;

    ${Sp(`width: 120px;`)}
  }
`;
export const Header = () => (
  <Title>
    <Link href="/" >
      <a>
        <img src="/logo.svg" alt={config.name} />
      </a>
    </Link>
    {/* <button onClick={share}>Podcastへシェア</button> */}
  </Title>
);
