//import { Fragment } from "react"; //O mesmo que '<> </>'
import { Container, Links, Content } from './styles';

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

      <main>
        <Content>

          <ButtonText title="Excluir nota"/>

          <h1>
            Introdução ao React
          </h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia porttitor nibh. Nam maximus ut lectus vel varius. Nunc lectus nulla, condimentum quis cursus nec, luctus vel tortor. Morbi rutrum, tellus et malesuada pulvinar, mi est accumsan magna, scelerisque scelerisque lectus lectus ac enim. Fusce feugiat risus non nisl lacinia vulputate. Fusce vehicula lacinia congue. Nam elementum quam sit amet odio lobortis, at vehicula ex imperdiet.</p>

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
      
        </Content>
      </main>
    </Container>
  )
}