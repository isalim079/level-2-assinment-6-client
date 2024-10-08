import Navbar from '@/components/shared/Navbar/Navbar'
import HomePage from '@/components/Home/Home'
import Footer from '@/components/shared/Footer/Footer';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <div>
     <Navbar session={session} />
     <HomePage />
     <Footer />
    </div>
  );
}
