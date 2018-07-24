const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 70);
    dinosaur3 = new Dinosaur('diplodocus', 'herbivore', 80);
    dinosaur4 = new Dinosaur('stegosaurus', 'herbivore', 80);
    dinosaur5 = new Dinosaur('diplodocus', 'herbivore', 80);
    park = new Park('Jurassic Park', 24);

  })

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 24)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.dinosaurs.length, 1)
  });

  it('should have a collection of dinosaurs', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(park.dinosaurs.length, 2)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    assert.strictEqual(park.dinosaurs.length, 1);
  });

  // it('should be able to find the dinosaur that attracts the most visitors', function(){
  //   assert.deepStrictEqual(park.findMostPopularDinosaur(), dinosaur2);
  // });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.findParticularSpecies('diplodocus').length, 2);
  });


  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.removeDinosaurSpecies('diplodocus');
    assert.strictEqual(park.dinosaurs.length, 2);
  });

  it('should be REALLY able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur4);
    park.removeDinosaurSpecies('diplodocus');
    assert.strictEqual(park.dinosaurs.length, 2);
  });

});
