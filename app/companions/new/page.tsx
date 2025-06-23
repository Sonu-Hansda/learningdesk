import CompanionForm from "@/components/CompanionForm";

export default function NewCompanion(){
    return (
        <main className={'min-lg:w-1/2 min-md:w-2/3 items-center justify-center mb-8'}>
            <h1>Companion Builder</h1>
            <CompanionForm />
        </main>
    );
}