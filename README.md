# Exercisms
These are javascript coding exercises/challenges that I've completed recently, thanks to https://exercism.io/
## Testing
Exercism.io has taught me how to perform unit testing by providing the test cases for these projects using the `jest` package. For more information regarding `jest`, visit https://www.npmjs.com/package/jest
## Famous Coding Challenges
### Reverse a linked list
```javascript
reverse() {
    let left = this._head;
    let traverse = this._head.next;

    // if there are only two elements in the list
    if (traverse.next === null) {
      traverse.next = left;
      left.next = null;
      this._head = traverse;
    } else {
      // if there are more than two elements in the list
      let right = traverse.next;
      left.next = null;
      while (right.next !== null) {
        traverse.next = left;
        left = traverse;
        traverse = right;
        right = right.next;
      }
      traverse.next = left;
      right.next = traverse;
      this._head = right;
    }
    return this;
  }
```
### Recursive functions
```javascript
// this function recites the nursery rhyme, "This is the House that Jack Built" when called and passed an initial verse number
static verse(num, arr = []) {
    const bank = [
      {
        noun: 'house that Jack',
        verb: 'built'
      },
      {
        noun: 'malt',
        verb: 'lay in'
      },
      {
        noun: 'rat',
        verb: 'ate'
      },
      {
        noun: 'cat',
        verb: 'killed'
      },
      {
        noun: 'dog',
        verb: 'worried'
      },
      {
        noun: 'cow with the crumpled horn',
        verb: 'tossed'
      },
      {
        noun: 'maiden all forlorn',
        verb: 'milked'
      },
      {
        noun: 'man all tattered and torn',
        verb: 'kissed'
      },
      {
        noun: 'priest all shaven and shorn',
        verb: 'married'
      },
      {
        noun: 'rooster that crowed in the morn',
        verb: 'woke'
      },
      {
        noun: 'farmer sowing his corn',
        verb: 'kept'
      },
      {
        noun: 'horse and the hound and the horn',
        verb: 'belonged to'
      }
    ]
    let song = arr;
    if (num - 1 === 0) {
      song.unshift(`This is the ${bank[num - 1].noun} ${bank[num - 1].verb}.`);
      return song;
    } else {
      song = this.verse(num - 1, song);
      song.unshift(`This is the ${bank[num - 1].noun}`);
      song[1] = song[1].replace(`This is the`, `that ${bank[num - 1].verb} the`);
    }
    return song;
  }
```

## Unique Coding Challenges
### Given a 2d array of '|' , '-' and '+', return the number of rectangles made.
```javascript
static count(shape) {
    let count = 0;
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[i].length; j++) {
        if (shape[i][j] === '+') {
          let tl = j;
          let rightCorners = this.findRightCorners(shape, i, j);
          for (let k = 0; k < rightCorners.length; k++) {
            let flag = false;
            for (let row = i + 1; row < shape.length; row++) {
              if (shape[row][tl] !== '|' && shape[row][tl] !== '+') {break;}
              if (shape[row][rightCorners[k]] !== '|' && shape[row][rightCorners[k]] !== '+') {break;}
              let flag = false;

              if (shape[row][tl] === '+' && shape[row][rightCorners[k]] === '+') {
                for (let m = tl + 1; m < rightCorners[k]; m++) {
                  if (shape[row][m] !== '-' && shape[row][m] !== '+') {flag = true;}
                }
                if (!flag) {count++;}
              }
            }
          }
        }
      }
    }
    return count;
  }

  static findRightCorners(shape, i, j) {
    const rightCorners = [];
    for (let z = j + 1; z < shape[i].length; z++) {
      if (shape[i][z] === '-') {continue;}
      else if (shape[i][z] === '+') {rightCorners.push(z); continue;}
      else {break;}
    }
    return rightCorners;
  }
}
```