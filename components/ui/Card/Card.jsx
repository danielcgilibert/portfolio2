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
      <h3>{name}</h3>
      <div className="buttons">
        <Button width={'30%'} height={'30px'}>
          <a Target="_blank" href={hrefCode}>
            Visit
          </a>
        </Button>
        <Button width={'30%'} height={'30px'}>
          <a Target="_blank" href={hrefWeb}>
            Visit
          </a>
        </Button>
      </div>
    </CardStyled>
  )
}

export default Card
