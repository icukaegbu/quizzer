Template.studentDetailsViewItem.helpers({
	getClass: function () {
		console.log(this.aclass);
		return Classes.findOne({_id: this.aclass}).title;
	}
});