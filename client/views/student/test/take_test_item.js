Template.takeTestItem.events({
	'change .radio': function (e, template) {
		var t = template;
		var testId = Session.get('testId');
		var studentId = Session.get('studentId');
		var test_result = null;

		//if it has not been clicked before, set the class else leave it
		if ( !(t.$('div.answered-question').hasClass('alert alert-danger')) ) {
			//change background and icon
			// t.$('#'+this.question_num).addClass('alert alert-danger');			
			// t.$('dd').addClass('alert alert-danger');
			t.$('div.answered-question').addClass('alert alert-danger');
			t.$('#toggle'+this.question_num).removeClass('glyphicon glyphicon-bookmark');
			t.$('#toggle'+this.question_num).addClass('glyphicon glyphicon-ok');

			console.log(this._id + "???"+e.target.id + " = " + e.target.value + ": Answer = "+this.answer);

			//save the question so that the answer is pushed to the server screen
			//create an instance of TestResult and save to the DB
			test_result = {
				student_id: studentId,   //get from Session
				test_id: testId,        //get from Session
				question_id: this._id,
				question_num: this.question_num,
				selected_option: e.target.id,
				correct_answer: this.answer,
			 	passed: e.target.id === this.answer,
				submitted: new Date().getTime()
			}

			console.log(test_result);

			//find TestResults ID and use to perform update
			var resultId = TestResults.findOne({student_id: studentId, test_id: testId})._id;

			var id = TestResults.update(resultId, {$push: {test_results: test_result}});

			console.log(id);
			//TestResults.update(test._id, {$addToSet: {questions: {_id: id, question: question}}});

		}
	}
});


Template.takeTestItem.helpers({
	getPosition: function (e) {

		if ( this.question_num % 2 ) {
			return "right";
		}
		else {
			return "left";
		}
	}
});