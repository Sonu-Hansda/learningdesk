import Image from "next/image";
import {Button} from "@/components/ui/button";

interface CompanionCardProps {
    id: string;
    title: string;
    color: string;
    topic: string;
    subject: string;
    duration: number;
}

const CompanionCard = ({id, title, topic, subject, duration, color}: CompanionCardProps) => {
    return (
        <article id={id} className={`p-4 rounded-lg border-1 border-black ${color}`}>
            <div className={'flex items-center justify-between mb-4'}>
                <span className={'py-1.5 px-2.5 bg-black text-white text-sm rounded-xl'}>{subject}</span>
                <Image className={'bg-black w-10 h-8 py-2 rounded-lg'} src={'/icons/bookmark.svg'} width={10}
                       height={10} alt={'bookmark'}/>
            </div>
            <h1 className={'mb-2'}>{title}</h1>
            <h2 className={'mb-2'}>Topic: {topic}</h2>
            <p className={'mb-4 flex'}><Image className={'mr-2'} height={14} width={14} src={'/icons/clock.svg'}
                                              alt={'clock'}/> {duration} mins duration</p>
            <Button className={'w-full'}>Launch Lesson</Button>
        </article>
    );
}

export default CompanionCard;