import { useCallback, useEffect, useState } from "react";
import "./SortingVisualizer.css";
import {
	bubbleSortAni,
	selectionSortAni,
	insertionSortAni,
} from "./Algorithms";

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
				}, i * 1);
			} else {
				setTimeout(() => {
					const [firstBarIdx, firstBarHeight, secondBarIdx, secondBarHeight] =
						ani[i];
					const firstBarStyle = bars[firstBarIdx].style;
					firstBarStyle.height = `${firstBarHeight}px`;
					const secondBarStyle = bars[secondBarIdx].style;
					secondBarStyle.height = `${secondBarHeight}px`;
				}, i * 1);
			}
		}
	};

	console.log(values);
	const selectionSort = () => {
		const ani = selectionSortAni(values);
		for (let i = 0; i < ani.length; i++) {
			const bars = document.getElementsByClassName("bar");
			const isColour = ani[i].length !== 4;
			if (isColour) {
				const [firstBarIdx, secondBarIdx] = ani[i];
				const firstBarStyle = bars[firstBarIdx].style;
				const secondBarStyle = bars[secondBarIdx].style;
				const colour = ani[i].length === 2 ? "red" : "royalblue";
				setTimeout(() => {
					firstBarStyle.backgroundColor = colour;
					secondBarStyle.backgroundColor = colour;
				}, i * 1);
			} else {
				setTimeout(() => {
					const [firstBarIdx, firstBarHeight, secondBarIdx, secondBarHeight] =
						ani[i];
					const firstBarStyle = bars[firstBarIdx].style;
					firstBarStyle.height = `${firstBarHeight}px`;
					const secondBarStyle = bars[secondBarIdx].style;
					secondBarStyle.height = `${secondBarHeight}px`;
				}, i * 1);
			}
		}
	};

	const insertionSort = () => {
		const ani = insertionSortAni(values);
		for (let i = 0; i < ani.length; i++) {
			const bars = document.getElementsByClassName("bar");
			const isColour = ani[i].length !== 4;
			if (isColour) {
				const [firstBarIdx, secondBarIdx] = ani[i];
				const firstBarStyle = bars[firstBarIdx].style;
				const secondBarStyle = bars[secondBarIdx].style;
				const colour = ani[i].length === 2 ? "red" : "royalblue";
				setTimeout(() => {
					firstBarStyle.backgroundColor = colour;
					secondBarStyle.backgroundColor = colour;
				}, i * 200);
			} else {
				setTimeout(() => {
					const [firstBarIdx, firstBarHeight, secondBarIdx, secondBarHeight] =
						ani[i];
					const firstBarStyle = bars[firstBarIdx].style;
					firstBarStyle.height = `${firstBarHeight}px`;
					const secondBarStyle = bars[secondBarIdx].style;
					secondBarStyle.height = `${secondBarHeight}px`;
				}, i * 200);
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
			<button onClick={() => selectionSort()}>Selection Sort</button>
			<button onClick={() => insertionSort()}>Insertion Sort</button>
		</>
	);
};

export default SortingVisualizer;
