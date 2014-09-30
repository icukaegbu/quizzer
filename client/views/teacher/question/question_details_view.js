Template.questionDetailsView.helpers({
	questions: function () {
		return TQuestions.find({}, {sort: {created: -1, title: -1}});
	}
});