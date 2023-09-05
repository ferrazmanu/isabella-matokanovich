import { CloseIcon } from '@components/svgIcons/close'
import { HamburguerMenu, HeaderStyle, Menu } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function HeaderComponent() {
  const [open, setOpen] = useState(false)

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

  const router = useRouter()

  return (
    <HeaderStyle id="header">
      <HamburguerMenu onClick={() => setOpen(true)}>
        <div></div>
        <div></div>
        <div></div>
      </HamburguerMenu>
      <Menu isopen={open}>
        <div className="close" onClick={() => setOpen(false)}>
          <CloseIcon width="20" height="20" color="#fff" />
        </div>
        {menuItems.map(({ link, name }, index) => {
          return (
            <li className="paragraph-24-book" key={`link-menu-${index}`}>
              <Link
                href={link}
                style={{
                  color:
                    router.pathname !== '/contato'
                      ? 'var(--color-1)'
                      : 'var(--color-2)'
                }}
              >
                {name}
              </Link>
            </li>
          )
        })}
      </Menu>
    </HeaderStyle>
  )
}
