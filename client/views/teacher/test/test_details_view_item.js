Template.testDetailsViewItem.helpers({
	getStatusColor: function(){
		if (this.status === 'pending'){
			return 'warning';
		}
		else if (this.status === 'completed'){
			return 'success';
		}
		else if (this.status === 'in-progress'){
			return 'danger';
		}
		else {
			return 'info';
		}
	},

	getQuestionsLength: function(){
		return this.questions ? this.questions.length : 0;
	},

	checkPendingStatus: function(){
		return this.status === 'pending';
	}
});

Template.testDetailsViewItem.events({
	'click .glyphicon-trash': function (e) {
		e.preventDefault();

		if(confirm("Delete this Test?")) {
			var currentTestId = this._id;
			Tests.remove(currentTestId);
			Notifications.success('Delete Successful', 'Successfully deleted Test');
		}
		else{
			Notifications.error('Delete Unsuccessful', 'Delete failed');
		}
	}
	,

	//event to handle starting a Test
	'click .glyphicon-play': function(e){
		//e.preventDefault();

		//create an instance of TestResult for all students

		//start the timer for the Test

		//Route to the Administer-Test Screen



		//preserve the reference to the test
		var test = this;

		//change test status to pending
		// this.status = 'in-progress';
		Tests.update(this._id, {$set: {status: 'in-progress'}})
		
		//retrieve all students
		//for each student, create an instance of TestResult
		//passing in student_id, test_id and array of questions
		var students = Students.find({aclass: this.aclass}, {fields: {_id: 1, name: 1}});

		var testResult = null;

		console.log(students.count());

		students.forEach(function (student) {
			testResult = {
				test_id: test._id,
				test_title: test.title,
				student_id: student._id,
				student_name: student.name,
				test_results: test.questions,
				created: new Date().getTime()
			}
			console.log('Inserting');

			var tr = TestResults.insert(testResult);

			// if (tr) {
			// 	testResult._id = tr;
			// 	studentResults.push(testResult);
			// }

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

	}
});