import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  let myData = useSelector((myStore)=>myStore.counterStore.count)
  console.log(myData);
  
  return (
    <div>
      <header className=" w-full z-20 top-0 start-0">
        <nav className="bg-neutral-primary">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a
              href="https://flowbite.com"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
            </a>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <a
                href="#"
                className="text-sm font-medium text-fg-brand hover:underline"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium text-fg-brand hover:underline"
              >
                Cart
              </a>
              <a
                href="#"
                className="text-sm font-medium text-fg-brand hover:underline"
              >
                Count({myData})
              </a>
            </div>
          </div>
        </nav>
        <hr />
      </header>

    </div>
  )
}

export default Header