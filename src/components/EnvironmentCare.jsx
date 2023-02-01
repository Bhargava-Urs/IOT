import HealthNavbar from "./HealthNavbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import '../styles/HealthCare.css'
const EnviCare = () => {
   return (
      <div className="healthCare">
   
         <h1 style={{ textAlign: 'center' }} >IoT in Environment</h1>
         <img height='500px' width='1300px' style={{ marginLeft: '200px' }} src="https://www.goodnet.org/photos/620x0/33464_hd.jpg" alt="" />
         <h2 style={{ textAlign: 'center' }} >What can IOT do in Environment</h2>
         <div className="info">
         <p>The advancement in technology is closely linked to environmental sustainability and most likely, it is perceived that technological advancements have an adverse impact on the environment. Technological innovations have captured human attention in the mid-18th century, since then humans are enabled to use natural resources to a greater extent. Heavier usage of raw materials increased production and the global population have given rise to Co2 emission and resource depletion.</p>
         <p>However, the relationship between the technology and environment has been changed now as the factors that propel sustainability and digital innovation have been disconnected. This environmentally sustainable technological change has been led by a wide range of immersive technologies such as robotics, AI and most importantly IoT. All of these technologies have the potential to change commercial and industrial procedures, along with making them environmentally friendly.</p>
         <p> <b>IoT for Smart Energy Management -</b> Customers nowadays are emphasizing more on sustainable technology. IoT devices help in managing a wide range of electricity supply chains. This includes electric utilities, their energy consumption and supply from both distributors and consumer ends. These smart energy management systems not only help in reducing energy spending but also help in minimizing carbon emissions. As far as the energy usage monitoring is concerned, then it can be observed that the wireless utility meters deliver the energy consumption data at building areas, individual and industrial assets. Having these data-driven insights help companies and individuals to monitor their energy consumption and optimize it to achieve environmental sustainability.</p>
         
         <p> <b> IoT for Air Quality Monitoring -</b> Air pollution is one of the emerging global concerns. As per the report published by World Health Organization, 7 billion premature death occurs worldwide due to air pollution outside and inside the home. The pollutants in the air are also lethal for human health. Poor quality air has significant ramifications on food and vegetation, renewable energy, weather and water. However, the innovative and low-cost IoT sensors have enabled the municipalities to monitor the air quality index. In this way also the root cause of air pollution is tracked in real-time and municipalities implement corrective measures to reduce air pollution which makes the environment clean for human beings.</p>
         <p> <b> IoT for  Fleet Management -</b> The focus on different fuel types and their impact on the environment and air quality has been increased significantly. Governments all around the globe are also emphasizing reducing CO2 emissions. This is putting more pressure on the fleet operators to optimize their fleet management activities and make them environmentally friendly. Vehicle health, driver behavior, idle time, fuel consumption and location all play a vital role in calculating the total emission produced by the fleet. The critical insight into these metrics can be accessed with the help of wireless IoT sensors equipped in the fleets. The data from the sensors can provide useful insight into vehicle maintenance, improve driver behavior and optimize routes. For instance, IoT sensors provide a real-time location for more responsive and accurate route planning. This ultimately reduces the harmful emission resulting in the time spent by the vehicle idling in traffic.</p>

         </div>
      </div>
   );
}

export default EnviCare;