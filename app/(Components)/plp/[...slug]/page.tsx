'use client'
import { productsListing } from '@/app/_lib/client/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Plp = (props: any) => {

    const [listedProducts, setListedProducts] = useState([]);

    const route = useRouter();
    const pathParams = props.params.slug[0];
    useEffect(() => {
        (async () => {
            const { products }: any = await productsListing(pathParams);
            const filteredProducts: any = products.filter((filteredProduct: any) => {
                const lowerCaseProductCategory = filteredProduct.category.toLowerCase();
                const lowerCasePathParams = pathParams.toLowerCase()
                if (lowerCaseProductCategory === lowerCasePathParams) {
                    return filteredProduct;
                }
            });
            setListedProducts(filteredProducts);
        })()
    }, []);

    const discountPrice = (price: number, discountPercentage: number) => {
        let discountAmount: any = (discountPercentage/100) * price;
        discountAmount = price - discountAmount.toFixed(0)
        return discountAmount;
    }
    
    return (
        <div className="flex justify-evenly">
            <div className="w-[40%]">
                <p>sdfgh</p>
            </div>
            <ul className="flex flex-wrap">
                {
                    listedProducts.map((product: any) => (
                        <li className="p-10 list-none m-4" key={product.id}
                            onClick={() => {
                                route.push(`/pdp/${product.id}`)
                            }}
                        >
                        <img className="w-64 h-56"
                            src={product.images[0]}
                            alt={product.productName} 
                        />
                        <p className="text-sm leading-8 pl-3 pt-3">{product.title}</p>
                        <div className='bg-[#43d5b0] w-[35%] ml-3'>
                            <p className='text-[11px] font-medium leading-8 text-white pl-3'>{product.rating} Rating</p>
                        </div>
                        <div className='flex'>
                            <p className="text-sm font-medium leading-8 pl-3"> ₹ {discountPrice(product.price, product.discountPercentage)}</p>
                            <p className="text-sm font-medium leading-8 pl-3 line-through text-[#7b7a7a]">₹ {product.price}</p>
                            <p className="text-[10px] font-medium leading-8 pl-3">{product.discountPercentage.toFixed(0)}% off</p>
                        </div>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Plp;