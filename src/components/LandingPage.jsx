import '../styles/LandingPage.css'
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    let navigate = useNavigate()
    let click1 = (e) =>{
        e.preventDefault();
        navigate('/healthcare')
    }
    let click2 = (e) =>{
        e.preventDefault();
        navigate('/safety')
    }
    let click3 = (e) =>{
        e.preventDefault();
        navigate('/environment')
    }
    return ( 
        <div className="landingPage">
            <div className="heading">
            <h1>Welcome To The World of Automation </h1>
            <h2>Advancement in Every Step</h2>
            </div>
            <div className="services">
            <div className="health">
                < img height='150px' width='200px' src="https://mobisoftinfotech.com/resources/wp-content/uploads/2018/08/IoT-in-healthcare.png" alt="" />
                <h3>IOT In Health</h3>
                <button onClick={click1}>Check Here</button>
            </div>
            <div className='safety'>
                < img height='150px' width='200px' src="https://control.com/uploads/articles/IIoTComponents_1featured.jpg" alt="" />
                 <h3>IOT in Induatrial Safety</h3>
                 <button onClick={click2}>Check Here</button>
            </div>
            <div className="environment">
                < img height='150px' width='200px' src="https://www.techiexpert.com/wp-content/uploads/2019/09/Green-Internet-of-Things.jpg" alt="" />
                <h3>IOT in Environment</h3>
                <button onClick={click3} >Check Here</button>
            </div>
            </div>
        </div>
     );
}
 
export default LandingPage;