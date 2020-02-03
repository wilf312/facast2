import styled from "styled-components";

const StyledAudio = styled.audio`
  width: 100%;
  min-width: 400px;
`

type AudioProps = {
  src: string
}

export const Audio = (props: AudioProps) => {
  return <StyledAudio src={props.src} controls />
}
