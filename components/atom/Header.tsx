import React from "react";
import styled from "styled-components";
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
    <img src="/logo.svg" alt={config.name} />
  </Title>
);
