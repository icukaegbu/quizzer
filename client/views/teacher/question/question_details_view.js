Template.questionDetailsView.helpers({
	questions: function () {
		return Questions.find({}, {sort: {created: -1, title: -1}});
	}
});