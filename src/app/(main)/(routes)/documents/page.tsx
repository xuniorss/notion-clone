'use client'

import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { useMutation } from 'convex/react'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'
import { api } from '../../../../../convex/_generated/api'

export default function DocumentsPage() {
	const { user } = useUser()
	const create = useMutation(api.documents.create)

	const onCreate = () => {
		const promise = create({ title: 'Sem título' })

		toast.promise(promise, {
			loading: 'Criando uma nova nota...',
			success: 'Nova nota criada!',
			error: 'Falha ao criar uma nova nota.',
		})
	}

	return (
		<section className="flex h-full flex-col items-center justify-center space-y-4">
			<Image
				src="/empty.png"
				height="300"
				width="300"
				alt="Empty"
				className="dark:hidden"
			/>
			<Image
				src="/empty-dark.png"
				height="300"
				width="300"
				alt="Empty"
				className="hidden dark:block"
			/>
			<h2 className="text-lg font-medium">
				Bem-vindo ao Jotion {user?.firstName}
			</h2>
			<Button onClick={onCreate}>
				<PlusCircle className="mr-2 h-4 w-4" />
				Crie uma nota
			</Button>
		</section>
	)
}
