Template.testDetailsView.helpers({
	tests: function () {
		return Tests.find({}, {sort: {created: -1, title: -1}});
	}
});