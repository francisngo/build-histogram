const list = [2, 4, 5, 2, 3, 4];

function buildObjectBySeenCount(list) {
	const result = {};

	list.forEach((item) => {
		if (!result[item]) {
			result[item] = 0;
		}
		result[item] += 1;
	});

	return result;
}

function buildHistogram() {
	const data = buildObjectBySeenCount(list);
	const leftAxis = document.querySelectorAll(".left-axis")[0];
	const bottomAxis = document.querySelectorAll(".bottom-axis")[0];
	const contentAxis = document.querySelectorAll(".content")[0];
	const leftAxisValues = [];

	for (const key in data) {
		const val = data[key];

		if (leftAxisValues.indexOf(val) === -1) {
			leftAxisValues.push(val);
		}
	}

	leftAxisValues.forEach((item) => {
		const leftAxisElement = document.createElement("div");
		leftAxisElement.textContent = item;
		leftAxis.append(leftAxisElement);
	});

	for (const key in data) {
		const val = data[key];

		const keyElement = document.createElement("div");
		keyElement.textContent = key;

		const valElement = document.createElement("div");
		valElement.style.height =
			(val / Math.max(...leftAxisValues)) * 100 + "%";

		bottomAxis.append(keyElement);
		contentAxis.append(valElement);
	}
}

buildHistogram();
