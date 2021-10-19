export const bubbleSortAni = (arr) => {
	const ani = [];
	if (arr.length <= 1) return arr;
	bubbleSort(arr, ani);
	return ani;
};

const bubbleSort = (arr, ani) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			ani.push([j, j + 1]);
			ani.push([j, j + 1]);
			if (arr[j] > arr[j + 1]) {
				ani.push([j, arr[j + 1], j + 1, arr[j]]);
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			} else {
				ani.push([j, arr[j], j + 1, arr[j + 1]]);
			}
		}
	}
};

export const insertionSortAni = (arr) => {
	const ani = [];
	if (arr.length <= 1) return arr;
	insertionSort(arr, ani);
	console.log(ani);
	return ani;
};

const insertionSort = (arr, ani) => {
	for (let i = 1; i < arr.length; i++) {
		let val = arr[i];
		let j = i - 1;
		while (j >= 0 && val < arr[j]) {
			ani.push([j, j + 1]);
			ani.push([j, j + 1, j]);
			ani.push([j + 1, arr[j], j, val]);
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = val;
	}
	return arr;
};

export const selectionSortAni = (arr) => {
	const ani = [];
	if (arr.length <= 1) return arr;
	selectionSort(arr, ani);
	return ani;
};

const selectionSort = (arr, ani) => {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			ani.push([min, j]);
			ani.push([min, j, j]);
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (min !== i) {
			ani.push([i, arr[min], min, arr[i]]);
			let temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
	return arr;
};
