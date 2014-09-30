Template.createTest.events({
	'submit form': function (e) {
		e.preventDefault();

		var title = $(e.target).find("[name=title]").val();
		var duration = $(e.target).find("[name=duration]").val();
		var description = $(e.target).find("[name=description]").val();

		//if any field is empty, dont save
		

		//create an instance of the Test and save
		var test = {
			title: title,
			duration: duration,
			description: description,
			created: new Date().getTime(),
			status: 'pending',  //every test starts off ith a pending status
			bgColor: ''
		}

		var id = Tests.insert(test);

		$(e.target).find("[name=title]").val('');
		$(e.target).find("[name=duration]").val('');
		$(e.target).find("[name=description]").val('');
	},

	'click .cancel': function(e) {
		//e.preventDefault();

		//route back to the dashboard
		Router.go('home');
	}

});