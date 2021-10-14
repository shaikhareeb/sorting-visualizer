import { useCallback, useEffect, useState } from "react";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
	const [values, setValues] = useState([]);

	const randomVal = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const resetArr = useCallback(() => {
		const arr = [];
		for (let i = 0; i < 320; i++) {
			arr.push(randomVal(1, 500));
		}
		return arr;
	}, []);

	const mergeSort = () => {};

	useEffect(() => {
		setValues(resetArr());
	}, [resetArr]);

	return (
		<>
			<div className="container">
				{values.map((val, idx) => (
					<div style={{ height: `${val}px` }} className="bar" key={idx}></div>
				))}
			</div>
			<button onClick={() => setValues(resetArr)}>New Array</button>
			<button onClick={() => mergeSort()}>Merge Sort</button>
		</>
	);
};

export default SortingVisualizer;
