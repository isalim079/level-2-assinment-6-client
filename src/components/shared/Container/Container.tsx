"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
const Container = ({children}: {children: any}) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            {children}
        </div>
    );
};

export default Container;