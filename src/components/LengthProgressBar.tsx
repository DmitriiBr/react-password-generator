import { useState, MouseEvent, ChangeEvent, useCallback, memo } from 'react'

export const LengthProgressBar = memo(() => {
	const [passwordLength, setPasswordLength] = useState(8)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPasswordLength(() => Number(event.target.value) / 10)
	}

	const handleMouseUp = useCallback(() => {
		if (passwordLength % 10 !== 0) {
			setPasswordLength((prev) => Math.round(prev))
		}
	}, [passwordLength])

	return (
		<>
			<div className="px-2 py-4">
				<section className="flex justify-between items-center mb-4">
					<span className="text-gray-100 mr-6">Password length</span>
					<span className="text-gray-100">{Math.floor(passwordLength)}</span>
				</section>
				<input
					type="range"
					className="
						password-length-range
						p-0 h-2 bg-green-200 rounded-full w-full appearance-none
						focus:outline-none focus:ring-0 focus:shadow-none
						cursor-pointer
					"
					step="1"
					min="60"
					max="180"
					value={passwordLength * 10}
					onChange={handleChange}
					onMouseUp={handleMouseUp}
				/>
			</div>
		</>
	)
})

LengthProgressBar.displayName = 'LengthProgressBar'
