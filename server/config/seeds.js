const db = require('./connection');
const { User, TShirt, Comment } = require('../models');

db.once('open', async () => {

  await Comment.deleteMany();

  const comments = await Comment.insertMany([
    {
      username: 'testuser2',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'testuser3',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'testuser',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'testuser',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'testuser2',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'testuser2',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'testuser3',
      commentBody: 'Something that someone might say',
    },
  ])

  console.log('Comments Seeded');

  await TShirt.deleteMany();

  const tshirts = await TShirt.insertMany([
    {
      title: 'Test Image',
      brand: 'brand here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      username: 'testuser',
      imageLink: 'https://i.imgur.com/ePbKRvC.jpg',
      comments: [
        comments[0],
        comments[1]
      ]
    },
    {
      title: 'Test Image 2',
      brand: 'brand here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      username: 'testuser',
      imageLink: 'https://i.imgur.com/ePbKRvC.jpg',
    },
    {
      title: 'Test Image 3',
      brand: 'brand here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      username: 'testuser2',
      imageLink: 'https://i.imgur.com/ePbKRvC.jpg',
      comments: [
        comments[2],
        comments[6]
      ]
    },
    {
      title: 'Test Image 4',
      brand: 'brand here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      username: 'testuser',
      imageLink: 'https://i.imgur.com/ePbKRvC.jpg',
    },
    {
      title: 'Test Image 5',
      brand: 'brand here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      username: 'testuser3',
      imageLink: 'https://i.imgur.com/ePbKRvC.jpg',
      comments: [
        comments[3]
      ]

    },
    {
      title: 'Test Image 6',
      brand: 'brand here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      username: 'testuser2',
      imageLink: 'https://i.imgur.com/ePbKRvC.jpg',
    },
    {
      title: 'Test Image 7',
      brand: 'brand here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      username: 'testuser3',
      imageLink: 'https://i.imgur.com/ePbKRvC.jpg',
      comments: [
        comments[4],
        comments[5],
      ]
    }
  ])

  console.log('T-Shirts Seeded');

  await User.deleteMany();

  await User.create([
    {
      username: 'testuser',
      email: 'test@test.com',
      password: 'test123',
      tshirts: [
        tshirts[0]._id,
        tshirts[1]._id,
        tshirts[3]._id
      ]
    },
    {
      username: 'testuser2',
      email: 'test2@test.com',
      password: 'test123',
      tshirts: [
        tshirts[2]._id,
        tshirts[5]._id
      ]
    },
    {
      username: 'testuser3',
      email: 'test3@test.com',
      password: 'test123',
      tshirts: [
        tshirts[4]._id,
        tshirts[6]._id
      ]
    },
  ])

  console.log('Users Seeded');

  process.exit();
})