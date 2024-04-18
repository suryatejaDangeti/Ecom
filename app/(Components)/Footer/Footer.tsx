'use client'
import facebookIcon from '../../../public/Icons/facebookIcon.svg'
import youtubeIcon from '../../../public/Icons/youtubeIcon.svg'
import twitterIcon from '../../../public/Icons/twitterIcon.svg'
import pinterestIcon from '../../../public/Icons/pinterestIcon.svg'
import instagramIcon from '../../../public/Icons/instagramIcon.svg'
import locationIcon from '../../../public/Icons/locationIcon.svg'
import Image from "next/image";
import CustomInput from '../CustomInput/CustomInput'
import { fetchRemoteConfig } from '@/app/_lib/firebase/firebase'

const Footer = () => {

    const iconsData = [
        {
            id: 1,
            name: 'facebookLogo',
            logo: facebookIcon,
        },
        {
            id: 2,
            name: 'youtubeLogo',
            logo: youtubeIcon,
        },
        {
            id: 3,
            name: 'twitterLogo',
            logo: twitterIcon,
        },
        {
            id: 4,
            name: 'pinterestLogo',
            logo: pinterestIcon,
        },
        {
            id: 5,
            name: 'instagramLogo',
            logo: instagramIcon,
        },
        {
            id: 6,
            name: 'locationLogo',
            logo: locationIcon,
        },
    ]

    const footerCardsData = [
        {
            id : 1,
            name: 'GIFT CARDS',
            imageUrl: 'https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/skins/jdsportsuk-desktop/public/img/footer/gift-card.png',
            price: '£5 - £300',
            description: "The ultimate gift card is the only gift card you need. Available in over 500 stores across the country, it's the perfect gift.",
            caption: 'Buy gift cards'
        },
        {
            id : 2,
            name: 'OUR STORES',
            imageUrl: 'https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/skins/jdsportsuk-desktop/public/img/footer/stores.png',
            description: "Find your local store, view opening hours and find out where you can get free delivery to collect your order from!",
            caption: 'Just enter your postcode below to find your nearest store.',
            input: 'postcode'
        },
        {
            id : 3,
            name: 'DOWNLOAD OUR APPS',
            imageUrl: 'https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/skins/jdsportsuk-desktop/public/img/footer/apps.png',
            description: "Shop 24/7 using the app. Access exclusive offers & shop the very latest products on the move.",
            extraImages: [
                {
                    imageUrl: 'https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/skins/default/public/img/app-buttons/app-download-apple-en.png',
                    name: 'appstoredlogo'
                },
                {
                    imageUrl: 'https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/skins/default/public/img/app-buttons/app-download-android-en.png',
                    name: 'googleplaystorelogo'
                },

            ]
        },
    ]
    console.log(fetchRemoteConfig(), 'fetchRemoteConfig');

    return (
        <div className='mt-10'>
            <div className='bg-[#2e2e2e] flex justify-evenly items-center h-14'>
                <div className="w-1/2">
                    <div className='flex justify-evenly items-center'>
                        <h1 className='text-white text-normal'>Join the conversation</h1>
                        <div className='flex'>
                            {
                                iconsData.map((iconData) => (
                                        <a href="" className='ml-4 mr-4'>
                                            <Image
                                                className='invert'
                                                src={iconData.logo}
                                                alt={iconData.name}
                                                width={25}
                                                height={25}
                                            />
                                        </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='h-full flex w-1/2 justify-center'>
                    <CustomInput
                        styledInputs={{height: 'h-14'}}
                        type="text"
                        name="signup"
                        value=""
                        placeholder="Sign up for the latest JD Sports news"
                    />
                    <button className="w-28 h-10 bg-[#43d5b0] text-xs text-white h-14">Sign Up</button>
                </div>
            </div>
            <div className='flex justify-center items-center mt-4'>
                {
                    footerCardsData.map((footerCard) => (
                        <div className='bg-[#2e2e2e] w-[25%] p-4 m-4 flex flex-col justify-center items-center h-96'>
                            <h1 className='text-normal text-white text-center font-medium'>{footerCard.name}</h1>
                            <div className='h-48 flex justify-center items-center'>
                                <img
                                className={footerCard.name !== 'DOWNLOAD OUR APPS' ? 'w-60' : 'h-36'} src={footerCard.imageUrl} alt={footerCard.name}/>
                            </div>
                            {footerCard.price && <h1 className='text-normal text-white text-center font-medium'>{footerCard.price}</h1>}
                            <p className='text-xs text-white text-center leading-5'>{footerCard.description}</p>
                            {footerCard.caption && <p className='text-xs text-white text-center leading-8'>{footerCard.caption}</p>}
                            {
                                footerCard.input &&
                                <div className='flex justify-center items-center'>
                                    <CustomInput 
                                        placeholder="ENTER POSTCODE..."
                                        styledInputs={{height: 'h-12'}}
                                    />
                                    <button className="w-12 h-10 bg-[#43d5b0] text-xs text-white h-12 absolute right-[38.9%]">Go</button>
                                </div>
                            }
                            { footerCard?.extraImages &&
                            <div className='flex justify-evenly items-center'>
                                {
                                footerCard?.extraImages.map((extraImage) => (
                                    
                                        <img className='w-44 m-4' src={extraImage.imageUrl} alt={extraImage.name} />
                                ))
                                }
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer;