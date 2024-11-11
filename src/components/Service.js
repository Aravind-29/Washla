import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDoorOpen, faSprayCanSparkles} from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak,} from '@fortawesome/free-brands-svg-icons'

import Clean from '../images/Cleaning.jpg'
import './service.css'

export default function Service (){
    return(
      
      <div className="background py-10 sm:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-extrabold text-white">WHY CHOOSE US</h2>
          <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Our Great Service
          </p>
          <p className="mt-6 text-lg/8 text-gray-600  text-white">
            Restoring the beauty and freshness of all your upholstered fabrics and take the work out of housework for you.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-12  py-5">
    <div class="bg-sky-500  opacity-80 p-10  shadow-md text-left p-10 min-w-[230px]">
    <FontAwesomeIcon icon={faHome} style={{ color: "white" }} size="3x" />
 
      <h2 class="text-lg font-bold text-gray-800 py-2 sm:justify-center text-white">Home Cleaning</h2>
      <p class="text-gray-600 text-white">Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through.</p>
    </div>
    
    <div class="bg-sky-500  opacity-80 p-10  shadow-md text-left p-10 min-w-[230px]">
    <FontAwesomeIcon icon={faDoorOpen} style={{ color: "white" }} size="3x" /> 
      <h2 class="text-lg font-bold text-gray-800 py-2 text-white">Windows Cleaning</h2>
      <p class="text-gray-600 text-white">Our Aim is to Keep the House Clean- Your Aim Will Help! the through Digital Innovation World Summit.</p>
    </div>
   
    <div class="bg-sky-500 opacity-80 p-10  shadow-md text-left p-10 min-w-[230px]">
    <FontAwesomeIcon icon={faSprayCanSparkles} style={{ color: "white" }} size="3x"/> 
      <h2 class="text-lg font-bold text-gray-800 py-3 text-white">Office Cleaning</h2>
      <p class="text-gray-600 text-white">Both of us take a lot of time in getting cleaned and beautified Clean Home Professional Service</p>
    </div>
  </div>

        
      </div>
    </div>
      
    )
}