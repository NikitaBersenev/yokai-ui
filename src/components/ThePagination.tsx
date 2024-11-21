'use client'

import { Cat, Dog, Fish, Rabbit, Turtle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { MultiSelect } from '@/components/MultiSelect'
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
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '@/components/ui/pagination'

import { IArticle, ISoft } from '@/types/article.types'

import ArticleCard from '@/app/article/[slugArticle]/ArticleCard'

export default function ThePagination() {
	return (
		<>
			<div className="my-10">
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href='#' />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href='#'>1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								href='#'
								isActive
							>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href='#'>3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href='#' />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</>
	)
}
