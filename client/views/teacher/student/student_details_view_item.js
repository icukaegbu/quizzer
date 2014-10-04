Template.studentDetailsViewItem.helpers({
	getClass: function () {
		return Classes.findOne({_id: this.aclass}).title;
	}
});