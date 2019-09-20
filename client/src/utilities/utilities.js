export let parseFighterName = (name) => {
  return name.split('-').join(' ');
};

export let hyphenateFighterName = (name) => {
  return name.split(' ').join('-');
}
