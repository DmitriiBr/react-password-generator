import { LengthProgressBar } from './LengthProgressBar'

export const Content = () => {
	return (
		<div className="h-1/2 w-1/2">
			<h1 className="text-gray-400 mb-6 text-center font-bold">Password generator</h1>
			<div className="bg-gray-700 rounded-md p-2 border-gray-500 border shadow-2xl mb-4">
				<b className="text-gray-100 px-2 py-1 text-2xl">Some password</b>
			</div>
			<div className="bg-gray-700 rounded-md p-2 border-gray-500 border shadow-2xl">
				<LengthProgressBar />
			</div>
		</div>
	)
}

Content.displayName = 'Content'
