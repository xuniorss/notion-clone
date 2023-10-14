import { ReactNode } from 'react'
import { Navbar } from './_components/Navbar'

export default function MarketingLayout({ children }: { children: ReactNode }) {
	return (
		<section className="h-full">
			<Navbar />
			<main className="h-full pt-40">{children}</main>
		</section>
	)
}
