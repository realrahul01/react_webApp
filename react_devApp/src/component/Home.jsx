import Card from "./Card";
import arrayData from "../db";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";




const Home=()=>{


    

    return(
        <section>
            <div className="upper_main">
                <div className="text">
                <div> 
                    <span className="sm">Hi,</span> <span>I am John Deo</span>
                </div>
                <div>
                    <p className="sm">FULL STACK DEVELOPER</p>
                </div>
                </div>
            </div>
            <div className="work_section">
                <p>WORK, I CAN DO FOR <span>YOU</span></p>
            </div>


            <div className="card_section">
                {arrayData.map((x,index)=>(
                    <Card
                        className="cards"
                        key={index}
                        image={x.img}
                        title={x.title}
                        description1={x.description1}
                        description2={x.description2}
                    />
                ))}
            </div>
            <div className="more_various_section">
                <Contact/>
                <About/>
            </div>
            <div>
                <Footer/>
            </div>
        </section>
    )
}

export default Home;