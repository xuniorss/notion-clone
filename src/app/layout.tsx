import { cn } from '@/lib/utils'
import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Jotion',
	description:
		'O espaço de trabalho conectado onde o trabalho melhor e mais rápido acontece.',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/logo.svg',
				href: '/logo.svg',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/logo-dark.svg',
				href: '/logo-dark.svg',
			},
		],
	},
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={cn('antialiased', inter.className)}>{children}</body>
		</html>
	)
}
