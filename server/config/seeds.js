const db = require('./connection');
const { User, TShirt, Comment } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  const user = await User.insertMany([
    {
      username: 'testuser',
      email: 'test@test.com',
      password: 'test123'
    },
    {
      username: 'testuser2',
      email: 'test2@test.com',
      password: 'test123'
    },
    {
      username: 'testuser3',
      email: 'test3@test.com',
      password: 'test123'
    },
  ])

  console.log('Users Seeded');

  await Comment.deleteMany();

  const comments = await Comment.insertMany([
    {
      writtenBy: 'testuser2',
      commentBody: 'Very Cool',
    },
    {
      writtenBy: 'testuser3',
      commentBody: 'Something that someone might say',
    }
  ])

  console.log('Comments Seeded');

  await TShirt.deleteMany();

  await TShirt.create(
    {
      title: 'Test Image',
      brand: 'brand here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdBy: 'testuser',
      images: [
        { imageLink: 'https://i.imgur.com/ePbKRvC.jpg' },
      ],
      comments: [
        comments[0],
        comments[1]
      ]
    }
  )

  console.log('T-Shirts Seeded');

  process.exit();
})