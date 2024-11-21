"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

import ArticleCard from '@/app/article/[slugArticle]/ArticleCard'
import { MultiSelect } from '@/components/MultiSelect'
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";
import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { IArticle, ISoft } from '@/types/article.types'
import ThePagination from '@/components/ThePagination'
import ProjectCard from '@/app/project/[slugProject]/ProjectCard'
import { IProject } from '@/types/project.types'

export default function Projects() {
    const searchParams = useSearchParams()
    // @ts-ignore
    let tags: any[] = searchParams.get('tag')
    if(tags === null){
        tags = []
    }
    if(!Array.isArray(tags)){
        tags = [tags]
    }
    const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(tags);
    const router = useRouter();
    const pathname = usePathname();



    let data = [
        'go-books',
        'go-projects',
        'go-Projects'
    ]

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

    let arrTags2: ISoft[] = [
        {
            text: 'nameSoft12',
            slug: 'slugSoft12',
            language: 'languageSoft1'
        },
        {
            text: 'nameSoft12',
            slug: 'slugSoft12',
            language: 'languageSoft1'
        },
        {
            text: 'nameSoft12',
            slug: 'slugSoft12',
            language: 'languageSoft1'
        },
        {
            text: 'nameSoft12',
            slug: 'slugSoft12',
            language: 'languageSoft1'
        }
    ]

    let fetchObj: IProject = {
        slug: 'slug1',
        createdAt: 'createdAt1',
        name: 'name1',
        description: "desc1",
        soft: arrTags,
        updatedAt: 'updatedAt1',
        id: 'id1'
    }
    let fetchObj2: IProject = {
        slug: 'slug1',
        description: "desc1",
        createdAt: 'createdAt1',
        name: 'name1',
        soft: arrTags2,
        updatedAt: 'updatedAt1',
        id: 'id1'
    }

    let arrProjects: IProject[] = [
        fetchObj,
        fetchObj,
        fetchObj2,
        fetchObj2,
        fetchObj2,
    ]



    const frameworksList = [
        { value: "slugSoft1", label: "slugSoft1" },
        { value: "slugSoft12", label: "slugSoft12" }
    ];

    useEffect(() => {
        // @ts-ignore
        const params = new URLSearchParams(searchParams.toString())
        if(selectedFrameworks.length > 0) {
            // @ts-ignore
            params.set("tag", selectedFrameworks)
        }else{
            params.delete("tag")
        }
        const queryString = params.toString();
        const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
        // @ts-ignore
        router.push(updatedPath);
    }, [JSON.stringify(selectedFrameworks)]);

    if(selectedFrameworks.length > 0){
        arrProjects = arrProjects.filter((el)=> el.soft.some(e => selectedFrameworks.some((el)=> e.slug === el)))
    }
    return (
        <>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl my-10'> Projects </h1>
                <MultiSelect
                    options={frameworksList}
                    onValueChange={setSelectedFrameworks}
                    defaultValue={selectedFrameworks}
                    placeholder="Select tags"
                    variant="inverted"
                    animation={2}
                    className="w-64 h-5 ml-5"
                    maxCount={0}
                />
            </div>
            {arrProjects.map(item => {
                return (
                    <ProjectCard
                        key={item.id}
                        params={{ project: item }}
                    />
                )
            })}
            <ThePagination />
        </>
    )
}