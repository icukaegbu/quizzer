Template.takeTest.helpers({
	questions: function (e) {
		//create an object that extends the returned questions by adding a field for question_num;
		//use this question_num to determine if the question will be displayed to the right or left
		//ensure to use the pick method to remove this field before saving to the DB
		// var newQuestions = [];
		var questions = Questions.find({}, {sort: {created: -1, title: -1}}).fetch();

		var count = 1;

		questions.forEach(function (question) {
			question['question_num'] = count;
			++count;
			// console.log ("question :" +question.question_num);
			// console.log(count);
		});

		return questions;
	}
});