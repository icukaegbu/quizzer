Template.categoryForm.events({
	'submit form': function (e) {
		e.preventDefault();

		var category = null;

		var title = $(e.target).find('[name=title]').val();
		var description = $(e.target).find('[name=description]').val();

		if (title){
			category = {
				title: title,
				description: description,
				created: new Date().getTime()
			}

			var id = Categories.insert(category);

			//display notification
      		Notifications.info('Save Successful', 'Successfully added Category');

      		//clear textfiels
      		$(e.target).find("[name=title]").val('');
			$(e.target).find("[name=description]").val('');
		}
		else {
			//display error notification
			Notifications.error('Save Unsuccessful', 'Could not save Category: Title is blank');
		}

	},

	'click .cancel': function(e) {
		//e.preventDefault();

		//route back to the dashboard
		Router.go('home');
	}
});

Template.categoryForm.helpers({
	categories: function (e) {
		return Categories.find({}, {sort: {created: -1}})
	}
});