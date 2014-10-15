Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

	// this.route('teacherHome', {
	this.route('home', {
		path: '/',
		template: 'teacherDashboard'
	});

	// this.route('administerTest', {
	// 	path: '/administerTest',
	// 	template: 'administerTest'
	// })

	this.route('createTest', {
		path: '/createTest',
		template: 'createTest'
	})
	
	this.route('createCategoryClass', {
		path: '/createCategoryClass',
		template: 'createCategoryClass'
	})

	this.route('createQuestion')

	this.route('createStudent');

	this.route('takeTest', {
		path: '/takeTest/:_id',
		template: 'takeTest',
		data: function(){
			// console.log(this.params._id)
			return Tests.findOne({_id: this.params._id});
			// console.log(test)

			// //return the test, which is then used by the client to load the relevant questions
			// return test;

			// //return Questions of the same class and category
			// var questions = Questions.find({aclass: test.aclass, category: test.category}, 
			// 							   {sort: {created: -1, title: -1}}).fetch();

			// var count = 1;

			// questions.forEach(function (question) {
			// 	question['question_num'] = count;
			// 	++count;
			// });

			// return questions;
		}
	})

	this.route('showSingleTest', {
		path: '/showSingleTest/:_id',
		template: 'showSingleTest',
		data: function(){
			return Tests.findOne({_id: this.params._id})
		}
	})

	this.route('administerTest', {
		path: '/administerTest/:_id',
		template: 'administerTest',
		data: function(){
			return Tests.findOne({_id: this.params._id})
		}
	})

	this.route('student_dashboard');

	// this.route('testDetailsView', {
	// 	path: '/:_id/testDetailsView',
	// 	template: 'testDetailsView',
	// 	data: function(){
	// 		return Tests.findOne({_id: this.params._id});
	// 	}
	// })
})