import Card from '@components/ui/Card'
import { proyects } from '@constants/proyects'
import { SwiperSlide } from 'swiper/react'
import { ProyectsStyled, SwipperStyled } from './styles'

const Projects = () => {
  return (
    <>
      <ProyectsStyled>
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
      </ProyectsStyled>
    </>
  )
}

export default Projects
