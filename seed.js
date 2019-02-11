const {db, Campus, Student} = require('./server/db')
const {green, red} = require('chalk')
const hipsum = require('lorem-hipsum')

const loremHipsum = () => hipsum({
  count: 3,
  units: 'paragraphs',
  paragraphLowerBound: 3,
  paragraphUpperBound: 15,
  format: 'plain'
})

const seed = async () => {
  await db.sync({force: true})

  // seed your database here!

  const griffindor = await Campus.create({
    name: "Griffindor",
    imageUrl: 'wmcampus.jpg',
    address: "1223 Abingdale Road, Edinborough, Scotland",
    description: loremHipsum()
  })

  const hufflepuff = await Campus.create({
    name: "Hufflepuff",
    imageUrl: 'wmcampus.jpg',
    address: "322A Springtail Blvd, Milwaukee, USA",
    description: loremHipsum()
  })

  const ravenclaw = await Campus.create({
    name: "Ravenclaw",
    imageUrl: 'wmcampus.jpg',
    address: "555 Bird Mountain, Red Bird, USA",
    description: loremHipsum()
  })


  const slytherin = await Campus.create({
    name: "Slytherin",
    imageUrl: 'wmcampus.jpg',
    address: "666 Snake Pit Junction, Big Pit of Snakes, UK",
    description: loremHipsum()
  })

  await Student.create({
    firstName: "Justin",
    lastName: "Finch-Fletchley",
    email: "futuremayor@goodboy.com",
    imageUrl: "college-student.jpg",
    gpa: 3.8,
    campusId: hufflepuff.id
  })

  await Student.create({
    firstName: "Hannah",
    lastName: "Abbott",
    email: "nothing-but-grind@risengrind.com",
    imageUrl: "female-college-student.jpg",
    gpa: 3.9,
    campusId: hufflepuff.id
  })

  await Student.create({
    firstName: "Blaise",
    lastName: "Zabini",
    email: "hotmomz@singlemention.com",
    imageUrl: "college-student.jpg",
    gpa: 3.5,
    campusId: slytherin.id
  })

  await Student.create({
    firstName: "Pansy",
    lastName: "Parkinson",
    email: "thirsty@snakeeyes.com",
    imageUrl: "female-college-student.jpg",
    gpa: 2.4,
    campusId: slytherin.id
  })

  await Student.create({
    firstName: "Luna",
    lastName: "Lovegood",
    email: "globes@globes.com",
    imageUrl: "female-college-student.jpg",
    gpa: 4.0,
    campusId: ravenclaw.id
  })

  await Student.create({
    firstName: "Parvati",
    lastName: "Patil",
    email: "smartone@oneoftwo.com",
    imageUrl: "female-college-student.jpg",
    gpa: 3.9,
    campusId: ravenclaw.id
  })

  await Student.create({
    firstName: "Dean",
    lastName: "Thomas",
    email: "westhamfan@footballers.com",
    imageUrl: "college-student.jpg",
    gpa: 3.6,
    campusId: griffindor.id
  })

  await Student.create({
    firstName: "Ginny",
    lastName: "Weasely",
    email: "gingerqueen@freemail.com",
    imageUrl: "female-college-student.jpg",
    gpa: 3.9,
    campusId: griffindor.id
  })


  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
