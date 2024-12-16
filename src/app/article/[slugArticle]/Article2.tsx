import { Tag } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import Welcome from '@/app/markdown/welcome.mdx'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import ItemTag from '@/components/ItemTag'
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

import { IArticle, ISoft } from '@/types/article.types'

import ArticleCard from '@/app/article/[slugArticle]/ArticleCard'
import { PAGES } from '@/config/pages-url.config'
import ContainerTags from '@/components/ContainerTags'

type Props = {
	params: {
		slugArticle: string
	}
}

export default function Article2({ params: { slugArticle } }: Props) {
	let data = [1, 2, 3, 4, 5]
	let type = 'Article'

	// const softObj: ISoft = {
	// 	name: 'nameSoft1',
	// 	language: 'languageSoft1'
	// }
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

	// const matterResult = matter(fileContents);
	// const processedContent = await remark()
	//     .use(html)
	//     .process(matterResult.content);
	// const contentHtml = processedContent.toString();
	const markdown = `
      ## _The Last Markdown Editor, Ever_
      `

	const markdownContent = `
  # Пример Markdown

  Этот текст отрендерен из переменной.

  - Элемент 1
  - Элемент 2

  **Enjoy Markdown!**
  `

	return (
		<>
			<div className='mx-1 sm:mx-1 md:mx-1 lg:mx-10 xl:mx-25 2xl:mx-20'>
				{/*<MarkdownRenderer content={markdownContent} />*/}
				<div className='text-4xl my-9'>Как устроены каналы в Go</div>
				<div className='my-5 text-base	'>
					Go становится всё популярнее и популярнее, и одна из причин
					этого — великолепная поддержка конкурентного
					программирования. Каналы и горутины сильно упрощают
					разработку конкурентных программ. Есть несколько хороших
					статей о том, как реализованы различные структуры данных в
					Go — к примеру, слайсы, карты, интерфейсы — но про
					внутреннюю реализацию каналов написано довольно мало. В этой
					статье мы изучим, как работают каналы и как они реализованы
					изнутри. (Если вы никогда не использовали каналы в Go,
					рекомендую сначала прочитать эту статью.)
				</div>
				<div className='text-3xl mt-10 pt-8 pb-5 border-t'>
					Устройство канала
				</div>
				<a className=''>Book for golang</a>
				<ul className='leading-8 list-decimal ml-4'>
					<li>qcount — количество элементов в буфере</li>
					<li>dataqsiz — размерность буфера</li>
					<li>buf — указатель на буфер для элементов канала</li>
					<li>closed — флаг, указывающий, закрыт канал или нет</li>
					<li>
						recvq — указатель на связанный список горутин, ожидающих
						чтения из канала
					</li>
					<li>
						sendq -указатель на связанный список горутин, ожидающих
						запись в канал
					</li>
					<li>lock — мьютекс для безопасного доступа к каналу</li>
				</ul>
				{/*<Welcome></Welcome>*/}

				{/*<h1 className="text-4xl my-10"> {type} </h1>*/}

				{/*{data.map(item => {*/}
				{/*    return (*/}
				{/*        <>*/}
				{/*            */}
				{/*            /!*<PrintMarkdown markdown={markdown}/>*!/*/}
				{/*            /!*<ReactMarkdown children={markdown}/>*!/*/}
				{/*            /!*<Card className="my-4">*!/*/}
				{/*            /!*    <CardHeader>*!/*/}
				{/*            /!*        <CardTitle>{type} {item}</CardTitle>*!/*/}
				{/*            /!*        <CardDescription>{type} Description</CardDescription>*!/*/}
				{/*            /!*    </CardHeader>*!/*/}
				{/*            /!*    <CardContent>*!/*/}
				{/*            /!*        <p>{type} Content</p>*!/*/}
				{/*            /!*    </CardContent>*!/*/}
				{/*            /!*    /!*<CardFooter>*!/*!/*/}
				{/*            /!*    /!*    <p>Project Footer</p>*!/*!/*/}
				{/*            /!*    /!*</CardFooter>*!/*!/*/}
				{/*            /!*</Card>*!/*/}
				{/*        </>*/}
				{/*    )*/}
				{/*})}*/}
			</div>
			<div className='mt-10 mb-5 border-t'></div>

			<ContainerTags params={{tags:arrTags, link: PAGES.ARTICLES}}/>
		</>
	)
}
