function getArrayParams(...arr) {
	let min = arr[0],
		max = arr[0],
		sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}

	let avg = sum / arr.length;
	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};
}

function summElementsWorker(...arr) {
	let sumElem = 0;
	for (let i = 0; i < arr.length; i++) {
		sumElem += arr[i];
	}
	return sumElem;
}

function differenceMaxMinWorker(...arr) {
	let min = arr[0],
		max = arr[0],
		diffMaxMin;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	diffMaxMin = max - min;

	if (arr[0] == undefined) {
		diffMaxMin = 0;
	}
	return diffMaxMin;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0,
		sumOddElement = 0,
		diffEvenOdd;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	diffEvenOdd = sumEvenElement - sumOddElement;
	return diffEvenOdd;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0,
		countEvenElement = 0,
		avgEvenElements;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	avgEvenElements = sumEvenElement / countEvenElement;

	if (arr[0] === undefined) {
		avgEvenElements = 0;
	}

	return avgEvenElements;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	const result = [];
	for (let i = 0; i < arrOfArr.length; i++) {
		result[i] = func(...arrOfArr[i]);
		if (result[i] > maxWorkerResult) {
			maxWorkerResult = result[i];
		}
	}
	return maxWorkerResult
}