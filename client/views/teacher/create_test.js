Template.createTest.events({
	'submit form': function (e) {
		e.preventDefault();

		var isSave = false;
		var test = null;
		var id = null;

		var title = $(e.target).find("[name=title]").val();
		var duration = $(e.target).find("[name=duration]").val();
		var description = $(e.target).find("[name=description]").val();

		//if any field is empty, dont save

		if ( title && duration ){
			//create an instance of the Test and save
			test = {
				title: title,
				duration: duration,
				description: description,
				created: new Date().getTime(),
				status: 'pending',  //every test starts off ith a pending status
				bgColor: ''
			}

			isSave = true;

			id = Tests.insert(test);

			//display notification
      		Notifications.info('Save Successful', 'Successfully added Test: ');

      		//clear textfiels
      		$(e.target).find("[name=title]").val('');
			$(e.target).find("[name=duration]").val('');
			$(e.target).find("[name=description]").val('');
		}
		else {
			//display error notification
			Notifications.error('Save Unsuccessful', 'Could not save Test: Title and/or Duration is blank');
		}
		


	},

	'click .cancel': function(e) {
		//e.preventDefault();

		//route back to the dashboard
		Router.go('home');
	}

});

