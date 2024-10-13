/* eslint-disable @next/next/no-img-element */
"use client"

import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useSelector } from "react-redux";

const ProfileSection = () => {

    const user = useSelector(selectCurrentUser)
    const userInfo = user?.socialUser
    console.log(user?.socialUser);
 

    return (
        <div>
            <div className="flex gap-5 font-poppins">
                <div>
                    <img className="w-40" alt="image" src={userInfo?.image} />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">{userInfo?.name}</h3>
                    <p className="text-lg">{userInfo?.role === 'user' ? 'User' : 'Premium'}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;