import React from 'react'

const Counter = ({count,incrementHandler}) => {
	return (
		<div>
			<h1>Counter:{count}</h1>
			<button onClick={incrementHandler}>Increment</button>
		</div>
	)
}

export default Counter
