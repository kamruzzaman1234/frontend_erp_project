import Banner from "../../components/Banner/Banner";
import Clients from "../../components/Clients/Clients";
import Contact from "../../components/Contact/Contact";
import Feature from "../../components/Feature/Feature";
import Service from "../../components/Service/Service";
import WorkingArea from "../../components/WorkingArea/WorkingArea";

const Home = ()=>{
    return(
        <div className="">
                <Banner></Banner>
                <Feature></Feature>
                <WorkingArea></WorkingArea>
                <Service></Service>
                <Clients></Clients>
                <Contact></Contact>
               
        </div>  
    )
}

export default Home;