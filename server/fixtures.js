if (Tests.find().count() === 0) {

    Tests.insert({
      title: 'Meteor',
      description: 'http://meteor.com',
      submitted: now - 10 * 3600 * 1000,
      duration: 10,
      status: 'completed'
    });
    Tests.insert({
      title: 'The Meteor Book',
      description: 'http://themeteorbook.com',
      submitted: now - 12 * 3600 * 1000,
      duration: 50,
      status: 'in-progress'
    });

    for (var i = 10; i >= 0; i--) {
      Tests.insert({
        title: 'Test post #' + i,
        description: 'http://me.com',
        submitted: now - 12 * 3600 * 1000,
        duration: 40,
        status: 'pending'
      });
    };
}