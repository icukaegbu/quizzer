// Template.registerHelper('getCategory', function(){
// 	return Categories.findOne({_id: this.category}).title;
// })
// Template.registerHelper('getClass', function(){
// 	return Classes.findOne({_id: this.aclass}).title;
// })

Template.registerHelper('getCategory', function(id){
	return Categories.findOne({_id: id}, {fields: {title: 1}}).title;
})

Template.registerHelper('getClass', function(id){
	return Classes.findOne({_id: id}, {fields: {title: 1}}).title;
})