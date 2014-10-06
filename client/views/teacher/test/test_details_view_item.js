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

	checkStatus: function(){
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
});