enum Subject {
    maths = 'maths',
    language = 'language',
    science = 'science',
    history = 'history',
    coding = 'coding',
    geographic = 'geographic',
    economics = 'economics',
    finance = 'finance',
    business = 'business',
}

type Companion = Models.DocumentList<Models.Document> & {
    $id: string;
    name: string;
    subject: Subject;
    topic: string;
    duration: number;
    bookmarked: boolean;
}

interface CreateCompanion {
    name: string;
    subject: string;
    topic: string;
    voice: string;
    style: string;
    duration: number;
}