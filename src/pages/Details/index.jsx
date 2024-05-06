//import { Fragment } from "react"; //O mesmo que '<> </>'
import { Container } from './styles';

import { Button } from '../../components/Button'

export function Details() {
  // Apenas um elemento pode ser permitido dentro do return
  return(
    <Container>
      <h1>Hello World!</h1>
      <span>Marcos Vinícius</span>

      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}