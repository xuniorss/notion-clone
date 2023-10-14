import Image from 'next/image'

export const Heroes = () => {
	return (
		<section className="flex max-w-5xl flex-col items-center justify-center">
			<section className="flex items-center">
				<div className="relative h-[18.75rem] w-[18.75rem] sm:h-[21.875rem] sm:w-[21.875rem] md:h-[25rem] md:w-[25rem]">
					<Image
						src="/documents.png"
						fill
						className="object-contain"
						alt="Document"
					/>
				</div>
				<div className="relative hidden h-[25rem] w-[25rem] md:block">
					<Image
						src="/reading.png"
						fill
						className="object-contain"
						alt="Reading"
					/>
				</div>
			</section>
		</section>
	)
}
