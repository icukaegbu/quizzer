Template.testDetailsViewItem.helpers({
	getCategory: function (e) {
		console.log(e);
		
		var t = Categories.find({_id: this.category}).title;
		console.log(t);

		return t;
	},

	getClass: function(e){
		return Classes.find({_id: this.aclass}).title;
	}
});