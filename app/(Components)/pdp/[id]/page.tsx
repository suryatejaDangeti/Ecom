'use client'
import { productDetail } from "@/app/_lib/client/client";
import { useState } from "react"

export default function Pdp(props: any) {

    const [product, setProduct]: any = useState({})

    const id = props.params.id;
    (async () => {
        const product = await productDetail(id);
        setProduct(product);
    })();

    const imageFunction = (imageDetails: any) => {
        return imageDetails?.map((image: string) => (
            <img className="w-96 h-64 m-1" src={image} />
        ))
    }

    const sizesButtonFunction = (sizes: any) => {
        return sizes.map((size: number) => (
            <button className="text-xs border-solid border-2 p-2 w-11 h-11 m-1 hover:bg-black hover:text-white">{size}</button>
        ))
    }

    const discountPrice = (price: number, discountPercentage: number) => {
        let discountAmount: any = (discountPercentage/100) * price;
        discountAmount = price - discountAmount.toFixed(0)
        return discountAmount;
    }
    

    return (
        <>
            <hr className="mb-6" />
            <div className="w-full flex justify-center content-center">
                <div className="flex w-1/2 flex-wrap">
                    {imageFunction(product?.images)}
                </div>
                <div className="w-1/4">
                    <div>
                        <h1 className="text-2xl font-light">{product.brand} {product?.title}</h1>
                        <p className="text-sm pt-2 pb-2">{product?.description}</p>
                        <div className='flex'>
                                <p className="text-2xl font-medium leading-8 pl-3"> ₹ {discountPrice(product.price, product.discountPercentage)}</p>
                                <p className="text-sm font-medium leading-8 pl-3 line-through text-[#7b7a7a]">₹ {product.price}</p>
                                <p className="text-[10px] font-medium leading-8 pl-3">{product?.discountPercentage?.toFixed(0)}% off</p>
                            </div>
                    </div>
                    <hr className="mt-6 mb-6"/>
                    { product?.sizes && 
                        <>
                            <div className="flex justify-between content-center">
                                <p className="text-sm font-medium self-center">Choose size in stock</p>
                                <button className="text-xs border-solid border-2 p-2 hover:bg-black hover:text-white">Size Guide</button>
                            </div>
                            <div className="flex mt-6">
                            {sizesButtonFunction(product?.sizes)}
                            </div>
                        </>
                    }
                    <div>
                        <button className="w-full bg-[#43d5b0] text-base text-white h-12 mt-6 rounded-md">Add to basket</button>
                        <button className="w-full border-2 text-base text-black h-12 mt-6 rounded-md font-medium">Add to wishlist</button>
                    </div>
                </div>
            </div>
        </>
    )
  }