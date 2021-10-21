import { useCallback, useEffect, useState } from "react";
import "./SortingVisualizer.css";
import {
	bubbleSortAni,
	selectionSortAni,
	insertionSortAni,
	mergeSortAni,
	quickSortAni,
	heapSortAni,
} from "./Algorithms";

const SortingVisualizer = () => {
	const [values, setValues] = useState([]);

	const randomVal = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const resetArr = useCallback(() => {
		const arr = [];
		for (let i = 0; i < 188; i++) {
			arr.push(randomVal(1, 600));
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
				const colour = i % 3 === 0 ? "#ff595e" : "#a1d6e2";
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

	const selectionSort = () => {
		const ani = selectionSortAni(values);
		for (let i = 0; i < ani.length; i++) {
			const bars = document.getElementsByClassName("bar");
			const isColour = ani[i].length !== 4;
			if (isColour) {
				const [firstBarIdx, secondBarIdx] = ani[i];
				const firstBarStyle = bars[firstBarIdx].style;
				const secondBarStyle = bars[secondBarIdx].style;
				const colour = ani[i].length === 2 ? "#ff595e" : "#a1d6e2";
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
				const colour = ani[i].length === 2 ? "#ff595e" : "#a1d6e2";
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

	const mergeSort = () => {
		const ani = mergeSortAni(values);
		for (let i = 0; i < ani.length; i++) {
			const bars = document.getElementsByClassName("bar");
			const isColour = i % 3 !== 2;
			if (isColour) {
				const [firstBarIdx, secondBarIdx] = ani[i];
				const firstBarStyle = bars[firstBarIdx].style;
				const secondBarStyle = bars[secondBarIdx].style;
				const colour = i % 3 === 0 ? "#ff595e" : "#a1d6e2";
				setTimeout(() => {
					firstBarStyle.backgroundColor = colour;
					secondBarStyle.backgroundColor = colour;
				}, i * 10);
			} else {
				setTimeout(() => {
					const [firstBarIdx, firstBarHeight] = ani[i];
					const firstBarStyle = bars[firstBarIdx].style;
					firstBarStyle.height = `${firstBarHeight}px`;
				}, i * 10);
			}
		}
	};

	const quickSort = () => {
		const ani = quickSortAni(values);
		for (let i = 0; i < ani.length; i++) {
			const bars = document.getElementsByClassName("bar");
			setTimeout(() => {
				const [firstBarIdx, firstBarHeight, secondBarIdx, secondBarHeight] =
					ani[i];
				const firstBarStyle = bars[firstBarIdx].style;
				firstBarStyle.height = `${firstBarHeight}px`;
				const secondBarStyle = bars[secondBarIdx].style;
				secondBarStyle.height = `${secondBarHeight}px`;
			}, i * 10);
		}
	};

	const heapSort = () => {
		const ani = heapSortAni(values);
		for (let i = 0; i < ani.length; i++) {
			const bars = document.getElementsByClassName("bar");
			setTimeout(() => {
				const [firstBarIdx, firstBarHeight, secondBarIdx, secondBarHeight] =
					ani[i];
				const firstBarStyle = bars[firstBarIdx].style;
				firstBarStyle.height = `${firstBarHeight}px`;
				const secondBarStyle = bars[secondBarIdx].style;
				secondBarStyle.height = `${secondBarHeight}px`;
			}, i * 10);
		}
	};

	useEffect(() => {
		setValues(resetArr());
	}, [resetArr]);

	return (
		<>
			<header>
				<h1>Sorting Algorithm Visualizer</h1>
				<div className="button-container">
					<button onClick={() => setValues(resetArr)}>New Array</button>
					<div>
						<button className="sort-buttons" onClick={() => bubbleSort()}>
							Bubble Sort
						</button>
						<button className="sort-buttons" onClick={() => selectionSort()}>
							Selection Sort
						</button>
						<button className="sort-buttons" onClick={() => insertionSort()}>
							Insertion Sort
						</button>
						<button className="sort-buttons" onClick={() => mergeSort()}>
							Merge Sort
						</button>
						<button className="sort-buttons" onClick={() => quickSort()}>
							Quick Sort
						</button>
						<button className="sort-buttons" onClick={() => heapSort()}>
							Heap Sort
						</button>
					</div>
				</div>
			</header>
			<div className="container">
				{values.map((val, idx) => (
					<div style={{ height: `${val}px` }} className="bar" key={idx}></div>
				))}
			</div>
		</>
	);
};

export default SortingVisualizer;
