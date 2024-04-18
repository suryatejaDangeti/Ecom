'use client'
import CustomInput from "../CustomInput/CustomInput";
import Link from "@/node_modules/next/link";
import { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../_lib/firebase/firebase";
import { useRouter } from 'next/navigation';

const MyAccount = () => {

    const [formDetails, setFormDetails] = useState({
        email: '',
        password: ''
    })
    const router = useRouter()

    const onFormChange = (event: any) => {
        const {name, value} = event.target;
        setFormDetails({...formDetails, [name]: value});
    }

    const onSubmitForm = async (event: any) => {
        event.preventDefault();
        try {
            const response: any = await signInAuthUserWithEmailAndPassword(formDetails.email, formDetails.password);
            if(response?._tokenResponse.idToken) {
                router.push("/")
            }

        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center items-center">
            <form
                action=""
                method="post"
                className="w-1/2"
                onChange={onFormChange}
                onSubmit={onSubmitForm}
            >
                <h1 className="text-2xl font-medium mt-4 mb-4">Login</h1>
                <h2 className="text-base font-normal mt-4 mb-4">Existing Customers</h2>
                <CustomInput 
                    type="email"
                    name="email"
                    label="Email Address"
                    value={formDetails.email}
                    required
                />
                <CustomInput 
                    type="password"
                    name="password"
                    label="Password"
                    value={formDetails.password}
                    required
                />
                <div className="flex flex-col justify-center items-center ml-[98px]">
                    <button type="submit" className="w-96 bg-[#43d5b0] text-sm text-white h-12">Sign In</button>
                    <Link href="" className="text-xs leading-10 underline">Forgotten your password?</Link>
                </div>
            </form>
            <div className=" border-solid border w-[40%] p-6 mt-[5%]">
                <h1>New to JD Sports?</h1>
                <p className="text-xs leading-loose"> Get our latest product recommendations for you. </p>
                <p className="text-xs leading-loose"> Personalise your JD experience on Mobile, tablet and desktop. </p>
                <p className="text-xs leading-loose"> Manage your orders and preferences. </p>
                <p className="text-xs leading-loose"> Access your saved items. </p>
                <p className="text-xs leading-loose"> Create and share gift lists. </p>
                <button 
                    className="w-full bg-[#43d5b0] text-sm text-white h-12 mt-4"
                    type="button" 
                    onClick={() => {
                        router.push("/myaccount/registrationform");
                    }}
                >
                    Register for an account
                </button>
            </div>
        </div>
    )
}

export default MyAccount;