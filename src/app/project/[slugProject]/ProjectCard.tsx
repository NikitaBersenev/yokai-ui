import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from "next/link";
import { PAGES } from '@/config/pages-url.config'
import { IProject } from '@/types/project.types'
import ContainerTags from '@/components/ContainerTags'
import React from 'react'
import { IArticle, ISoft } from '@/types/article.types'

type Props = {
    params: {
        project: IProject;
    }
}

export default function ProjectCard({params: project}: Props): JSX.Element {
    let data = [1, 2, 3, 4, 5];
    let projectObj = project.project;
    let slug = projectObj.slug;


    let arrTags: ISoft[] = [
        {
            text: 'nameSoft1',
            slug: 'slugSoft1',
            language: 'languageSoft1'
        },
        {
            text: 'nameSoft1',
            slug: 'slugSoft1',
            language: 'languageSoft1'
        },
        {
            text: 'nameSoft1',
            slug: 'slugSoft1',
            language: 'languageSoft1'
        },
        {
            text: 'nameSoft1',
            slug: 'slugSoft1',
            language: 'languageSoft1'
        }
    ]

    let fetchObj: IArticle = {
        slug: 'slug1',
        createdAt: 'createdAt1',
        name: 'name1',
        soft: arrTags,
        text: 'text1',
        updatedAt: 'updatedAt1',
        id: 'id1'
    }


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
                    <CardFooter>
                        <ContainerTags params={{tags:arrTags, link: PAGES.PROJECTS}}/>
                        {/*<p>Project Footer</p>*/}
                    </CardFooter>
                </Card>
            </Link>
        </>
    );
}
