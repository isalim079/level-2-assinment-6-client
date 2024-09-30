/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

const LoginLayout = ({children}: {children: any}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default LoginLayout;