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
  if (i !== -1) {
  this.dinosaurs.splice(i, 1);}
}


// Park.prototype.findMostPopularDinosaur = function(){
//   popDino = this.dinosaurs[0];
//   for (dinosaur of this.dinosaurs){
//     if(dinosaur.guestsAttractedPerDay > popDino.guestsAttractedPerDay){
//      popDino = dinosaur;
//     }
//     return popDino;
//   }
// };

Park.prototype.findParticularSpecies = function(species){
  sameSpeciesArray = this.dinosaurs.filter(dinosaur =>
  dinosaur.species == species);
  return sameSpeciesArray;
};


Park.prototype.removeDinosaurSpecies = function(species){
  for (dinosaur of this.dinosaurs){
  if(dinosaur.species === species){
    // this.removeDinosaur(dinosaur);
    let i = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(i, 1);
  }
}
}

// Park.prototype.removeDinosaurSpecies = function(species){
//   for (dinosaur of this.dinosaurs){
//     this.dinosaurs.splice(species, 1);
//   }
// }


module.exports = Park;
