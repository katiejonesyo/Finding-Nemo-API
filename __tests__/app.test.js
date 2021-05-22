require('dotenv').config();

const { execSync } = require('child_process');

const fakeRequest = require('supertest');
const app = require('../lib/app');
const client = require('../lib/client');

describe('app routes', () => {
  describe('routes', () => {
    let token;
  
    beforeAll(async done => {
      execSync('npm run setup-db');
  
      client.connect();
  
      const signInData = await fakeRequest(app)
        .post('/auth/signup')
        .send({
          email: 'jon@user.com',
          password: '1234'
        });
      
      token = signInData.body.token; // eslint-disable-line
  
      return done();
    });
  
    afterAll(done => {
      return client.end(done);
    });

    test('returns animals', async() => {

      const expectation = [
      {
          "id": 1,
          "name": "Nemo",
          "owner_id": 1,
          "quote": "I'm gonna go touch the butt!",
          "role": "Son",
          "type": "Clown Fish",
        },
        {
          "id": 2,
          "name": "Marlin",
          "owner_id": 1,
          "quote": "I Promise, I Will Never Let Anything Happen To You...Nemo.",
          "role": "Dad",
          "type": "Clown Fish",
        },
        {
          "id": 3,
          "name": "Coral",
          "owner_id": 1,
          "quote": "I like Nemo.",
          "role": "Mom",
          "type": "Clown Fish",
        },
        {
          "id": 4,
          "name": "Dory",
          "owner_id": 1,
          "quote": "Just keep swimming",
          "role": "Buddy",
          "type": "Paracanthurus hepatus",
        },
        {
          "id": 5,
          "name": "Bruce",
          "owner_id": 1,
          "quote": "I never knew my father!",
          "role": "Mean Guy",
          "type": "Great White Shark",
        },
        {
          "id": 6,
          "name": "Anchor",
          "owner_id": 1,
          "quote": "Fish are friends, not food.",
          "role": "Mean Guy",
          "type": "Hammer Head Shark",
        },
        {
          "id": 7,
          "name": "Chum",
          "owner_id": 1,
          "quote": "A lil' Chum for Chum, eh?",
          "role": "Mean Guy",
          "type": "Mako Shark",
        },
        {
          "id": 8,
          "name": "Crush",
          "owner_id": 1,
          "quote": "Whoa, dude. Mister Turtle is my father. The name's Crush.",
          "role": "Buddy",
          "type": "Pacific Green Sea Turtle",
        },
        {
          "id": 9,
          "name": "Squirt",
          "owner_id": 1,
          "quote": "I'm from the EAC, dude.",
          "role": "Buddy",
          "type": "Pacific Green Sea Turtle",
        },
        {
          "id": 10,
          "name": "Gill",
          "owner_id": 1,
          "quote": "All drains lead to the ocean, kid.",
          "role": "Tank Buddy",
          "type": "Moorish Idol",
        },
        {
          "id": 11,
          "name": "Bubbles",
          "owner_id": 1,
          "quote": "Bubbles! Bubbles! My bubbles.",
          "role": "Tank Buddy",
          "type": "yellow tang fish",
        },
        {
          "id": 12,
          "name": "Bloat",
          "owner_id": 1,
          "quote": "Shark Bait ooooh bop badoo",
          "role": "Tank Buddy",
          "type": "Porcupine Pufferfish",
        },
        {
          "id": 13,
          "name": "Deb/Flo",
          "owner_id": 1,
          "quote": "Don't listen to anything my sister says, she's nuts!",
          "role": "Tank Buddy",
          "type": "Blacktail Humbug",
        },
        {
          "id": 14,
          "name": "Peach",
          "owner_id": 1,
          "quote": "The tank is clean!",
          "role": "Tank Buddy",
          "type": "Starfish",
        },
        {
          "id": 15,
          "name": "Gurgle",
          "owner_id": 1,
          "quote": "Curse you Aquascum!",
          "role": "Tank Buddy",
          "type": "Royal Gramma",
        },
        {
          "id": 16,
          "name": "Jacques",
          "owner_id": 1,
          "quote": "Voilà. He is clean.",
          "role": "Tank Buddy",
          "type": "Shrimp",
        },
        {
          "id": 17,
          "name": "Sheldon",
          "owner_id": 1,
          "quote": "I'm H2O intolerant. *achoo*",
          "role": "Class mate",
          "type": "Seahorse",
        },
        {
          "id": 18,
          "name": "Tad",
          "owner_id": 1,
          "quote": "I'm obnoxious.",
          "role": "Class mate",
          "type": "Butterfly Fish",
        },
        {
          "id": 19,
          "name": "Pearl",
          "owner_id": 1,
          "quote": "Aw you guys made me ink!",
          "role": "Class mate",
          "type": "Flapjack Octopus",
        },
        {
          "id": 20,
          "name": "Mr.Ray",
          "owner_id": 1,
          "quote": "[Gasps] Stromalitic cyanobacteria! Gather.",
          "role": "Teacher",
          "type": "Eagle Ray",
        },
        {
          "id": 21,
          "name": "Nigel",
          "owner_id": 1,
          "quote": "Fish gotta swim, birds gotta eat.",
          "role": "Buddy",
          "type": "Brown Pelican",
        },
        {
          "id": 22,
          "name": "Dentist",
          "owner_id": 1,
          "quote": "Crikey!",
          "role": "Dentist",
          "type": "Dr. Philip Sherman",
        },
       {
          "id": 23,
          "name": "Darla",
          "owner_id": 1,
          "quote": "WAKE UP! Why are you sleeping?",
          "role": "Fish Killer/Dentist Daughter",
          "type": "Darla Sherman",
        },
      ];

      const data = await fakeRequest(app)
        .get('/characters')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });
  });
});
