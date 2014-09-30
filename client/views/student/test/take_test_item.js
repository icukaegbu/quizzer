Template.takeTestItem.helpers({
	getPosition: function (e) {

		if ( this.question_num % 2 ) {
			return "right";
		}
		else {
			return "left";
		}
	}
});