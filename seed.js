const {db, Campus, Student} = require('./server/db')
const {green, red} = require('chalk')
const hipsum = require('lorem-hipsum')

const loremHipsum = () => hipsum({
  count: 1,
  units: 'paragraphs',
  paragraphLowerBound: 3,
  paragraphUpperBound: 15,
  format: 'plain'
})

const seed = async () => {
  await db.sync({force: true})

  // seed your database here!

  const junction = await Campus.create({
    name: "Big Bird Junction",
    imageUrl: 'big-bird-junction.jpg',
    address: "52 Waterfall Ave, Canyon City (Under the Big Bird)",
    description: "Big Bird Junction is where the biggest owls go to learn Big Bird skills like flying down staircases and clerking for bird judges. Big Bird Junction is best know for the Hootenberg Law Center and the Big Bird that hovers overheard, always watching."
  })

  const cave = await Campus.create({
    name: "Cave of Forgotten Things",
    imageUrl: 'big-flower.jpg',
    address: "133 Flower Wall (Inside the Cave)",
    description: "The Cave of Forgotten Things campus at Owl University is where owls go to get a taste of what it's like to be forgotten. The philosophy at OU is that owls are a bit too full of themselves and need to be taken down a peg. This campus answers the question of 'What if there were no owls?' The answer may surprise you!"
  })

  const glimmer = await Campus.create({
    name: "Glimmer-Glam",
    imageUrl: 'crystal-statue.jpg',
    address: "347B Commerce Drive, Vancouver, BC",
    description: "Glimmer-Glam is for the fanciest owls at Owl Academy to learn how to really shine. No uggo owls, please! We only want the most beautiful and special owls to flip-flap their wings to us."
  })


  const vortex = await Campus.create({
    name: "Project Vortex",
    imageUrl: 'desert.png',
    address: "The desert. Come alone.",
    description: "4000 years ago all life on this planet was wiped out, except for the owls. But what came before? Were there other, non-owl lifeforms? Professor Mysterio has been working tirelessly out in his desert laboratory to try and answer this very question. Will you give a hoot and join him?"
  })

  const ocean = await Campus.create({
    name: "Lifeguarding College (for Owls)",
    imageUrl: 'big-wave.png',
    address: "420 Down On The Beach, Bro! Road",
    description: "Those slothful birds at Lifeguarding College (for Owls) are at it again! Their parties are the noisiest, their grades are a joke, and somehow they always get the hottest babes! Lifeguarding College (for Owls) will surely lose OU its accreditation one of these days..."
  })

  await Student.create({
    firstName: "Owlbert",
    lastName: "Flemming",
    email: "oflemming@owloo.com",
    imageUrl: "Barn-Owl-White.jpg",
    gpa: 3.8,
    campusId: junction.id
  })

  await Student.create({
    firstName: "Andi",
    lastName: "McOwl",
    email: "nothing-but-grind@risengrind.com",
    imageUrl: "cactus-owl.jpg",
    gpa: 3.9,
    campusId: junction.id
  })

  await Student.create({
    firstName: "Collin",
    lastName: "Owl",
    email: "hotmomz@singlemention.com",
    imageUrl: "Collared-scoops-owl.jpg",
    gpa: 3.5,
    campusId: cave.id
  })

  await Student.create({
    firstName: "Owl",
    lastName: "Marx",
    email: "thirsty@snakeeyes.com",
    imageUrl: "Eastern-Screech-Owl.jpg",
    gpa: 2.4,
    campusId: cave.id
  })

  await Student.create({
    firstName: "Aleister",
    lastName: "Owley",
    email: "globes@globes.com",
    imageUrl: "scopps-owl.jpg",
    gpa: 4.0,
    campusId: glimmer.id
  })

  await Student.create({
    firstName: "Owlbus",
    lastName: "Dumbledowl",
    email: "smartone@oneoftwo.com",
    imageUrl: "Striped-Owl.jpg",
    gpa: 3.9,
    campusId: glimmer.id
  })

  await Student.create({
    firstName: "Dorowlthy",
    lastName: "Sayers",
    email: "westhamfan@footballers.com",
    imageUrl: "Tawny-Fish-Owl.jpg",
    gpa: 3.6,
    campusId: vortex.id
  })

  await Student.create({
    firstName: "Alexander",
    lastName: "Hamiltowl",
    email: "livefreeor@diemail.com",
    imageUrl: "western-screech-owl.jpg",
    gpa: 3.9,
    campusId: vortex.id
  })

  await Student.create({
    firstName: "Robert",
    lastName: "Dowly, Jr.",
    email: "sad@blammo.com",
    imageUrl: "Great-Grey-Owl.jpg",
    gpa: 1.9
  })

  await Student.create({
    firstName: "Merle",
    lastName: "Haggowl",
    email: "reelbadguy@ska.net",
    imageUrl: "silly-owl.jpg",
    gpa: 4.0
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
