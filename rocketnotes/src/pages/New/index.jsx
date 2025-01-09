import { Textarea } from "../../Components/Textarea";
import { Noteitem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section"
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button"
import { Input } from "../../Components/input";
import { Container } from "./styles";
import { Form } from "./styles";
import { Link } from "react-router-dom";

export function New(){
    return(
       <Container>
       <Header/>
       <main>
       <Form>
       <header>
       <h1>Criar Nota</h1>
       <Link to="/">voltar</Link>
       </header>
       <Input placeholder="Título"></Input>
       <Textarea placeholder="Observações"/>
       <Section title="Links úteis">
            <Noteitem/>
            <Noteitem isNew/>
       </Section>
       <Section title='Marcadores'>
        <div className="tags">
           <Noteitem/>
           <Noteitem isNew/>
        </div>

       </Section>
            <Button title="Salvar"/>
       
       </Form>
       </main>
       </Container>
    )
}