import HealthNavbar from "./HealthNavbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import '../styles/HealthCare.css'
const HealthCare = () => {
   return (
      <div className="healthCare">
   
         <h1 style={{ textAlign: 'center' }} >IoT in Health-care</h1>
         <img height='500px' width='1300px' style={{ marginLeft: '200px' }} src="https://www.karexpert.com/wp-content/uploads/2022/06/IoT-healthcare.jpg" alt="" />
         <h2 style={{ textAlign: 'center' }} >What can IOT do in Healthcare</h2>
         <div className="info">
         <p>Before Internet of Things, patients’ interactions with doctors were limited to visits, and tele and text communications. There was no way doctors or hospitals could monitor patients’ health continuously and make recommendations accordingly.</p>
         <p>Internet of Things (IoT)-enabled devices have made remote monitoring in the healthcare sector possible, unleashing the potential to keep patients safe and healthy, and empowering physicians to deliver superlative care. It has also increased patient engagement and satisfaction as interactions with doctors have become easier and more efficient. Furthermore, remote monitoring of patient’s health helps in reducing the length of hospital stay and prevents re-admissions. IoT also has a major impact on reducing healthcare costs significantly and improving treatment outcomes.

            IoT is undoubtedly transforming the healthcare industry by redefining the space of devices and people interaction in delivering healthcare solutions. IoT has applications in healthcare that benefit patients, families, physicians, hospitals and insurance companies.</p>
         <p> <b>IoT for Patients -</b> Devices in the form of wearables like fitness bands and other wirelessly connected devices like blood pressure and heart rate monitoring cuffs, glucometer etc. give patients access to personalized attention. These devices can be tuned to remind calorie count, exercise check, appointments, blood pressure variations and much more.</p>
         <p>IoT has changed people’s lives, especially elderly patients, by enabling constant tracking of health conditions. This has a major impact on people living alone and their families. On any disturbance or changes in the routine activities of a person, alert mechanism sends signals to family members and concerned health providers.

         </p>
         <p> <b> IoT for Physicians -</b> By using wearables and other home monitoring equipment embedded with IoT, physicians can keep track of patients’ health more effectively. They can track patients’ adherence to treatment plans or any need for immediate medical attention. IoT enables healthcare professionals to be more watchful and connect with the patients proactively. Data collected from IoT devices can help physicians identify the best treatment process for patients and reach the expected outcomes.</p>
         <p> <b> IoT for Hospitals -</b> Apart from monitoring patients’ health, there are many other areas where IoT devices are very useful in hospitals. IoT devices tagged with sensors are used for tracking real time location of medical equipment like wheelchairs, defibrillators, nebulizers, oxygen pumps and other monitoring equipment. Deployment of medical staff at different locations can also be analyzed real time.</p>
         <p> <b> IoT for Health Insurance Companies –</b> There are numerous opportunities for health insurers with IoT-connected intelligent devices. Insurance companies can leverage data captured through health monitoring devices for their underwriting and claims operations. This data will enable them to detect fraud claims and identify prospects for underwriting. IoT devices bring transparency between insurers and customers in the underwriting, pricing, claims handling, and risk assessment processes. In the light of IoT-captured data-driven decisions in all operation processes, customers will have adequate visibility into underlying thought behind every decision made and process outcomes.</p>
         </div>
      </div>
   );
}

export default HealthCare;