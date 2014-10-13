Template.testDetailsViewItem.helpers({
	getStatusColor: function(){
		if (this.status === 'pending'){
			return 'warning';
		}
		else if (this.status === 'completed'){
			return 'success';
		}
		else if (this.status === 'in-progress'){
			return 'danger';
		}
		else {
			return 'info';
		}
	},

	getQuestionsLength: function(){
		return this.questions ? this.questions.length : 0;
	},

	checkPendingStatus: function(){
		return this.status === 'pending';
	}
});

Template.testDetailsViewItem.events({
	'click .glyphicon-trash': function (e) {
		e.preventDefault();

		if(confirm("Delete this Test?")) {
			var currentTestId = this._id;
			Tests.remove(currentTestId);
			Notifications.success('Delete Successful', 'Successfully deleted Test');
		}
		else{
			Notifications.error('Delete Unsuccessful', 'Delete failed');
		}
	}
	// ,

	// //event to handle starting a Test
	// 'click .glyphicon-play': function(e){
	// 	e.preventDefault();

	// 	//create an instance of TestResult for all students

	// 	//start the timer for the Test

	// 	//Route to the Administer-Test Screen

	// }
});