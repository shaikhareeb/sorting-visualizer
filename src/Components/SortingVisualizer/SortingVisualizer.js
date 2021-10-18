import { useCallback, useEffect, useState } from "react";
import "./SortingVisualizer.css";
import { bubbleSortAni } from "./Algorithms";

const SortingVisualizer = () => {
	const [values, setValues] = useState([]);

	const randomVal = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const resetArr = useCallback(() => {
		const arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(randomVal(1, 500));
		}
		return arr;
	}, []);

	const bubbleSort = () => {
		const ani = bubbleSortAni(values);
		for (let i = 0; i < ani.length; i++) {
			const bars = document.getElementsByClassName("bar");
			const isColour = i % 3 !== 2;
			if (isColour) {
				const [firstBarIdx, secondBarIdx] = ani[i];
				const firstBarStyle = bars[firstBarIdx].style;
				const secondBarStyle = bars[secondBarIdx].style;
				const colour = i % 3 === 0 ? "red" : "royalblue";
				setTimeout(() => {
					firstBarStyle.backgroundColor = colour;
					secondBarStyle.backgroundColor = colour;
				}, i * 100);
			} else {
				setTimeout(() => {
					const [firstBarIdx, firstBarHeight, secondBarIdx, secondBarHeight] =
						ani[i];
					const firstBarStyle = bars[firstBarIdx].style;
					firstBarStyle.height = `${firstBarHeight}px`;
					const secondBarStyle = bars[secondBarIdx].style;
					secondBarStyle.height = `${secondBarHeight}px`;
				}, i * 100);
			}
		}
	};

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
			<button onClick={() => bubbleSort()}>Bubble Sort</button>
		</>
	);
};

export default SortingVisualizer;
