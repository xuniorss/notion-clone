import { Button } from '@/components/ui/button'
import { Logo } from '../Logo'

export const Footer = () => {
	return (
		<footer className="z-50 flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]">
			<Logo />
			<section className="flex w-full items-center justify-between gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
				<Button variant="ghost" size="sm">
					Política de Privacidade
				</Button>
				<Button variant="ghost" size="sm">
					Termos & Condições
				</Button>
			</section>
		</footer>
	)
}
