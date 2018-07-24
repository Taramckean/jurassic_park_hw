const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  let i = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(i, 1);
}


module.exports = Park;

//
// A park must have:
//
// A name
// A ticket price
// A collection of dinosaurs
// A park must be able to:
//
// Add a dinosaur to its collection of dinosaurs
// Remove a dinosaur from its collection of dinosaurs
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Remove all dinosaurs of a particular species
