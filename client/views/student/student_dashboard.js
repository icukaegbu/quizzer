Template.studentDashboard.events({
	'click .list-group-item': function (e) {
		//return a list of all pending tests for this student
		// console.log(e.currentTarget);
		// console.log(this);

		//store the class and student id in Session, use to retrieve data
		Session.set('studentClassId', this.aclass);
		Session.set('studentName', this.name);
		console.log(this);
		console.log(Session.get('studentClassId'));

		// studentTests = Tests.find({aclass: this.aclass, status: 'pending'});
		// console.log(studentTests.count());

		// return studentTests;
	}
});

Template.studentDashboard.helpers({
	studentTests: function () {
		//if Session variables for class exist, filter Tests by it, else return all Tests
		//Tracker.autorun();

		if (Session.get('studentClassId')){
			return Tests.find({aclass: this.aclass, status: 'pending'});
		}
		else {
			return Tests.find({status: 'pending'});
		}
	},

	getStudentName: function(){
		return Session.get('studentName');
	}
});