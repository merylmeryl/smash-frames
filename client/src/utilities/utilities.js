export let parseFighterName = (name) => {
  if (name == 'Pac-Man') {
    return 'Pac-Man';
  }
  else {
    return name.split('-').join(' ');
  }
};

export let hyphenateFighterName = (name) => {
  return name.split(' ').join('-');
}
