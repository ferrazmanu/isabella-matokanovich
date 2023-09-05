import Link from 'next/link'
import MidiasStyle from './styles'
import { InstagramIcon } from '@components/svgIcons/instagram'
import { FacebookIcon } from '@components/svgIcons/faceboook'
import { EmailIcon } from '@components/svgIcons/email'
import { LinkedinIcon } from '@components/svgIcons/linkedin'

interface MidiaProps {
  color?: string
}

export default function MidiasComponent({ color }: MidiaProps) {
  const redesSociais = [
    {
      link: 'https://www.instagram.com/isamatokanovich/',
      icon: <InstagramIcon color={color} />
    },
    {
      link: 'https://www.facebook.com/isabella.matokanovich',
      icon: <FacebookIcon color={color} />
    },
    {
      link: 'mailto:isabella.matokanovic@gmail.com',
      icon: <EmailIcon color={color} />
    },
    {
      link: 'https://www.linkedin.com/in/isabella-matokanovich/',
      icon: <LinkedinIcon color={color} />
    }
  ]

  return (
    <MidiasStyle>
      <ul className="redes">
        {redesSociais.map(({ link, icon }, index) => {
          return (
            <li key={`link-midias-${index}`}>
              <Link href={link} target="_blank">
                {icon}
              </Link>
            </li>
          )
        })}
      </ul>
    </MidiasStyle>
  )
}
