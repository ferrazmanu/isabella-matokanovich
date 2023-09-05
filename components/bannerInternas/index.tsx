import { BannerInternasStyle } from './styles'
import { Container } from '@shared/styles'

interface BannerProps {
  image: string
  title: string
}

export function BannerInternasComponent({ image, title }: BannerProps) {
  return (
    <BannerInternasStyle>
      <div
        className="bg home"
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <Container>
          <div className="content-banner">
            <div className="spacing-div"></div>

            <div className="banner-title">
              <h1 className="titulo-92-regular">{title}</h1>
            </div>
          </div>
        </Container>
      </div>
    </BannerInternasStyle>
  )
}
