import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTeamspeak,} from '@fortawesome/free-brands-svg-icons'
import { faTeampeak,  faPhone , faCalendar, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Features (){
    return(
        <div className="bg-white py-10 sm:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-extrabold text-gray-400">WHY CHOOSE US</h2>
          <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Tradition of Trust
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            We specialise in intelligent & effective search and belives in the power of partnerships to grow business
          </p>
        </div>
        <div class="bg-white p-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    <div class="flex flex-col items-center">
      <div class="bg-white text-white p-4 rounded-full shadow-md mb-4">
        
      <FontAwesomeIcon icon={faTeamspeak} style={{ color: "#00b4e2" }} size="2x" />
      </div>
      <h2 class="text-xl font-bold mb-2">Professional Team</h2>
      <p class="text-gray-600 text-center">Our team uses a sanitizing solution to wipe down light switches doorknobs.</p>
    </div>

    
    <div class="flex flex-col items-center">
      <div class="bg-white text-white p-4 rounded-full shadow-lg mb-4">
      <FontAwesomeIcon icon={faPhone} style={{ color: "#00b4e2" }} size="2x" />
      </div>
      <h2 class="text-xl font-bold mb-2">24/7 Services</h2>
      <p class="text-gray-600 text-center">We encourage our customers to let us know in advance of an appointment.</p>
    </div>

    <div class="flex flex-col items-center">
      <div class="bg-white text-white p-4 rounded-full shadow-lg mb-4">
      <FontAwesomeIcon icon={faStar} style={{ color: "#00b4e2" }} size="2x" />
      </div>
      <h2 class="text-xl font-bold mb-2">Service Guarantee</h2>
      <p class="text-gray-600 text-center">We are telling our team members to switch out all cleaning cloths and mopheads.</p>
    </div>
  </div>
</div>

        
      </div>
    </div>
    )
}