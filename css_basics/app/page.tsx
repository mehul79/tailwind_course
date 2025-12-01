import Container from "./components/container";
import NavBar from "./components/navBar";


export default function Home(){
  return(
   <div className="layout">
     <Container>
       <NavBar />
     </Container>
   </div>
  )
}