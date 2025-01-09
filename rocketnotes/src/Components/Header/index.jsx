import { Container, Profile, Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri"

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
             <img
             src="https://github.com/pedrocosta-7.png"
             alt="Foto do usuario"
             />
             <div>
                <span>Bem-Vindo</span>
                <strong>Pedro Costa</strong>
            </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}