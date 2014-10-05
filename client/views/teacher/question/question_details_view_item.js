Template.questionDetailsViewItem.helpers({
	getCategory: function (e) {
		console.log(e);
		
		var t = Categories.find({_id: this.category}).title;
		console.log(t);

		return t;
	},

	getClass: function(e){
		return Classes.find({_id: this.aclass}).title;
	},

	getStatusColor: function(){
		if (this.answer === 'A'){
			return 'warning';
		}
		else if (this.answer === 'B'){
			return 'success';
		}
		else if (this.answer === 'C'){
			return 'danger';
		}
		else {
			return 'info';
		}
	}
});

Template.questionDetailsViewItem.events({
	'click .glyphicon-trash': function (e) {
		e.preventDefault();

		if(confirm("Delete this Question?")) {
			var currentQuestionId = this._id;
			Questions.remove(currentQuestionId);
			Notifications.success('Delete Successful', 'Successfully deleted Question');
		}
		else{
			Notifications.error('Delete Unsuccessful', 'Delete failed');
		}
	}
});