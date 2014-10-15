Template.studentDashboard.events({
	'click .list-group-item': function (e) {
		//return a list of all pending tests for this student
		console.log(e.currentTarget);
		console.log(this);

		//store the class and student id in Session, use to retrieve data

		studentTests = Tests.find({aclass: this.aclass, status: 'pending'});
		console.log(studentTests.count());

		return studentTests;
	}
});

Template.studentDashboard.helpers({
	studentTests: function () {
		//if Session variables for class exist, filter Tests by it, else return all Tests
	}
});