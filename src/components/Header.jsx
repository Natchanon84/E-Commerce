import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import icon from "/shopping.svg"

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Beauty', slug: 'beauty', icon: TagIcon, },
  { name: 'Fragrances', slug: 'fragrances', icon: TagIcon },
  { name: 'Furniture', slug: 'furniture', icon: TagIcon },
  { name: 'Groceries', slug: 'groceries', icon: TagIcon },
  { name: 'Home Decoration', slug: 'home-decoration', icon: TagIcon },
  { name: 'KitchenAccessories', slug: 'kitchen-accessories', icon: TagIcon },
  { name: 'Laptops', slug: 'laptops', icon: TagIcon },
  { name: 'MensShirts', slug: 'mens-shirts', icon: TagIcon },
  { name: 'MensShoes', slug: 'mens-shoes', icon: TagIcon },
  { name: 'MensWatches', slug: 'mens-watches', icon: TagIcon },
  { name: 'MobileAccessories', slug: 'mobile-accessories', icon: TagIcon },
  { name: 'Motorcycle', slug: 'motorcycle', icon: TagIcon },
  { name: 'SkinCare', slug: 'skin-care', icon: TagIcon },
  { name: 'Smartphones', slug: 'smartphones', icon: TagIcon },
  { name: 'SportsAccessories', slug: 'sports-accessories', icon: TagIcon },
  { name: 'Sunglasses', slug: 'sunglasses', icon: TagIcon },
  { name: 'Tablets', slug: 'tablets', icon: TagIcon },
  { name: 'Tops', slug: 'tops', icon: TagIcon },
  { name: 'Vehicle', slug: 'vehicle', icon: TagIcon },
  { name: 'WomensBags', slug: 'womens-bags', icon: TagIcon },
  { name: 'WomensDresses', slug: 'womens-dresses', icon: TagIcon },
  { name: 'WomensJewellery', slug: 'womens-jewellery', icon: TagIcon },
  { name: 'WomensShoes', slug: 'womens-shoes', icon: TagIcon },
  { name: 'WomensWatches', slug: 'womens-watches', icon: TagIcon },

]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false) // เพิ่ม state สำหรับ Modal

  return (
    <header className="bg-white sticky top-0 z-30 shadow-inner">
      <nav aria-label="Global" className="mx-auto flex  items-center justify-between p-2 lg:px-8 shadow-2xl ">
        <div className="flex lg:hidden ">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12  flex-1">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold  text-gray-900 ">
              All Product
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-5 w-screen overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 flex flex-col" >
              <div className="p-4 mb-5 ">
                <div className="flex flex-wrap gap-2 w-full ">
                  {products.map((item) => (
                    <Link to={`/${item.slug.toLowerCase().replace(/\s+/g, '-')}`}>
                      <PopoverButton >
                        <div key={item.name}
                          className="group relative flex justify-start items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-rose-400  w-56 border"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:bg-white border">
                            <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                          </div>
                          <div className="">
                            <p className="block font-semibold text-gray-900 hover:text-white">
                              {item.name}
                              <span className="absolute inset-0" />
                            </p>
                          </div>
                        </div>
                      </PopoverButton>

                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className='flex justify-center items-center  flex-1 lg:flex'>
          <Link to="/">
            <img src={icon} className=' w-full h-6' />
            <p className='font-bold'>StoreOHO</p>
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <button
            onClick={() => setIsModalOpen(true)} // เปิด Modal เมื่อกดปุ่ม
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </div>



      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Modal สำหรับ Login */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed inset-0 z-10">
        <div className="fixed inset-0 bg-black bg-opacity-10" aria-hidden="true" />
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Panel className="relative w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            {/* ปุ่มปิด */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              ✕
            </button>

            <form className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="box"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  )
}


export default Header