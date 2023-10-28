'use client'

import { cn } from '@/lib/utils'
import { useMutation } from 'convex/react'
import { ChevronsLeft, PlusCircle, Search, Settings } from 'lucide-react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { ElementRef, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { useMediaQuery } from 'usehooks-ts'
import { api } from '../../../../../convex/_generated/api'
import { Item } from '../Item'
import { UserItem } from '../UserItem'

export const Navigation = () => {
	const router = useRouter()
	//   const settings = useSettings();
	//   const search = useSearch();
	const params = useParams()
	const pathname = usePathname()
	const isMobile = useMediaQuery('(max-width: 768px)')
	const create = useMutation(api.documents.create)

	const isResizingRef = useRef(false)
	const sidebarRef = useRef<ElementRef<'aside'>>(null)
	const navbarRef = useRef<ElementRef<'div'>>(null)
	const [isResetting, setIsResetting] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(isMobile)

	useEffect(() => {
		if (isMobile) collapse()
		else resetWidth()
	}, [isMobile])

	useEffect(() => {
		if (isMobile) collapse()
	}, [pathname, isMobile])

	const handleMouseDown = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		event.preventDefault()
		event.stopPropagation()

		isResizingRef.current = true
		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseup', handleMouseUp)
	}

	const handleMouseMove = (event: MouseEvent) => {
		if (!isResizingRef.current) return
		let newWidth = event.clientX

		if (newWidth < 240) newWidth = 240
		if (newWidth > 480) newWidth = 480

		if (sidebarRef.current && navbarRef.current) {
			sidebarRef.current.style.width = `${newWidth}px`
			navbarRef.current.style.setProperty('left', `${newWidth}px`)
			navbarRef.current.style.setProperty(
				'width',
				`calc(100% - ${newWidth}px)`,
			)
		}
	}

	const handleMouseUp = () => {
		isResizingRef.current = false
		document.removeEventListener('mousemove', handleMouseMove)
		document.removeEventListener('mouseup', handleMouseUp)
	}

	const resetWidth = () => {
		if (sidebarRef.current && navbarRef.current) {
			setIsCollapsed(false)
			setIsResetting(true)

			sidebarRef.current.style.width = isMobile ? '100%' : '15rem'
			navbarRef.current.style.setProperty(
				'width',
				isMobile ? '0' : 'calc(100% - 15rem)',
			)
			navbarRef.current.style.setProperty(
				'left',
				isMobile ? '100%' : '15rem',
			)
			setTimeout(() => setIsResetting(false), 300)
		}
	}

	const collapse = () => {
		if (sidebarRef.current && navbarRef.current) {
			setIsCollapsed(true)
			setIsResetting(true)

			sidebarRef.current.style.width = '0'
			navbarRef.current.style.setProperty('width', '100%')
			navbarRef.current.style.setProperty('left', '0')
			setTimeout(() => setIsResetting(false), 300)
		}
	}

	const handleCreate = () => {
		const promise = create({ title: 'Sem título' }).then((documentId) =>
			router.push(`/documents/${documentId}`),
		)

		toast.promise(promise, {
			loading: 'Criando uma nova nota...',
			success: 'Nova nota criada!',
			error: 'Falha ao criar uma nova nota.',
		})
	}

	return (
		<>
			<aside
				ref={sidebarRef}
				className={cn(
					'group/sidebar relative z-[99999] flex h-full w-60 flex-col overflow-y-auto bg-secondary',
					isResetting && 'transition-all duration-300 ease-in-out',
					isMobile && 'w-0',
				)}
			>
				<div
					onClick={collapse}
					role="button"
					aria-label="collapse sidebar"
					className={cn(
						'absolute right-2 top-3 h-6 w-6 rounded-sm text-muted-foreground opacity-0 transition hover:bg-neutral-300 group-hover/sidebar:opacity-100 dark:hover:bg-neutral-600',
						isMobile && 'opacity-100',
					)}
				>
					<ChevronsLeft className="h-6 w-6" />
				</div>
				<div>
					<UserItem />
					<Item
						label="Procurar"
						icon={Search}
						isSearch
						onClick={() => {}}
					/>
					<Item label="Configurações" icon={Settings} onClick={() => {}} />
					<Item
						onClick={handleCreate}
						label="Nova página"
						icon={PlusCircle}
					/>
				</div>
				<div className="mt-4">
					{/* <DocumentList />
          <Item
            onClick={handleCreate}
            icon={Plus}
            label="Add a page"
          />
          <Popover>
            <PopoverTrigger className="w-full mt-4">
              <Item label="Trash" icon={Trash} />
            </PopoverTrigger>
            <PopoverContent
              className="p-0 w-72"
              side={isMobile ? "bottom" : "right"}
            >
              <TrashBox />
            </PopoverContent>
          </Popover> */}
				</div>
				<div
					onMouseDown={handleMouseDown}
					onClick={resetWidth}
					className="absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-primary/10 opacity-0 transition group-hover/sidebar:opacity-100"
				/>
			</aside>
			<div
				ref={navbarRef}
				className={cn(
					'absolute left-60 top-0 z-[99999] w-[calc(100%-15rem)]',
					isResetting && 'transition-all duration-300 ease-in-out',
					isMobile && 'left-0 w-full',
				)}
			>
				{/* {!!params.documentId ? (
          <Navbar
            isCollapsed={isCollapsed}
            onResetWidth={resetWidth}
          />
        ) : (
          <nav className="bg-transparent px-3 py-2 w-full">
            {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6 text-muted-foreground" />}
          </nav>
        )} */}
			</div>
		</>
	)
}
