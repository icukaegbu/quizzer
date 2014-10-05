Template.createQuestion.events({
	'submit form': function (e) {
		e.preventDefault();

		var aQuestion = null;
		var id = null;
		
		var question = $(e.target).find('[name=question]').val();
		var optA = $(e.target).find('[name=optA]').val();
		var optB = $(e.target).find('[name=optB]').val();
		var optC = $(e.target).find('[name=optC]').val();
		var optD = $(e.target).find('[name=optD]').val();
		var answer = $(e.target).find('[name=answer]').val();
		var category = $(e.target).find("[name=select_category]").val();
		var aclass = $(e.target).find("[name=select_class]").val();


		//if any field is empty, dont save
		if ( question && optA && optB && answer ){
			//create an instance of the Test and save
			aQuestion = {
				question: question,
				optA: optA,
				optB: optB,
				optC: optC,
				optD: optD,
				answer: answer,
				category: category,
				created: new Date().getTime(),
				category: category,
				aclass: aclass
			}

			id = Questions.insert(aQuestion);

			//if question is saved, find all Tests that have the same category and class
			//and add the question to their questions array
			var tests = Tests.find({aclass: aclass, category: category});

			tests.forEach(function (test) {
				//add the id of the question to its question array
				test.questions.push(id);
			});

			//display notification
      		Notifications.info('Save Successful', 'Successfully added Question');

      		//clear textfiels
      		$(e.target).find('[name=question]').val('');
			$(e.target).find('[name=optA]').val('');
			$(e.target).find('[name=optB]').val('');
			$(e.target).find('[name=optC]').val('');
			$(e.target).find('[name=optD]').val('');
			$(e.target).find('[name=answer]').val('N/A');
			$(e.target).find("[name=select_category]").val('N/A');
		    $(e.target).find("[name=select_class]").val('N/A');
		}
		else {
			//display error notification
			Notifications.error('Save Unsuccessful', 'Could not save Question: Question and/or Answer and/or OptionA is blank');
		}

	},

	'click .cancel': function(e) {
		//route back to the dashboard
		Router.go('home');
	}

});
