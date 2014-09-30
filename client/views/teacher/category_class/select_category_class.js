Template.selectCategory.helpers({
	selectCategories: function (e) {
		return Categories.find({}, {sort: {created: -1}})
	}
});

Template.selectClass.helpers({
	selectClasses: function (e) {
		return Classes.find({}, {sort: {created: -1}})
	}
});