Template.createStudent.events({
	'submit form': function (e) {
		e.preventDefault();

		var student = null;
		var id = null;

		var name = $(e.target).find('[name=name]').val();
		var email = $(e.target).find('[name=email]').val();
		var aclass = $(e.target).find('[name=select_class]').val();

		//only save if values are filled

		if ( name && aclass && email ) {
			student = {
				name: name,
				email: email,
				aclass: aclass
			}

			id = Students.insert(student);

			Notifications.info('Save Successful', 'Successfully saved Student: '+name);

			$(e.target).find('[name=name]').val('');
			$(e.target).find('[name=email]').val('');
			$(e.target).find('[name=select_class]').val('');
		}
		else{
			Notifications.error('Save Unsuccessful', 'Could not save Student; Name/Email/Class is empty ');
		}
	},

	'click .cancel': function(e) {
		//e.preventDefault();

		//route back to the dashboard
		Router.go('home');
	}
});