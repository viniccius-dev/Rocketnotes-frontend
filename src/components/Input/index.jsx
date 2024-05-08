import { Container } from './styles';

export function Input({icon: Icon, ...rest}) {
    {/ * O operador '&&' irá verificar se o icon existe, se sim vai colocar, caso contrário será ignorado */}
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    );
}