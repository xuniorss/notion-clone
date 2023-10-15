'use client'

import { Spinner } from '@/components/spinner'
import { useConvexAuth } from 'convex/react'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { Navigation } from './_components/Navigation'

export default function MainLayout({ children }: { children: ReactNode }) {
	const { isAuthenticated, isLoading } = useConvexAuth()

	if (isLoading) {
		return (
			<span className="flex h-full items-center justify-center">
				<Spinner size="lg" />
			</span>
		)
	}

	if (!isAuthenticated) return redirect('/')

	return (
		<section className="flex h-full dark:bg-[#1F1F1F]">
			<Navigation />
			<main className="h-full flex-1 overflow-y-auto">{children}</main>
		</section>
	)
}
