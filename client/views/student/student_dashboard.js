Template.studentDashboard.events({
	'click .list-group-item': function (e) {
		//store the class and student id in Session, use to retrieve data
		Session.set('studentClassId', this.aclass);
		Session.set('studentName', this.name);

		//return a list of all pending tests for this student
		// console.log(e.currentTarget);
		// console.log(this);
		// studentTests = Tests.find({aclass: this.aclass, status: 'pending'});
		// console.log(studentTests.count());

		// return studentTests;
	}
});

Template.studentDashboard.helpers({
	studentTests: function () {
		//if Session variables for class exist, filter Tests by it, else return all Tests
		if (Session.get('studentClassId')){
			return Tests.find({aclass: Session.get('studentClassId'), status: 'pending'});
		}
		else {
			return Tests.find({status: 'pending'});
		}
	},

	getStudentName: function(){
		return Session.get('studentName');
	}
});