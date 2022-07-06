import Card from '@components/ui/Card'
import { proyects } from '@constants/proyects'
import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Proyects.module.css'

const SwipperStyled = styled(Swiper)`
  width: 100%;
  cursor: grab;
  padding: 3px 3px;

  &:active {
    cursor: grabbing;
  }
`
const Projects = () => {
  return (
    <>
      <article className={styles.projects}>
        <h1>Proyectos</h1>
        <p>Algunos de los proyectos que desarrollo:</p>
        <SwipperStyled
          slidesPerView={4}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
        >
          {proyects.map((proyect) => (
            <SwiperSlide key={proyect.name}>
              <Card proyect={proyect} />
            </SwiperSlide>
          ))}
        </SwipperStyled>
      </article>
    </>
  )
}

export default Projects
