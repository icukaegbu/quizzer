Template.studentDetailsView.helpers({
	students: function () {
		return Students.find({}, {sort: {aclass: -1, name: -1}});
	}
});