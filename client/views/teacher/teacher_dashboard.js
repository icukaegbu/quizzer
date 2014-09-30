Template.teacherDashboard.helpers({
	pendingTests: function (e) {
		return Tests.find({status: 'pending'}, {sort: {created: -1, title: -1}});
	},

	inProgressTests: function (e) {
		return Tests.find({status: 'pin-progress'}, {sort: {created: -1, title: -1}});
	},

	completedTests: function (e) {
		return Tests.find({status: 'completed'}, {sort: {created: -1, title: -1}});
	}
});