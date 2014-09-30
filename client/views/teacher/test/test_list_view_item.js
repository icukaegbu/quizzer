Template.testListViewItem.helpers({
	badgeColor: function (e) {
		// var badgeColors = ['primary', 'info', 'danger', 'warning', 'success'];
		// var idx = Math.round(Math.random() * (badgeColors.length - 1));
		// // console.log(idx);

		// return badgeColors[idx];

		if (this.status === 'pending'){
			return 'primary';
		}
		else if (this.status === 'completed'){
			return 'success';
		}
		else if (this.status === 'in-progress'){
			return 'danger';
		}
		else {
			return 'warning';
		}
	}
});