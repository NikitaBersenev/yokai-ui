import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import { PAGES } from '@/config/pages-url.config'
import { IProject } from '@/types/project.types'

type Props = {
    params: {
        project: IProject;
    }
}

export default function ProjectCard({params: project}: Props): JSX.Element {
    let data = [1, 2, 3, 4, 5];
    let projectObj = project.project;
    let slug = projectObj.slug;
    return (
        <>
            <Link href={`${PAGES.PROJECTS}/${slug}/`}>
                <Card className="active:border-[#27272a] my-4 hover:border-white transition-all duration-100 ">
                    <CardHeader>
                        <CardTitle>Project {slug}</CardTitle>
                        <CardDescription>Project Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Project Content</p>
                    </CardContent>
                    {/*<CardFooter>*/}
                    {/*    <p>Project Footer</p>*/}
                    {/*</CardFooter>*/}
                </Card>
            </Link>
        </>
    );
}
