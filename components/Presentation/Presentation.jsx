import Button from '@components/ui/Button'
import splitbee from '@splitbee/web'
import { useState } from 'react'
import { ContainerPr, ImageProfileStyled, PresentationStyled } from './styles'

const Presentation = () => {
  const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <ContainerPr>
      <PresentationStyled>
        <div>
          <h1>
            ¡Hola! Soy Daniel , un desarrollador especializado en el Front-End.
          </h1>

          <ImageProfileStyled
            src={'/images/profile/profile.jfif'}
            alt={'profile'}
            className="img-mobile"
          />

          <p>
            Intento siempre desarrollar aplicaciones web simples,eficientes y
            atractivas para el usuario.
          </p>
          <p>
            Me considero una persona autodidacta, trabajadora y siempre con
            ambición para seguir formandome como profesional de este apasionante
            mundo del desarrollo.
          </p>
          <p>
            Por otro lado, me encanta el mundo de la música llevo varios años
            tocando el fantastico intrumento que es la bateria🥁, que también me
            sirve para desconectar un poco del mundo de la programación cuando
            algo se me atasca.
          </p>
          {/* <Accordion
            accordionOpen={accordionOpen}
            onClick={() => setAccordionOpen(!accordionOpen)}
          >
            Tegnologias
            <ArrowCircleDown size={20} weight="regular" />
          </Accordion>
          {accordionOpen && (
            <Technologies>
              <p>
                <Atom size={20} weight="thin" />
                Front-End :{' '}
                <RoughNotation
                  type="highlight"
                  color="#936afa1f"
                  multiline={false}
                  show={true}
                  animationDelay={600}
                  customElement="span"
                >
                  ReactJS, NextJS, Jquery
                </RoughNotation>
              </p>
              <p>
                <FileCss size={20} weight="thin" />
                CSS :{' '}
                <RoughNotation
                  type="highlight"
                  color="#70f79b34"
                  multiline={false}
                  show={true}
                  animationDelay={1000}
                  customElement="span"
                >
                  Emotion, Styled-components, Sass, bootstrap, TailwindCSS
                </RoughNotation>
              </p>
              <p>
                <SelectionBackground size={20} weight="thin" />
                Backend :{' '}
                <RoughNotation
                  type="highlight"
                  color="#2fb9f029"
                  multiline={false}
                  show={true}
                  animationDelay={1400}
                  customElement="span"
                >
                  NodeJS, PHP
                </RoughNotation>
              </p>
              <p>
                <Cube size={20} weight="thin" />
                DevOps :{' '}
                <RoughNotation
                  type="highlight"
                  color="#f2f8352b"
                  multiline={false}
                  show={true}
                  animationDelay={1600}
                  customElement="span"
                >
                  {' '}
                  Docker, Nginx, Apache...
                </RoughNotation>
              </p>
              <p>
                <Database size={20} weight="thin" />
                Bases de datos :{' '}
                <RoughNotation
                  type="highlight"
                  color="#e0b1cb2f"
                  multiline={false}
                  show={true}
                  animationDelay={2000}
                  customElement="span"
                >
                  Mysql, MongoDB
                </RoughNotation>
              </p>
            </Technologies>
          )} */}
        </div>

        <div>
          <Button background={'black'}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/danielcgilibert"
              onClick={() => splitbee.track(' Linkendin')}
            >
              Visitar Linkendin
            </a>
          </Button>
          <Button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/danielcgilibert"
              onClick={() => splitbee.track(' Github')}
            >
              Visitar GitHub
            </a>
          </Button>
        </div>
      </PresentationStyled>

      <ImageProfileStyled
        src={'/images/profile/profile.jfif'}
        alt={'profile'}
        className="img-desktop"
      />
    </ContainerPr>
  )
}

export default Presentation
