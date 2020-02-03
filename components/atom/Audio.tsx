
type AudioProps = {
  src: string
}

export const Audio = (props: AudioProps) => {
  return <audio src={props.src} controls />
}
