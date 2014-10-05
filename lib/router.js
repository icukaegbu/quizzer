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

	this.route('takeTest')

	this.route('showSingleTest', {
		path: '/:_id/showSingleTest',
		template: 'showSingleTest',
		data: function(){
			return Tests.findOne({_id: this.params._id})
		}
	})

	// this.route('testDetailsView', {
	// 	path: '/:_id/testDetailsView',
	// 	template: 'testDetailsView',
	// 	data: function(){
	// 		return Tests.findOne({_id: this.params._id});
	// 	}
	// })
})