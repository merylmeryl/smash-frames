export let parseMultihit = (frames) => {
  var firstHit = frames.split('/')[0].trim();
  return firstHit;
}