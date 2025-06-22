import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CallToAction from "@/components/CallToAction";

const recentCompanions = [
    {
        id: "1",
        subject: "science",
        name: "Neura the Brainy Explorer",
        topic: "Neural Network of the Brain",
        duration: 45,
        color: "#E5D0FF",
    },
    {
        id: "2",
        subject: "maths",
        name: "Countsy the Number Wizard",
        topic: "Derivatives & Integrals",
        duration: 30,
        color: "#FFDA6E",
    },
    {
        id: "3",
        subject: "language",
        name: "Verba the Vocabulary Builder",
        topic: "English Literature",
        duration: 30,
        color: "#BDE7FF",
    },
    {
        id: "4",
        subject: "coding",
        name: "Codey the Logic Hacker",
        topic: "Intro to If-Else Statements",
        duration: 45,
        color: "#FFC8E4",
    },
    {
        id: "5",
        subject: "history",
        name: "Memo, the Memory Keeper",
        topic: "World Wars: Causes & Consequences",
        duration: 15,
        color: "#FFECC8",
    },
    {
        id: "6",
        subject: "economics",
        name: "The Market Maestro",
        topic: "The Basics of Supply & Demand",
        duration: 10,
        color: "#C8FFDF",
    },
];

export default function Home() {
    return (
        <main className={'mb-8'}>
            <h1>Dashboard</h1>
            <div className={'grid md:grid-cols-3 gap-8'}>
                <CompanionCard id={'123'} title={'Neura the Brainy Explorer'} topic={'Neural Network of the Brain'}
                               subject={'Science'} duration={45} color={'bg-purple-300'}/>
                <CompanionCard id={'123'} title={'Countsy the Number Wizard'} topic={'Derivatives & Integrals'}
                               subject={'Math'} duration={45} color={'bg-yellow-300'}/>
                <CompanionCard id={'123'} title={'Verba the Vocabulary Builder'} topic={'English Literature'}
                               subject={'Language'} duration={45} color={'bg-blue-300'}/>
            </div>
            <section className={'flex flex-col md:flex-row space-x-4 space-y-4'}>
               <CompanionList title={'Recently Completed Lessons'} companions={recentCompanions} />
                <CallToAction/>
            </section>
        </main>
    );
}
