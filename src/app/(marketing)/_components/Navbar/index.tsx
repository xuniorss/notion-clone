'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import { Logo } from '../Logo'

export const Navbar = () => {
	const scrolled = useScrollTop()

	return (
		<header
			className={cn(
				'fixed top-0 z-50 flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]',
				scrolled && 'border-b shadow-sm',
			)}
		>
			<Logo />
			<section className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
				<ModeToggle />
			</section>
		</header>
	)
}
