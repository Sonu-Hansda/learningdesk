import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";
import Image from "next/image";

interface CompanionListProps {
    title: string;
    companions?: Companion[];
}

const CompanionList = ({title, companions}: CompanionListProps) => {
    return (
        <article className={'w-full md:w-2/3 border-1 border-black rounded-lg p-2 md:p-4'}>
            <h2 className={'font-bold text-3xl'}>{title}</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Lesson</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Duration</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map(({id, subject, duration, name, topic, color}) => (
                        <TableRow key={id}>
                            <TableCell>
                                <Link href={`/companions/${id}`}>
                                    <div className={'flex items-center justify-start md:space-x-4'}>
                                        <Image className={'hidden md:block p-1.5 rounded'}
                                               style={{backgroundColor: color}}
                                               src={`/icons/${subject}.svg`} alt={subject} height={35} width={35}/>
                                        <div>
                                            <h1 className={'text-lg md:text-xl'}>{name}</h1>
                                            <p>Topic: {topic}</p>
                                        </div>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Image className={'md:hidden p-1.5 rounded'} style={{backgroundColor: color}}
                                       alt={'subject image'}
                                       src={`/icons/${subject}.svg`} height={30} width={30}/>
                                <div
                                    className={'hidden md:block bg-black text-white rounded-xl text-center p-2'}>{subject}</div>
                            </TableCell>
                            <TableCell>{duration} Mins</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </article>
    );
}

export default CompanionList;