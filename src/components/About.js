import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSparkles,faBroom, faHouse} from '@fortawesome/free-solid-svg-icons'

export default function About(){
    return(
        
<div class="bg-[#01b2e4]  sm:p-8 md:p-4 lg:p-8 space-y-4 w-full mx-auto">

<div class="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 px-2 sm:px-8 md:px-20">
         <div class="flex flex-col items-center p-6 space-y-1 text-center bg-gray-100  ">
             <FontAwesomeIcon icon={faHandSparkles} style={{ color: "#00b4e2" }} size="3x" />
            <h2 class="text-lg font-bold text-gray-800 p-2 sm:justify-center">Professional Cleaning</h2>
            <p class="text-gray-600">Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through.</p>
         </div>

         <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100  ">
            <FontAwesomeIcon icon={faBroom} style={{color: "#00b4e2",}} size="3x" /> 
            <h2 class="text-lg font-bold text-gray-800 p-2">Fast and efficient</h2>
            <p class="text-gray-600">Our Aim is to Keep the House Clean- Your Aim Will Help! the through Digital Innovation World Summit.</p>
         </div>

         <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100  ">
             <FontAwesomeIcon icon={faHouse} style={{color: "#00b4e2",}} size="3x"/> 
              <h2 class="text-lg font-bold text-gray-800 p-2">Renew your look</h2>
             <p class="text-gray-600">Both of us take a lot of time in getting cleaned and beautified Clean Home Professional Service</p>
         </div>
     </div>
     <div class="bg-[#01b2e4]  md:p-12 space-y-4 w-full mx-auto">

<div class="grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 sm:px-12 md:px-8 lg:px-12">
         <div class="flex flex-col items-center p-6 sm:p-6 md:p-2 space-y-3 text-left">
            <p><span class='text-black font-extrabold font-sans text-4xl '>A Clean House is a Happy Place! </span> 
            <br/>
            <span class="font-bold  text-white">Washla has met the demands of a growing world.</span>
            </p>
         </div>

         <div class="flex flex-col items-center p-6 sm:p-6 md:p-2 space-y-3 text-left ">
             <div class=" rounded-md  text-left  text-white ">
              <p class='leading-7'><span class="font-bold text-2xl" >W</span>ashla customers has a tremendous opportunity to answer the call of logistic needs across the globe. Has 26 affiliated state soybean associations representing 30 soybean-producing state.</p>
              </div>
         </div>

         <div class="flex flex-col items-center p-6 sm:p-6 md:p-2 space-y-3 text-left">
              <div class="rounded-md  text-left  text-white">
              World's leading non-asset-based supply chain management companies, we design and implement industry-leading. We specialise in intelligent & effective search and believes in the power of partnerships to grow business.    </div>
              </div>
         </div>
     </div>

</div>
    )
}