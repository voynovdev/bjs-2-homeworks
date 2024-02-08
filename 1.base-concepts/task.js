"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c
	if (d === 0) {
		arr[0] = -b / (2 * a);
	} else if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = (percent / 100) / 12,
		n = countMonths,
		s = amount - contribution;
	let payMounth = s * (p + (p / (((1 + p) ** n) - 1)));
	let totalAmount = payMounth * n;
	return Number(totalAmount.toFixed(2));
}