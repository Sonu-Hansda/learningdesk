import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const CallToAction = () => {
    return(
        <div className={'md:w-1/3 bg-[#2C2C2C] py-8 px-4 rounded-2xl'}>
            <p className={'bg-yellow-400 p-1 w-1/2 text-sm mx-auto rounded-xl text-center mb-2'}>Start learning your way.</p>
            <h1 className={'text-white text-center mb-2'}>Build a Personalized Learning Companion.</h1>
            <p className={'text-white text-sm text-center mb-2'}>Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.</p>
            <Image className={'mx-auto mb-4'} src={'/images/cta.svg'} alt={'call to action'} height={300} width={300} />
            <Button className={'mx-auto w-full'}>
                <Image src={'/icons/plus.svg'} alt={'plus icon'} height={20} width={20}/>
                <Link href={'/companions/new'}>Start New Companion</Link>
            </Button>
        </div>
    );
}

export default CallToAction;