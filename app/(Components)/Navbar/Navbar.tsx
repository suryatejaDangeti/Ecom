'use client'
import Link from "@/node_modules/next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
// import Plp from "../plp/[...slug]/page"


const Navbar = () => {

    const navlinkNames = ['Men', 'Women', 'Kids', 'Collections', 'Brands', 'Football', 'Sports', 'Offers']

    const [navLinks, setNavLinks] = useState({
        hover: false,
        name: ''
    })
    const [searchKeyword, setSearchKeyword] = useState('');
    const router = useRouter();

    const searchFunction = async (searchValue: any) => {
        if(searchValue === "Enter" || searchValue === "click") {
           console.log('called')
        }

    }

    return (
        <>
        <div className="w-full flex flex-col jusfity-evenly items-center">
                <div className="w-[90%] flex justify-end items-center">
                    <Link href="/myaccount" className="text-xs text-[grey] m-4">My Account</Link>
                    <Link href="/findstore" className="text-xs text-[grey] m-4"> Find a Store</Link>
                    <Link href="/help" className="text-xs text-[grey] m-4">Help</Link>
                    <Link href="/myorder" className="text-xs text-[grey] m-4">my order</Link>
                    <Link href="/wishlist" className="text-xs text-[grey] m-4">Wishlist</Link>
                    <Link href="/deliveryto" className="text-xs text-[grey] m-4">Deliver To...</Link>
                </div>
                <div className="w-[90%] flex justify-between items-center mb-8">
                    <Link href='/'>
                        <img 
                        src="https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/skins/jdsportsuk-desktop/public/img/logos/logo-large-en-dark.png" alt="" />
                    </Link>
                    <div className="w-100% flex">
                        <div>
                            <input 
                                className="w-72 h-10 border-solid border border-[rgb(128 128 128 / var(--tw-text-opacity))] text-xs border-r-0 pl-2 outline-none"
                                name="searchInput"
                                placeholder="Search Nike, adidas, latest footwear etc?"
                                type="text"
                                onKeyDown={(event: any) => {
                                    searchFunction(event.key)
                                }}
                                onChange={(event: any) => {
                                    setSearchKeyword(event.target.value);
                                }}
                            />
                            <button type="button"
                            className="w-28 h-10 bg-[#43d5b0] text-xs text-white"
                            onClick={(event: any) => {
                                searchFunction(event.type)
                            }}
                            >Search</button>
                        </div>
                        <div className="w-60 bg-[#cccbcc] h-10 p-2 ml-4">
                            <span className="text-xs text-[#1a1a1a]">Basket is empty</span>
                        </div>
                    </div>
                </div>
                <div className=" w-1/2 flex justify-between duration-1000 cursor-pointer">
                    {navlinkNames.map((navlink) => (
                        <button 
                        className="text-[#1a1a1a] font-medium" 
                        onMouseEnter={(event: any) => {
                            if(event.target.innerHTML) {
                                setNavLinks({
                                    hover: true,
                                    name: event.target.innerHTML})
                                }
                        }}
                        onMouseLeave={(event: any) => {
                            if(event.target.innerHTML) {
                                setNavLinks({
                                    hover: false,
                                    name: event.target.innerHTML})
                                }
                        }}
                        >
                            {navlink}
                        </button>

                    ))}
                </div>
                { !navLinks.hover && 
                    <div className="w-full bg-[#ffed03] h-14 flex justify-evenly items-center p-9 mt-6">
                    <p className="text-[rgb(48, 48, 48)] text-center">
                        FREE STANDARD DELIVERY 
                        <br/>
                        <span className="text-[#454545]">ON OVER £70</span>
                    </p>
                    <p className="text-[rgb(48, 48, 48)] text-center">
                        SHOP ONLINE 24/7 
                        <br/>
                        <span className="text-[#454545]">WITH CONTACTLESS DELIVERY</span>
                    </p>
                    <p className="text-[rgb(48, 48, 48)] text-center">
                        SHOP NOW, PAY LATER
                        <br/>
                        <span className="text-[#454545]">WITH KLARNA, CLEARPAY & MORE!</span>
                    </p>
                    </div>
                }
        </div>
       { navLinks.hover && 
            <div className="bg-[#fff] w-full h-[60vh] absolute"
            onMouseEnter={(event: any) => {
                if(event.target.innerHTML) {
                    setNavLinks({
                        hover: true,
                        name: event.target.innerHTML})
                    }
            }}
            onMouseLeave={(event: any) => {
                if(event.target.innerHTML) {
                    setNavLinks({
                        hover: false,
                        name: event.target.innerHTML})
                    }
            }}
            // onClick={() => {
            //     console.log('called');
            //     <Plp name="mens data rendering"/>
            //     router.push('/plp/mens')
            // }}
            >
               {navLinks.name}
            </div>
        }
        </>
    )
}

export default Navbar