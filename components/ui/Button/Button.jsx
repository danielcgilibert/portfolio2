// import styles from './Button.module.css'
import { ButtonStyled } from './styles'

const Button = ({ width, height, children }) => {
  return (
    <ButtonStyled width={width} height={height}>
      {children}
    </ButtonStyled>
  )
}

export default Button
