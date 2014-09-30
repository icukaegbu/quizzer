Template.classForm.events({
	'submit form': function (e) {
		e.preventDefault();

		var aClass = null;

		var title = $(e.target).find('[name=title]').val();
		var description = $(e.target).find('[name=description]').val();

		if (title){
			aClass = {
				title: title,
				description: description,
				created: new Date().getTime()
			}

			var id = Classes.insert(aClass);

			//display notification
      		Notifications.info('Save Successful', 'Successfully added Class');

      		//clear textfiels
      		$(e.target).find("[name=title]").val('');
			$(e.target).find("[name=description]").val('');
		}
		else {
			//display error notification
			Notifications.error('Save Unsuccessful', 'Could not save Class: Title is blank');
		}

	},

	'click .cancel': function(e) {
		//e.preventDefault();

		//route back to the dashboard
		Router.go('home');
	}
});

Template.classForm.helpers({
	classes: function (e) {
		return Classes.find({}, {sort: {created: -1}})
	}
});