//import { Fragment } from "react"; //O mesmo que '<> </>'
import { Container, Links } from './styles';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  // Apenas um elemento pode ser permitido dentro do return
  return(
    <Container>
      <Header />

      <ButtonText title="Excluir note"/>

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>          
          <li><a href="#">https://www.rocketseat.com.br/</a></li>          
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}