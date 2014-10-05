Template.studentDetailsViewItem.helpers({
	getClass: function () {
		return Classes.findOne({_id: this.aclass}).title;
	}
});

Template.studentDetailsViewItem.events({
	'click .glyphicon-trash': function (e) {
		e.preventDefault();

		if(confirm("Delete this Student?")) {
			var currentStudentId = this._id;
			Students.remove(currentStudentId);
			Notifications.success('Delete Successful', 'Successfully deleted Student');
		}
		else{
			Notifications.error('Delete Unsuccessful', 'Delete failed');
		}
	}
});