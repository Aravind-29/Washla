import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHome, faDoorOpen, faSprayCanSparkles} from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak,} from '@fortawesome/free-brands-svg-icons'

import Clean from '../images/Cleaning.jpg'
import './service.css'

export default function News (){
    return(
      
        <div className="bg-white py-02 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
       <div className="mx-auto max-w-2xl lg:text-center">
         <h2 className="text-base/7 font-extrabold text-gray-400">WHY CHOOSE US</h2>
         <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
           Recent News
         </p>
         <p className="mt-4 text-lg/8 text-gray-600">
           We specialise in intelligent & effective search and belives in the power of partnerships to grow business
         </p>
       </div>
       <div class="bg-white p-6">
     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

   <div class="flex flex-col items-center">
     <Card
     name="Temporary Ruling Issued"
     para = "Washla has met the demands of a growing world cleaning tremendous."
     personname="Maratha Sara"
     postion="Washla CEO"
     image="https://img.freepik.com/free-photo/professional-cleaning-service-person-using-steam-cleaner-office_23-2150520602.jpg?t=st=1731311134~exp=1731314734~hmac=299392d6758c4d26798ea1278439889fd79060210d7acb5535e309d2fcd7685a&w=1060"
     personurl="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1731310978~exp=1731314578~hmac=e153258153e5847bfe3dcf7778abf61dd3811352088243567428d822f769b4ad&w=826"
     number="10"
     month="NOV"/>
     
   </div>
   <div class="flex flex-col items-center">
     <Card
     name="The Expands California"
     para = "Welcomed and every sed ut perspiciatis unde omnis iste natus."
     personname="Laura Jones"
     postion="Accounting"
     image="https://img.freepik.com/free-photo/person-taking-care-office-cleaning_23-2149374462.jpg?uid=R132341305&ga=GA1.1.1431285339.1731164589&semt=ais_hybrid"
     personurl="https://img.freepik.com/free-photo/bearded-young-self-confident-male-with-pleasant-appearance-dressed-blue-shirt-looks-directly-isolated-white-wall-handsome-man-freelancer-thinks-about-work-indoor_273609-16089.jpg?t=st=1731310918~exp=1731314518~hmac=199f49f065efa6952ef18fc721a6863f0a0cffbbb858ac7215df68fb6ece4c96&w=1060"
     number="11"
     month="NOV"/>
   </div>
   <div class="flex flex-col items-center">
     <Card
     name="Temporary Ruling Issued"
     para = "Washla has met the demands of a growing world. The Cleaning"
     personname="Matt Ryan"
     postion="Lawyer"
     image="https://img.freepik.com/free-photo/man-cleaning-his-home_23-2148119224.jpg?uid=R132341305&ga=GA1.1.1431285339.1731164589&semt=ais_hybrid"
     personurl="https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?uid=R132341305&ga=GA1.1.1431285339.1731164589&semt=ais_hybrid"
     number="12"
     month="NOV"/>
   </div>

   
   
 </div>
</div>

       
     </div>
   </div>
      
    )
}

function Card ({name, para, personname, postion,personurl,image,number,month}){
    return(
<div class="min-h-screen flex justify-center items-center">
  <div class="container flex justify-center">
    <div class="max-w-sm ">
      <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img class="rounded-t-lg" src={image} alt="" />
        <div class="py-12 px-8 rounded-lg bg-white">
        <p class="text-gray-700 tracking-wide">CLEANING</p>
          <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{name}</h1>
          <p class="text-gray-700 tracking-wide">{para}</p>
          <div class="flex items-center mt-4">
                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src={personurl}/>
        
                    <div class="pl-3">
                        <div class="font-medium">
                            {personname}
                        </div>
                        <div class="text-gray-600 text-sm">
                            {postion}
                        </div>
                    </div>
                </div>
        </div>
        <div class="absolute top-0 right-0 py-2 px-4 bg-sky-500 text-center text-bold">
          <span class=" text-white">{number} <br/>{month}</span>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}