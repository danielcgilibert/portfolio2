import Button from '@components/ui/Button'
import { RoughNotation } from 'react-rough-notation'
import styles from './Presentation.module.css'

const Presentation = () => {
  return (
    <>
      <article className={styles.presentation}>
        <div>
          <h1>
            ¡Hola! Soy Daniel , un desarrollador especializado en el Front-End.
          </h1>
          <p>
            Lorem ipsum &nbsp;
            <RoughNotation
              type="highlight"
              color="yellow"
              multiline={false}
              show={true}
              animationDelay={200}
              customElement="span"
            >
              dolor sit amet
            </RoughNotation>
            , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est &nbsp;
            <RoughNotation
              type="underline"
              color="#95c4a1"
              show={true}
              animationDelay={1000}
            >
              laborum.
            </RoughNotation>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
            sem integer vitae justo. At tempor commodo ullamcorper a lacus
            vestibulum sed.
          </p>
          <p>
            Condimentum mattis pellentesque id nibh. Egestas sed sed risus
            pretium quam vulputate.{' '}
          </p>
        </div>

        <div>
          <Button>
            <a Target="_blank" href="https://github.com/danielcgilibert">
              Visitar Linkendin
            </a>
          </Button>
          <Button>
            <a Target="_blank" href="https://github.com/danielcgilibert">
              Visitar GitHub
            </a>
          </Button>
        </div>
      </article>
      <img
        className={styles.imageProfile}
        src={'/images/profile/profile.jfif'}
        alt={'profile'}
      />
    </>
  )
}

export default Presentation
