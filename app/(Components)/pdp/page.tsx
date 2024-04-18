'use client'
import { useState } from "react"

export default function Pdp(props: any) {

    console.log(props, 'props');

    const data = [
        {
            imageUrls: [
                "https://i8.amplience.net/i/jpl/jd_131907_a?qlt=92&w=950&h=673&v=1&fmt=auto",
                "https://i8.amplience.net/i/jpl/jd_131907_b?qlt=92&w=750&h=531&v=1&fmt=auto 1x, https://i8.amplience.net/i/jpl/jd_131907_b?qlt=92&w=950&h=673&v=1&fmt=auto 2x, https://i8.amplience.net/i/jpl/jd_131907_b?qlt=92&w=1200&h=850&v=1&fmt=auto 3x",
                "https://i8.amplience.net/i/jpl/jd_131907_c?qlt=92&w=750&h=531&v=1&fmt=auto 1x, https://i8.amplience.net/i/jpl/jd_131907_c?qlt=92&w=950&h=673&v=1&fmt=auto 2x, https://i8.amplience.net/i/jpl/jd_131907_c?qlt=92&w=1200&h=850&v=1&fmt=auto 3x",
                "https://i8.amplience.net/i/jpl/jd_131907_d?qlt=92&w=750&h=531&v=1&fmt=auto 1x, https://i8.amplience.net/i/jpl/jd_131907_d?qlt=92&w=950&h=673&v=1&fmt=auto 2x, https://i8.amplience.net/i/jpl/jd_131907_d?qlt=92&w=1200&h=850&v=1&fmt=auto 3x",
                "https://i8.amplience.net/i/jpl/jd_131907_e?qlt=92&w=750&h=531&v=1&fmt=auto 1x, https://i8.amplience.net/i/jpl/jd_131907_e?qlt=92&w=950&h=673&v=1&fmt=auto 2x, https://i8.amplience.net/i/jpl/jd_131907_e?qlt=92&w=1200&h=850&v=1&fmt=auto 3x",
                "https://i8.amplience.net/i/jpl/jd_131907_f?qlt=92&w=750&h=531&v=1&fmt=auto 1x, https://i8.amplience.net/i/jpl/jd_131907_f?qlt=92&w=950&h=673&v=1&fmt=auto 2x, https://i8.amplience.net/i/jpl/jd_131907_f?qlt=92&w=1200&h=850&v=1&fmt=auto 3x"
            ],
            productName: "Nike Air Max 95 Ultra SE",
            price: "£175.00",
            sizes: [7, 8, 9, 9.5, 10, 11, 12]

        }
    ]

    const [useData, setUseData] = useState([data])

    const imageFunction = (imageDetails: any) => {

        return imageDetails.map((image: string) => (
            <img className="w-96 h-64 m-1" src={image} />
        ))
    }

    const sizesButtonFunction = (sizes: any) => {
        return sizes.map((size: number) => (
            <button className="text-xs border-solid border-2 p-2 w-11 h-11 m-1 hover:bg-black hover:text-white">{size}</button>
        ))
    }
    

    return (
        <>
        <hr className="mb-6" />
        { data.map((productData) => (
        <div className="w-full flex justify-center content-center">
            <div className="flex w-1/2 flex-wrap">
                {imageFunction(productData.imageUrls)}
            </div>
            <div className="w-1/4">
                <div>
                    <h1 className="text-2xl font-light">{productData.productName}</h1>
                    <h1 className="text-2xl">{productData.price}</h1>
                </div>
                <hr className="mt-6 mb-6"/>
                <div className="flex justify-between content-center">
                    <p className="text-sm font-medium self-center">Choose size in stock</p>
                    <button className="text-xs border-solid border-2 p-2 hover:bg-black hover:text-white">Size Guide</button>
                </div>
                <div className="flex mt-6">
                  {sizesButtonFunction(productData.sizes)}
                </div>
                <div>
                    <button className="w-full bg-[#43d5b0] text-base text-white h-12 mt-6 rounded-md">Add to basket</button>
                    <button className="w-full border-2 text-base text-black h-12 mt-6 rounded-md font-medium">Add to wishlist</button>
                </div>
            </div>
        </div>
         ))
        }
        </>
    )
  }