Template.administerTest.helpers({
	registerStudents: function (classId) {
		//preserve the reference to the test
		var test = this;
		
		//retrieve all students
		//for each student, create an instance of TestResult
		//passing in student_id, test_id and array of questions
		var students = Students.find({aclass: classId});

		var testResult = null;

		students.forEach(function (student) {
			testResult = {
				student_id: student._id,
				test_id: test._id,
				test_results: test.questions,
				created: new Date().getTime()
			}

			// console.log(testResult)

			// test_result = {
			// 	// student_id: '',
			// 	// test_id: ,
			// 	question_id: this._id,
			// 	question_num: this.question_num,
			// 	selected_option: e.target.id,
			//  	passed: e.target.id === this.answer,
			// 	submitted: new Date().getTime()
			// }
		});

		return students;
	}
});