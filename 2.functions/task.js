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
	if (arr.length == 0) {
		diffMaxMin = 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		diffMaxMin = max - min;
	}
	return diffMaxMin;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0,
		sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0,
		countEvenElement = 0,
		avgEvenElements;

	if (arr.length == 0) {
		avgEvenElements = 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
		avgEvenElements = sumEvenElement / countEvenElement;
	}


	return avgEvenElements;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		if (func(...arrOfArr[i]) > maxWorkerResult) {
			maxWorkerResult = func(...arrOfArr[i]);
		}
	}
	return maxWorkerResult
}