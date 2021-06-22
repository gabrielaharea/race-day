let raceNumber = Math.floor(Math.random() * 1000);
let runRearly = true;
const runAge = 18;
if (runRearly && runAge > 18) {
  raceNumber += 1000;
}

if (runRearly && runAge > 18) {
  console.log(`Veti incepe cursa la ora 09:30 ${raceNumber}`);
} else if (!runRearly && runAge > 18) {
  console.log(`Participanti care au peste 18 ani si sau inregistrat tarziu vor incepe cursa la ora 11:00 ${raceNumber}`);
} else if ( runAge < 18) {
   console.log(`Tinerii sub 18 indiferent de timpul inregistrarii incep cursa la ora 12:30 ${raceNumber} `);
} else
  console.log(`Tinerii cu varsta de 18 ani sa se apropie de biroul de inregistrare`);
