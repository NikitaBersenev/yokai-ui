import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import Welcome from '@/app/markdown/welcome.mdx'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { MarkdownRenderer } from '@/components/MarkdownRender'
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

import { IArticle, ISoft, ITag } from '@/types/article.types'
import ArticleCard from '@/app/article/[slugArticle]/ArticleCard'
import { Tag } from 'lucide-react'

type Props = {
	params: {
		tag: ITag,
		link: string
		// text: string,
		// link: string,
		// slug: string,
		// color: string
	}
}

export default function ItemTag({ params: { tag, link } }: Props) {
	let arr: ISoft[] = [
		{
			text: 'nameSoft1',
			slug: 'slug1',
			language: 'languageSoft1'
		},
		{
			text: 'nameSoft1',
			slug: 'slug1',
			language: 'languageSoft1'
		},
		{
			text: 'nameSoft1',
			slug: 'slug1',
			language: 'languageSoft1'
		},
		{
			text: 'nameSoft1',
			slug: 'slug1',
			language: 'languageSoft1'
		}

	]

	let fetchObj: IArticle = {
		slug: 'slug1',
		createdAt: 'createdAt1',
		name: 'name1',
		soft: arr,
		text: 'text1',
		updatedAt: 'updatedAt1',
		id: 'id1'
	}

	return (
		<>
			<Link
				// href={link}
		  		href={{ pathname: link, query: { tag: tag.slug } }}
			>
				{/*text-blue-600 dark:text-blue-500 */}
				<span
					className="font-medium text-[#4493f8] rounded-full py-1 px-3 hover:underline hover:text-white hover:bg-[#1f6feb]   bg-[#121d2f]  ">
					#{tag.text}
				</span>
			</Link>
			{/*{data.map(item => {*/}
			{/*	return ()*/}
			{/*})}*/}
		</>
	)
}
