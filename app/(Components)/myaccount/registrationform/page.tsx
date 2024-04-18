'use client'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "@/app/_lib/firebase/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomInput from "../../CustomInput/CustomInput";

const RegistrationFrom = () => {

    const router = useRouter();

    const defaultFieldValues = {
        firstName: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    }

    const [registrationFormDetails, setRegistrationFormDetails] = useState(defaultFieldValues);

    const resetFormFields = () => {
        setRegistrationFormDetails(defaultFieldValues)
    }

    const onFormChange = (event: any) => {
        const { name, value } = event.target;
        setRegistrationFormDetails({...registrationFormDetails, [name]: value});
    }

    const onSubmitForm = async (event: any) => {
        event.preventDefault();
        try {
            const { user }: any = await createAuthUserWithEmailAndPassword(registrationFormDetails.email, registrationFormDetails.password);
            const userDocRef = await createUserDocumentFromAuth(user, { firstName: registrationFormDetails.firstName, surname: registrationFormDetails.surname, phone: registrationFormDetails.phone });
            resetFormFields();
            router.push('/');
        } catch(error: any) {
            if(error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already exists');
            } else {
                console.log('user creation encountered error', error);
            }
        }
    }

    return (
        <div>
            <form 
                method="post"
                onChange={onFormChange}
                onSubmit={onSubmitForm}
                className="flex justify-evenly"
            >
                <div>
                    <h1 className="text-2xl font-medium mt-4 mb-4">Register</h1>
                    <h2 className="text-base font-normal mt-4 mb-4">Your Details</h2>
                    <CustomInput
                        type="text"
                        name="firstName"
                        label="First Name"
                        value={registrationFormDetails.firstName}
                        required
                    />
                    <CustomInput
                        type="text"
                        name="surname"
                        label="Surname"
                        value={registrationFormDetails.surname}
                        required
                    />
                    <CustomInput 
                        type="email"
                        name="email"
                        label="Email address"
                        value={registrationFormDetails.email}
                        required
                    />
                    <CustomInput 
                        type="tel"
                        name="phone"
                        label="Telephone"
                        value={registrationFormDetails.phone}
                        required
                    />
                    <p className="text-xs m-4">Please enter 8 alpha numeric characters (letters, numbers, symbols)</p>
                    <CustomInput 
                        type="password"
                        name="password"
                        label="Password"
                        value={registrationFormDetails.password}
                        required
                    />
                    <CustomInput 
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={registrationFormDetails.confirmPassword}
                        required
                    />
                </div>
                <div className="m-12 flex flex-col justify-between h-[50vh]">
                    <div>
                        <h2 className="text-base font-normal mb-4">Your Billing Address</h2>
                        <div className="flex items-center m-4">
                            <label className="text-xs w-72">Country</label>
                            <select
                                name="country"
                                className="w-96 h-10 border-solid border text-xs p-2 outline-none"
                            >
                                <option>United Kingdom</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end items-end">
                        <button type="submit" className="w-96 bg-[#43d5b0] text-sm text-white h-12">Register</button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default RegistrationFrom;