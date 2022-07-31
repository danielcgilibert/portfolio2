import { Code, Link } from 'phosphor-react'
import Button from '../Button'
import SimpleGallery from './SimpleGallery'
import { CardStyled } from './styles'

const Card = ({ proyect: { name, covers, hrefCode, hrefWeb } }) => {
  return (
    <CardStyled>
      <SimpleGallery
        galleryID="my-test-gallery"
        images={covers.map((cover) => ({
          largeURL: `${cover}`,
          thumbnailURL: `${cover}`,
          width: 850,
          height: 1000,
          bgOpacity: 0.6,
        }))}
      />
      <h2>{name}</h2>
      <div className="buttons">
        <Button width={'100%'} height={'30px'}>
          <a target="_blank" rel="noopener noreferrer" href={hrefCode}>
            <Code size={15} />
          </a>
        </Button>
        {hrefWeb && (
          <Button width={'100%'} height={'30px'}>
            <a target="_blank" rel="noopener noreferrer" href={hrefWeb}>
              <Link size={15} />
            </a>
          </Button>
        )}
      </div>
    </CardStyled>
  )
}

export default Card
