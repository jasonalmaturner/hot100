export default {
  populate(req, res) {
    seeder.loadModels(['./server-assets/models/userModel']);
    console.log(111, 'userModel loaded');
    seeder.clearModels(['Users'], () => {
      console.log(222, 'Users cleared');
      seeder.populateModels([
        {
          model: 'Users',
          documents: users,
        },
      ]);
      return res.send('db populated');
    });
  },
};
