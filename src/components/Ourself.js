import image from '../images/rightside.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSprayCanSparkles, faCheck} from '@fortawesome/free-solid-svg-icons'

export default function Example() {
  return (
    <div class="w-full h-100 flex flex-col md:flex-row">

  <div class="flex-1">
    <img
      src={image}
      alt="Sample Image"
      class="w-full h-full object-cover"
    />
  </div>
  

  <div class="flex-1 p-12 flex flex-col bg-white">
  
    <div class="flex-1 mb-4">
    <div className="mx-auto max-w-2xl lg:text-left">
          <h2 className="text-base/7 font-extrabold text-gray-400">MAID FOR YOU</h2>
          <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            A Cleaner Place is a Safer Place.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 font-semibold">
            Washla cleaning serice. We are a company dedicated to giving our customer back the time they deserve to enjoy the thighs they love.
          </p>
        </div>
    </div>

    <div class="flex flex-col md:flex-row gap-4">

    <div class="flex flex-col items-left">
      <div class="bg-white text-white p-4  mb-4">
        
      <FontAwesomeIcon icon={faSprayCanSparkles} style={{ color: "#00b4e2" }} size="2x" />
      </div>
      <h2 class="text-xl font-bold mb-2">Professional cleaning</h2>
      <p class="text-gray-600 text-left">Housekeeping is responsible for more security in hotel</p>
    </div>

    
    <div class="flex flex-col items-left">
      <div class="bg-white text-white p-4  mb-4">
        
      <FontAwesomeIcon icon={faCheck} style={{ color: "#00b4e2" }} size="2x" />
      </div>
      <h2 class="text-xl font-bold mb-2">Fast and efficient</h2>
      <p class="text-gray-600 text-left">Both of us take a lot of time in getting cleaned Clean Home.</p>
    </div>
    </div>
  </div>
</div>

  )
}