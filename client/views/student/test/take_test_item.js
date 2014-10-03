Template.takeTestItem.events({
	'change .radio': function (e, template) {
		var t = template;

		//if it has not been clicked before, set the class else leave it
		if ( !(t.$('div.answered-question').hasClass('alert alert-danger')) ) {
			//change background and icon
			// t.$('#'+this.question_num).addClass('alert alert-danger');			
			// t.$('dd').addClass('alert alert-danger');
			t.$('div.answered-question').addClass('alert alert-danger');
			t.$('#toggle'+this.question_num).removeClass('glyphicon glyphicon-bookmark');
			t.$('#toggle'+this.question_num).addClass('glyphicon glyphicon-ok');

			//save the question so that the answer is pushed to the server screen
		}
	}
});


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