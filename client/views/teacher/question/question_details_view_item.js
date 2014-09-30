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
	}
});