const db = require('./connection');
const { User, TShirt, Comment } = require('../models');

db.once('open', async () => {

  await Comment.deleteMany();

  const comments = await Comment.insertMany([
    {
      username: 'tshirtfiend',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'IlikeTee',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'destinyFan',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'destinyFan',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'tshirtfiend',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'tshirtfiend',
      commentBody: 'Something that someone might say',
    },
    {
      username: 'IlikeTee',
      commentBody: 'Something that someone might say',
    },
  ])

  console.log('Comments Seeded');

  await TShirt.deleteMany();

  const tshirts = await TShirt.insertMany([
    {
      title: 'WHERE TWAB?',
      brand: 'Bungie',
      description: 'New shirt from Bungie',
      username: 'destinyFan',
      imageLink: 'https://bungiestore.com/media/catalog/product/w/h/wheres-twab_shirt-front.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
      comments: [
        comments[0],
        comments[1]
      ]
    },
    {
      title: 'Starhorse',
      brand: 'Bungie',
      description: 'Cool Starhorse t-shirt from Bungie',
      username: 'destinyFan',
      imageLink: 'https://bungiestore.com/media/catalog/product/m/e/mens-front-starhorse-mock-1000x1000.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
    },
    {
      title: 'Darth Vader Walks His ATAT',
      brand: 'brand here',
      description: 'This shirt is hilarious',
      username: 'tshirtfiend',
      imageLink: 'https://m.media-amazon.com/images/I/A1vJUKBjc2L._CLa%7C2140%2C2000%7C81A65MNTOcL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png',
      comments: [
        comments[2],
        comments[6]
      ]
    },
    {
      title: 'Gjallarhorn Tshirt',
      brand: 'Bungie',
      description: 'One of my favorite tshirt designs',
      username: 'destinyFan',
      imageLink: 'https://bungiestore.com/media/catalog/product/g/j/gjallarhorn_shirt_front_1000x1000.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
    },
    {
      title: 'Processing...',
      brand: 'Hanes',
      description: 'Something for developers',
      username: 'IlikeTee',
      imageLink: 'https://m.media-amazon.com/images/I/71UQhfJQFkL._AC_UL320_.jpg',
      comments: [
        comments[3]
      ]
    },
    {
      title: 'Classic StarWars Tshirt',
      brand: ' Fifth Sun',
      description: 'Look at this cool Star Wars graphic tshirt I found!',
      username: 'tshirtfiend',
      imageLink: 'https://m.media-amazon.com/images/I/81WA7JOFGvS._AC_UX679_.jpg',
    },
    {
      title: 'Black Knight',
      brand: '',
      description: 'The latest in bridge security',
      username: 'IlikeTee',
      imageLink: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C8151HCKmNHL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png',
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
      username: 'destinyFan',
      email: 'destinyFan@test.com',
      password: 'test123',
      tshirts: [
        tshirts[0]._id,
        tshirts[1]._id,
        tshirts[3]._id
      ]
    },
    {
      username: 'tshirtfiend',
      email: 'tshirtfiend@test.com',
      password: 'test123',
      tshirts: [
        tshirts[2]._id,
        tshirts[5]._id
      ]
    },
    {
      username: 'IlikeTee',
      email: 'IlikeTee@test.com',
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