import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {
  let myData = useSelector((myStore) => myStore.counterStore.count) // store s data lane ka kam krta hai useSelector hook
  // console.log(myData);
  let myStore = useSelector((myStore) => myStore.cartStore.cart)
  console.log(myStore);
  

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
              <Link to={"/"}>
                <a
                  href="#"
                  className="text-sm font-medium text-fg-brand hover:underline"
                >
                  Home
                </a>
              </Link>
              <Link to={"/cart"}>
                <a
                  href="#"
                  className="text-sm font-medium text-fg-brand hover:underline"
                >
                  Cart({myStore.length})
                </a>
              </Link>
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