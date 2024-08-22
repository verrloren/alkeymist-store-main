interface ContainerProps {
	children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
	return (
		<div className="mx-auto max-w-[80rem]">
			{children}
		</div>
	)
}
