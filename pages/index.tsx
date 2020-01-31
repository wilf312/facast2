import React from "react";
import Link from "next/link";

import styled from "styled-components";

const Test = styled.div`
  background: yellow;
`;

const Thing: React.FC<{ msg: string }> = props => {
  return <div>{props.msg}</div>;
};

export default () => (
  <Test>
    Hello World. <Thing msg="hello" />
    <Link href="/about">
      <a>test</a>
    </Link>
  </Test>
);
