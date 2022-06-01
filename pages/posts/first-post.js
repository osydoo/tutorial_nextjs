import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../public/images/profile.jpg'
import Head from 'next/head';

export default function FirstPost(){
    return <>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href={"/"}>
                <a>Back to Home</a>
            </Link>
        </h2>
        <Image src={profilePic}
               alt={"Picture of the author"}
                height={500}
               width={500}
        />
    </>
}