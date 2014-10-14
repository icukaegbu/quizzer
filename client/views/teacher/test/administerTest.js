Template.administerTest.helpers({
	registerStudents: function () {
		return TestResults.find({test_id: this._id})
		//preserve the reference to the test
		// var test = this;
		// var studentResults = [];

		// //change test status to pending
		// // this.status = 'in-progress';
		// Tests.update(this._id, {$set: {status: 'in-progress'}})
		// // Tests.findOne({_id: this._id}).status = 'in-progress';
		// console.log(this);
		
		// //retrieve all students
		// //for each student, create an instance of TestResult
		// //passing in student_id, test_id and array of questions
		// var students = Students.find({aclass: classId}, {fields: {_id: 1, name: 1}});

		// var testResult = null;

		// console.log(students.count());

		// students.forEach(function (student) {
		// 	testResult = {
		// 		test_id: test._id,
		// 		test_title: test.title,
		// 		student_id: student._id,
		// 		student_name: student.name,
		// 		test_results: test.questions,
		// 		created: new Date().getTime()
		// 	}
		// 	console.log('Inserting');

		// 	var tr = TestResults.insert(testResult);

		// 	// if (tr) {
		// 	// 	testResult._id = tr;
		// 	// 	studentResults.push(testResult);
		// 	// }

		// 	// console.log(testResult)

		// 	// test_result = {
		// 	// 	// student_id: '',
		// 	// 	// test_id: ,
		// 	// 	question_id: this._id,
		// 	// 	question_num: this.question_num,
		// 	// 	selected_option: e.target.id,
		// 	//  	passed: e.target.id === this.answer,
		// 	// 	submitted: new Date().getTime()
		// 	// }
		// });

		//return students;
		//return studentResults;
		//return TestResults.find({test_id: this._id})
	}
});