import { Code, Link } from 'phosphor-react'
import Button from '../Button'
import SimpleGallery from './SimpleGallery'
import { CardStyled } from './styles'

const Card = ({ proyect: { name, cover, hrefCode, hrefWeb } }) => {
  return (
    <CardStyled>
      <SimpleGallery
        galleryID="my-test-gallery"
        images={[
          {
            largeURL: `${cover}`,
            thumbnailURL: `${cover}`,
            width: 1500,
            height: 1200,
          },
        ]}
      />
      <h2>{name}</h2>
      <div className="buttons">
        <Button width={'100%'} height={'30px'}>
          <a Target="_blank" href={hrefCode}>
            <Code size={15} />
          </a>
        </Button>
        {hrefWeb && (
          <Button width={'100%'} height={'30px'}>
            <a Target="_blank" href={hrefWeb}>
              <Link size={15} />
            </a>
          </Button>
        )}
      </div>
    </CardStyled>
  )
}

export default Card
