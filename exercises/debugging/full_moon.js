// debugged and linted code:
const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  let newSpecies; // changed from `var newSpecies;`
  // otherwise, on 2nd iteration the value is still 'wolf', still truthy.
  // 2nd `var` declaration (function scope) is considered redundant and ignored.
  // `let` has block scope, and so each `newSpecies` is a new block variable.
  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}
