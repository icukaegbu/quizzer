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