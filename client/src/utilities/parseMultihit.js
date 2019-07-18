export let parseMultihit = (frames) => {
  var firstHit = frames.split('/')[0].trim();
  console.log('firstHit', firstHit);
  return firstHit;
}