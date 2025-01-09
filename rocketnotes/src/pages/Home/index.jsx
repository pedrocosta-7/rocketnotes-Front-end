import { Container, Brand, Menu, Search, Content, NewNote}  from "./styles"
import { Header } from "../../Components/Header"
import { ButtonText } from "../../Components/ButtonText"
import { FiPlus } from 'react-icons/fi'
import { Input } from "../../Components/input"
import { Note } from "../../Components/Note"
import { Section } from "../../Components/Section/index"
import { Link } from "react-router-dom"



export function Home(){
return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
      <li><ButtonText title = "Todos" isactive></ButtonText></li>
      <li><ButtonText title = "FrontEnd"></ButtonText></li>
      <li><ButtonText title = "React"></ButtonText></li>
      <li><ButtonText title = "NodeJs"></ButtonText></li>
      
      </Menu>

      <Search>
      <Input placeholder="Pesquisar pelo título"/>
      </Search>

      <Content>
      <Section title="Minhas Notas"/>
      <Note data={{title:"React Modal", tags:[{id:"1", name:"Nodejs"}, {id:"2", name:"Express"}]}}/>
      </Content>
      <NewNote to="/new">
      
      <FiPlus/>
      Criar Nota
      
      </NewNote>
    </Container>

)


}