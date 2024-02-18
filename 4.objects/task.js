function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks')) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	let summ = 0;
	if (this.marks == undefined || this.marks.length == 0) {
		return 0
	} else {
		for (let i = 0; i < this.marks.length; i++) {
			summ += this.marks[i];
		}
		return summ / this.marks.length
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}