export const recite = (initialBottlesCount, takeDownCount) => {
  const manyBottles = {
    firstPart: ' bottles of beer on the wall',
    secondPart: 'bottles of beer.'
  };
  const oneBottle = {
    firstPart: ' bottle of beer on the wall',
    secondPart: 'bottle of beer.'
  }
  const returnLyric = 'Go to the store and buy some more, 99 bottles of beer on the wall.';
  const song = [];
  for (let i = initialBottlesCount; i > initialBottlesCount - takeDownCount; i--) {
    if (i === 0) {
      song.push(`No more${manyBottles.firstPart}, no more ${manyBottles.secondPart}`);
      song.push(`${returnLyric}`)
    } else {
      song.push(`${i}${i > 1 ? manyBottles.firstPart : oneBottle.firstPart}, ${i} ${i > 1 ? manyBottles.secondPart : oneBottle.secondPart}`);
      song.push(`Take ${i - 1 > 0 ? 'one' : 'it'} down and pass it around, ${i - 1 > 0 ? i - 1 : ''}${i - 1 > 1 ? manyBottles.firstPart : i - 1 === 1 ? oneBottle.firstPart : `no more${manyBottles.firstPart}`}.`);
    }
    if (i > initialBottlesCount - takeDownCount + 1) {
      song.push('')
    }
  }
  return song;
};
