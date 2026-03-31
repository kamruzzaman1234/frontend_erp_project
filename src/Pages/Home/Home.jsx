import Banner from "../../components/Banner/Banner";
import Clients from "../../components/Clients/Clients";
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
                
               
        </div>  
    )
}

export default Home;