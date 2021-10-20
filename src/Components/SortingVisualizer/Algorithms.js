const swap = (arr, leftIdx, rightIdx) => {
	let temp = arr[leftIdx];
	arr[leftIdx] = arr[rightIdx];
	arr[rightIdx] = temp;
};

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
				swap(arr, j, j + 1);
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
			swap(arr, i, min);
		}
	}
	return arr;
};

export const mergeSortAni = (arr) => {
	const ani = [];
	if (arr.length <= 1) return arr;
	const auxArr = arr.slice();
	mergeSort(arr, 0, arr.length - 1, auxArr, ani);
	return ani;
};

const mergeSort = (arr, startIdx, endIdx, auxArr, ani) => {
	if (startIdx === endIdx) return;
	const middleIdx = Math.floor((startIdx + endIdx) / 2);
	mergeSort(auxArr, startIdx, middleIdx, arr, ani);
	mergeSort(auxArr, middleIdx + 1, endIdx, arr, ani);
	merge(arr, startIdx, middleIdx, endIdx, auxArr, ani);
};

const merge = (arr, startIdx, middleIdx, endIdx, auxArr, ani) => {
	let k = startIdx;
	let i = startIdx;
	let j = middleIdx + 1;
	while (i <= middleIdx && j <= endIdx) {
		ani.push([i, j]);
		ani.push([i, j]);
		if (auxArr[i] <= auxArr[j]) {
			ani.push([k, auxArr[i]]);
			arr[k++] = auxArr[i++];
		} else {
			ani.push([k, auxArr[j]]);
			arr[k++] = auxArr[j++];
		}
	}
	while (i <= middleIdx) {
		ani.push([i, i]);
		ani.push([i, i]);
		ani.push([k, auxArr[i]]);
		arr[k++] = auxArr[i++];
	}
	while (j <= endIdx) {
		ani.push([j, j]);
		ani.push([j, j]);
		ani.push([k, auxArr[j]]);
		arr[k++] = auxArr[j++];
	}
};

export const quickSortAni = (arr) => {
	const ani = [];
	if (arr.length <= 1) return arr;
	quickSort(arr, 0, arr.length - 1, ani);
	return ani;
};

const quickSort = (arr, left, right, ani) => {
	let i;
	if (arr.length > 1) {
		i = split(arr, left, right, ani);
		if (left < i - 1) {
			quickSort(arr, left, i - 1, ani);
		}
		if (i < right) {
			quickSort(arr, i, right, ani);
		}
	}
	return arr;
};

const split = (arr, left, right, ani) => {
	let pivot = arr[Math.floor((right + left) / 2)],
		i = left,
		j = right;
	while (i <= j) {
		while (arr[i] < pivot) {
			i++;
		}
		while (arr[j] > pivot) {
			j--;
		}
		if (i <= j) {
			ani.push([i, arr[j], j, arr[i]]);
			swap(arr, i, j);
			i++;
			j--;
		}
	}
	return i;
};

export const heapSortAni = (arr) => {
	const ani = [];
	if (arr.length <= 1) return arr;
	heapSort(arr, ani);
	return ani;
};

const heapSort = (arr, ani) => {
	let len = arr.length;
	for (let i = Math.floor(len / 2 - 1); i >= 0; i--) {
		heapify(arr, len, i, ani);
	}
	for (let i = len - 1; i >= 0; i--) {
		ani.push([0, arr[i], i, arr[0]]);
		swap(arr, 0, i);
		heapify(arr, i, 0, ani);
	}
};

const heapify = (arr, size, i, ani) => {
	let max = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	if (left < size && arr[left] > arr[max]) max = left;
	if (right < size && arr[right] > arr[max]) max = right;
	if (max !== i) {
		ani.push([i, arr[max], max, arr[i]]);
		swap(arr, i, max);
		heapify(arr, size, max, ani);
	}
};
