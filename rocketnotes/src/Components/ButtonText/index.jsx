import { Container } from "./styles";

export function ButtonText({ title, $isactive = false}){
return(
    <Container 
     type="button"
     $isactive={$isactive.toString()}>
       {title}
    </Container>
)
}

