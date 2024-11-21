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
import { PAGES } from '@/config/pages-url.config'
import ItemTag from '@/components/ItemTag'

type Props = {
	params: {
		tags: ITag[],
		link: string
	}
}

export default function ContainerTags({ params: { tags, link } }: Props) {
	return (
		<>
			<div className='my-7 mx-4'>
				{tags.map(tag => {
					return (
						<>
							<span className='pr-4 inline-block'>
								<ItemTag
									params={{
										tag: tag,
										link: link,
									}}
								/>
							</span>
						</>
					)
					// return (<ItemTag key={item} params={{slugArticle: item}}/>)
				})}
			</div>
		</>
	)
}
