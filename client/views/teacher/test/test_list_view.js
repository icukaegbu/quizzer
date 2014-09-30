Template.testListView.helpers({
	tests: function (e) {
		return Tests.find({}, {sort: {created: -1, title: -1}});
	}
});