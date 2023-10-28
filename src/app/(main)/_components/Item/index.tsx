'use client'

import { cn } from '@/lib/utils'
import { ChevronDown, ChevronRight, LucideIcon } from 'lucide-react'
import { Id } from '../../../../../convex/_generated/dataModel'

interface ItemProps {
	id?: Id<'documents'>
	documentIcon?: string
	active?: boolean
	expanded?: boolean
	isSearch?: boolean
	level?: number
	onExpand?: () => void
	label: string
	onClick: () => void
	icon: LucideIcon
}

/**
 * @component
 *
 * @name Item
 *
 * @description Componente que representa um item de menu.
 *
 * @example
 * // Exemplo de uso do componente Item
 * <Item
 *   label="Meu Item de Menu"
 *   onClick={() => handleItemClick()}
 *   icon={LucideIcon.ExampleIcon}
 *   active={true}
 *   expanded={false}
 *   isSearch={false}
 *   level={2}
 *   onExpand={() => handleExpandClick()}
 * />
 *
 * @param {string} label - O rótulo a ser exibido para o item.
 * @param {function} onClick - A ação a ser executada quando o item é clicado.
 * @param {LucideIcon} icon - O ícone associado ao item.
 * @param {Id<'documents'>|undefined} [id=undefined] - Id do documento.
 * @param {boolean} [active=false] - Indica se o item está ativo.
 * @param {string} [documentIcon=undefined] - Ícone de documento personalizado.
 * @param {boolean} [expanded=false] - Indica se o item está expandido.
 * @param {boolean} [isSearch=false] - Indica se o componente está sendo usado para pesquisa.
 * @param {number} [level=0] - O nível de aninhamento do item.
 * @param {function} [onExpand=undefined] - Ação a ser executada quando o item é expandido.
 */

export const Item = ({
	id,
	label,
	onClick,
	icon: Icon,
	active = false,
	documentIcon,
	isSearch = false,
	level = 0,
	onExpand,
	expanded = false,
}: ItemProps) => {
	const ChevronIcon = expanded ? ChevronDown : ChevronRight

	return (
		<div
			onClick={onClick}
			role="button"
			style={{ paddingLeft: level ? `${level * 12 + 12}px` : '0.75rem' }}
			className={cn(
				'group flex min-h-[1.6875rem] w-full items-center py-1 pr-3 text-sm font-medium text-muted-foreground hover:bg-primary/5',
				active && 'bg-primary/5 text-primary',
			)}
		>
			{!!id && (
				<span
					role="button"
					className="mr-1 h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600"
					onClick={() => {}}
				>
					<ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
				</span>
			)}
			{documentIcon ? (
				<span className="mr-2 shrink-0 text-[1.125rem]">
					{documentIcon}
				</span>
			) : (
				<Icon className="mr-2 h-[1.125rem] shrink-0 text-muted-foreground" />
			)}
			<span className="truncate">{label}</span>
			{isSearch && (
				<kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[0.625rem] font-medium text-muted-foreground opacity-100">
					<span className="text-xs">CTRL</span>K
				</kbd>
			)}
		</div>
	)
}
