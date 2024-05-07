//import { Fragment } from "react"; //O mesmo que '<> </>'
import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export function Details() {
  // Apenas um elemento pode ser permitido dentro do return
  return(
    <Container>
      <Header />
      <Button title="Voltar"/>
    </Container>
  )
}