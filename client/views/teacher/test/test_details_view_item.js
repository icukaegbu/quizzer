Template.testDetailsViewItem.helpers({
	getCategory: function (e) {
		// console.log(e);
		
		var t = Categories.find({_id: this.category}).title;
		// console.log(t);

		return t;
	},

	getClass: function(e){
		return Classes.find({_id: this.aclass}).title;
	},

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