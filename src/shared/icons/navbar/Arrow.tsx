const Arrow = ({ fill, width }: IIcon) => {
	return (
		<svg
			width='13'
			height='23'
			viewBox='0 0 13 23'
			stroke={fill}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M11 1.5L2.41421 10.0858C1.63316 10.8668 1.63317 12.1332 2.41421 12.9142L11 21.5'
				stroke-width='3'
				stroke-linecap='round'
			/>
		</svg>
	)
}

export default Arrow
