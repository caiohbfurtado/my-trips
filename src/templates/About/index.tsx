import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          numquam eveniet natus voluptas iure perferendis praesentium, sunt
          corrupti veritatis porro quidem voluptate, culpa nesciunt obcaecati.
          Id iure omnis recusandae minima.
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
