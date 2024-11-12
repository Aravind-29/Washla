import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="bg-gray-200">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="text-teal-600">
           <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
        </div>

        <p className="mt-4 max-w-xs text-gray-500">
          Washla customers has a tremendous oppurtunity to answer the call of logistics.
        </p>

        
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <div>
          <p className="font-bold text-gray-900">Get In Touch</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> 8273 NW 56th ST Miami, Florida, 33195 United States </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> info@amiso.com</a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> 052 5401 3322</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Home </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Services </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Team </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQ </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact Us</a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Gallery </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Blogs </a>
            </li>
          </ul>
        </div>

        <div>
        <div>
        <p class="font-bold text-gray-900">Our Newsletter</p>

        <div class="mx-auto mt-8 max-w-md sm:ms-0">
          <p class="text-left leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
            Subscribe to our Newsletter to recieve the latest news about our services.
          </p>

          <form className="mt-4">
        <div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email"> Email </label>

          <input
            className="w-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="Your email address"
          />

          <button
            className="absolute end-0 top-1/2 -translate-y-1/2 rounded bg-sky-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Sign Up
          </button>
        </div>
      </form>
        </div>
      </div>
        </div>
        
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
      <p className="text-center text-sm text-gray-500 sm:text-left">
        Copyright &copy; 2024. All rights reserved.
      </p>

      <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
        <li>
        <FontAwesomeIcon icon={faFacebookF} style={{color: "grey",}} />
        </li>

        <li>
        <FontAwesomeIcon icon={faTwitter} style={{color: "grey",}} />
        </li>

        <li>
        <FontAwesomeIcon icon={faInstagram} style={{color: "grey",}} />
        </li>

        <li>
        <FontAwesomeIcon icon={faLinkedin} style={{color: "grey",}} />
        </li>
      </ul>
    </div>
    
  </div>
</footer>
    )
}