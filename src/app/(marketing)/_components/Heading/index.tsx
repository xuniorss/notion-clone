'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const Heading = () => {
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
			<Button>
				Acesse Jotion
				<ArrowRight className="ml-2 h-4 w-4" />
			</Button>
		</section>
	)
}
