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
          slidesPerView="auto"
          slidesPerGroup={1}
          breakpoints={{
            320: {
              slidesPerView: 1.3,
              spaceBetween: 40,
            },

            360: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },

            640: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 4.2,
              spaceBetween: 30,
            },

            2500: {
              slidesPerView: 5.7,
              spaceBetween: 30,
            },
          }}
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
