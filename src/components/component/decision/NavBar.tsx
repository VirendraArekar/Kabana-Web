import React,{useState} from 'react';
import WalletImg from '../../../assets/images/WalletButton.svg';
import DecisionImg from '../../../../public/images/decision logo.png';
import { Link } from 'react-router-dom';
import SignInButton from './SignInButton';


export default function NavBar() {
  const [langDrop, setLangDrop] = useState(false)
  const changeLangDrop = () => {
    setLangDrop(!langDrop)
  }
  return (
        <nav className="px-2 sm:px-4 py-2.5   w-full z-20 top-0 left-0 bg-opacity-100 bg-black">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/decision" className="flex items-center">
                    <img src={DecisionImg} className="h-6 pl-20 sm:h-9" alt="Decision Logo" />   
                </Link>
                <ul className="flex flex-col p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li className='mx-3'>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-white md:p-0 dark:text-white text-xl" aria-current="page">Home</a>
                    </li>
                    <li className='mx-3'>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-white md:p-0 dark:text-white text-xl" aria-current="page">Tutorials</a>
                    </li>
                    <li className='mx-3'>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-white md:p-0 dark:text-white text-xl" aria-current="page">Cards Wiki</a>
                    </li>
                    <li className='mx-3'>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-white md:p-0 dark:text-white text-xl" aria-current="page">FAQ</a>
                    </li>

                </ul>
                <div className="flex md:order-2">
                    {/* <img src={WalletImg} className='object-contain h-auto max-w-full xs:h-10  mr-3 md:mr-0'/> */}
                    <SignInButton />
                </div>
                <div className="items-center justify-between hidden w-auto md:flex md:w-auto md:order-1 mx-48" id="navbar-sticky">

                </div>
            </div>
        </nav>

  )
}
