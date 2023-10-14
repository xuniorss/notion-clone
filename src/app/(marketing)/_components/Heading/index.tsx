'use client'

import { Spinner } from '@/components/spinner'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const Heading = () => {
	const { isAuthenticated, isLoading } = useConvexAuth()

	return (
		<section className="max-w-3xl space-y-4">
			<h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
				Suas ideias, documentos, & planos. Unificado. Bem-vindo ao{' '}
				<span className="underline">Jotion</span>
			</h1>
			<h3 className="text-base font-medium sm:text-xl md:text-2xl">
				Jotion é o espaço de trabalho conectado onde <br /> o trabalho
				melhor e mais rápido acontece.
			</h3>
			{isLoading && (
				<span className="flex w-full items-center justify-center">
					<Spinner size="lg" />
				</span>
			)}
			{isAuthenticated && !isLoading && (
				<Button asChild>
					<Link href="/documents">
						Acesse Jotion
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			)}
			{!isAuthenticated && !isLoading && (
				<SignInButton mode="modal">
					<Button>
						Obter Jotion free
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</SignInButton>
			)}
		</section>
	)
}
