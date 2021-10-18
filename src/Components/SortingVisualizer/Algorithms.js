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
