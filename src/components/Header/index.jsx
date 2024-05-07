import { Container, Profile } from './styles';

export function Header() {
    return(
        <Container>
            <Profile>
                <img 
                    src="https://github.com/viniccius-dev.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Marcos Vinícius</strong>
                </div>
            </Profile>
        </Container>
    );
}