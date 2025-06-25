"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {createCompanion} from "@/lib/actions/companion.actions";
import {redirect} from "next/navigation";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Companion name is required."
    }),
    subject: z.string().min(1, {
        message: "Subject is required."
    }),
    topic: z.string().min(1, {
        message: "Topic is required."
    }),
    voice: z.string().min(1, {
        message: "Voice is required."
    }),
    style: z.string().min(1, {
        message: "Style is required."
    }),
    duration: z.coerce.number().min(1, {message: "Duration is required."}),
})

const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
        },
    });

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        const companion = await createCompanion(values);

        if (companion){
            redirect(`companions/${companion.id}`);
        } else {
            console.log('failed to create companion');
            redirect('/');
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Companion name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the companion name" {...field} className={'w-full'} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the subject - ex. math" {...field} className={'w-full'} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should this companion teach ?</FormLabel>
                            <FormControl>
                                <Textarea placeholder={"Enter the topic you want to learn - ex. Derivatives"} {...field} className={'w-full'} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Voice Type</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select the voice" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Speaking Style</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select the speaking style" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="formal">Formal</SelectItem>
                                        <SelectItem value="informal">Informal</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Duration</FormLabel>
                            <FormControl>
                                <Input type={'number'} placeholder="10" {...field} className={'w-full'} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={'w-full cursor-pointer'}>Build your companion</Button>
            </form>
        </Form>
    );
}

export default CompanionForm;