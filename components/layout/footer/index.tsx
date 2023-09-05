import { FooterStyle } from './styles'
import { Container } from '@shared/styles'
import Link from 'next/link'
import Image from 'next/image'
import MidiasComponent from '@components/midias'

export function FooterComponent() {
  const menuItems = [
    {
      link: '/',
      name: 'início'
    },
    {
      link: '/sobre',
      name: 'sobre mim'
    },
    {
      link: '/carreira',
      name: 'carreira'
    },
    {
      link: '/criacoes',
      name: 'criações'
    },
    {
      link: '/contato',
      name: 'contato'
    }
  ]

  return (
    <FooterStyle>
      <a className="scroll-up" href="#header">
        <span className="titulo-24-book">voltar ao topo</span>
        <Image
          src="/images/svgs/up-arrow-black.svg"
          alt="seta de scroll"
          fill
        />
      </a>
      <Container className="container">
        <div className="box-footer">
          <ul className="menu">
            {menuItems.map(({ link, name }, index) => {
              return (
                <li className="paragraph-24-light" key={`link-footer-${index}`}>
                  <Link href={link}>{name}</Link>
                </li>
              )
            })}
          </ul>

          <MidiasComponent color={'#fff'} />
        </div>
      </Container>
    </FooterStyle>
  )
}
