'use client'

import Image from 'next/image'
import { useState } from 'react'

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command"
import Logo from '@/components/Logo'
import TheNavigation from '@/components/TheNavigation'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'

import { useMediaQuery } from '@/hooks/use-media-query'

export function DrawerDialogDemo() {
	const [open, setOpen] = useState(false)
	const isDesktop = useMediaQuery('(min-width: 768px)')

	if (isDesktop) {
		return (
			<Dialog
				open={open}
				onOpenChange={setOpen}
			>
				<DialogTrigger asChild>
					<Button variant='outline'>Search on site</Button>
				</DialogTrigger>
				{/*<DialogContent className='sm:max-w-[425px]'>*/}
					<DialogContent className='sm:max-w-xl sm:max-h-xl'>
					{/*<Command className="rounded-lg border shadow-md md:min-w-[450px]">*/}
						<Command>
						<CommandInput placeholder="Type a command or search..." />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							{/*<CommandGroup heading="Suggestions">*/}
							{/*	<CommandItem>*/}
							{/*		<Calendar />*/}
							{/*		<span>Calendar</span>*/}
							{/*	</CommandItem>*/}
							{/*	<CommandItem>*/}
							{/*		<Smile />*/}
							{/*		<span>Search Emoji</span>*/}
							{/*	</CommandItem>*/}
							{/*	<CommandItem disabled>*/}
							{/*		<Calculator />*/}
							{/*		<span>Calculator</span>*/}
							{/*	</CommandItem>*/}
							{/*</CommandGroup>*/}
							{/*<CommandSeparator />*/}
							{/*<CommandGroup heading="Settings">*/}
							{/*	<CommandItem>*/}
							{/*		<User />*/}
							{/*		<span>Profile</span>*/}
							{/*		<CommandShortcut>⌘P</CommandShortcut>*/}
							{/*	</CommandItem>*/}
							{/*	<CommandItem>*/}
							{/*		<CreditCard />*/}
							{/*		<span>Billing</span>*/}
							{/*		<CommandShortcut>⌘B</CommandShortcut>*/}
							{/*	</CommandItem>*/}
							{/*	<CommandItem>*/}
							{/*		<Settings />*/}
							{/*		<span>Settings</span>*/}
							{/*		<CommandShortcut>⌘S</CommandShortcut>*/}
							{/*	</CommandItem>*/}
							{/*</CommandGroup>*/}
						</CommandList>
					</Command>
					{/*<DialogHeader>*/}
					{/*	<DialogTitle>Search on site</DialogTitle>*/}
					{/*	<DialogDescription>*/}
					{/*		Make changes to your profile here. Click save when*/}
					{/*		you're done.*/}
					{/*	</DialogDescription>*/}
					{/*</DialogHeader>*/}
					{/*111*/}

					{/*/!*<ProfileForm />*!/*/}
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer
			open={open}
			onOpenChange={setOpen}
		>
			<DrawerTrigger asChild>
				<Button variant='outline'>Search on site</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className='text-left'>
					<DrawerTitle>Search on site</DrawerTitle>
					<DrawerDescription>
						Make changes to your profile here. Click save when
						you're done.
					</DrawerDescription>
				</DrawerHeader>
				222
				{/*<ProfileForm className="px-4" />*/}
				<DrawerFooter className='pt-2'>
					<DrawerClose asChild>
						<Button variant='outline'>Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default function TheHeader() {
	return (
		<>
			<header className='flex items-center justify-center h-20   bg-background border-b px-4'>
				<div className='flex-1'>
					<Logo />
				</div>
					<TheNavigation />
				<div className='flex-1 flex justify-end'>
					<DrawerDialogDemo />
				</div>
				{/*<div className="flex-1 flex mr-0">*/}
				{/*</div>*/}
				{/*<div className=""></div>*/}
				{/*<div className="flex-1">*/}
				{/*</div>*/}
			</header>
		</>
	)
}
