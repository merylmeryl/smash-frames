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

export let generateKey = (pre) => {
  return `${pre}_${new Date().getMilliseconds()}_${Math.random()}`;
}

export let parseLastHitInt = (frames) => {
  return parseInt(frames.replace('...', '').split('/')[0].trim());
}

export let parseMultihit = (frames) => {
  return frames.replace('...', '').split('/');
}

export let isNumStartupEqualToNumActive = (startup, active) => {
  return startup.split('/').length === active.split('/').length;
}

export let computeRecovery = (startup, active, total) => {
  if (startup !== null && active !== null && total !== null
    && startup !== undefined && active !== undefined && total !== undefined) {
    return parseLastHitInt(total) - (parseLastHitInt(startup) - 1 + parseLastHitInt(active));
  }
}