import { Container } from './styles';

export function Button({ title, loading = false, ...rest }) { //props || props.title
    return(
        <Container
            type="button"
            disabled={loading}
            {...rest}
        >
            { loading ? 'Carregando...' : title }
        </Container>
    );
}