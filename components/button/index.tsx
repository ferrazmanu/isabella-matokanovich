import { ButtonStyle } from './styles'

interface ButtonInfos {
  href: string
  text: string
}

export function ButtonComponent({ href, text }: ButtonInfos) {
  return (
    <ButtonStyle href={href} className="bt">
      <span className="paragraph-24-book">{text}</span>
    </ButtonStyle>
  )
}
