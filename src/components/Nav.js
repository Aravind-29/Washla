'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'


const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Pages', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div >
        <div className="flex items-center justify-between max-w-7xl mx-auto py-7 px-4 text-gray-500 text-sm sm:max-w-1xl text-xs sm:text-sm lg:text-base">
         <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-1 text-white ">
            <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} /> 
             <span>+123-456-7890</span>
            </div>
         <div className="flex items-center gap-1 text-white ">
          <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />
           <span>info@yourdomain.com</span>
          </div>
        </div>

    
         <div className="hidden sm:flex flex items-center gap-5">
      
      <a href="#" className="text-blue-500 hover:text-blue-700">
      <FontAwesomeIcon icon={faFacebookF} style={{color: "#ffffff",}} />
      </a>
      <a href="#" className="text-blue-500 hover:text-blue-700">
      <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
      </a>
      <a href="#" className="text-blue-500 hover:text-blue-700">
      <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
      </a>
      <a href="#" className="text-blue-500 hover:text-blue-700">
      <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
      </a>
      {/* Add more icons as needed */}
      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
      <FontAwesomeIcon icon={faCalendar} style={{color: "#ffffff",}} /> Get a Quote
      </button>
    </div>
  </div>
      <header className='bg-white bg-opacity-60 rounded relative z-50 max-w-7xl mx-auto my-50' >
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      </div>

  )
}
