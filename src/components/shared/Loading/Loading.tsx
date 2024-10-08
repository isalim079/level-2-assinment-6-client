import loading from '@/assets/animation/loading.json'
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Lottie animationData={loading} />
        </div>
    );
};

export default Loading;