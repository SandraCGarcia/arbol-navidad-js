'use strict';

for (var i = 0; i <= 6; i++) {
  var sheet = ('▲');
  var trunk = ('|');
  var star = ('*')
  if (i === 0) {
  console.log (star)
} else if (i === 1) {
  console.log(sheet);
} else if (i === 2) {
  console.log(sheet + sheet);
} else if (i === 3) {
  console.log(sheet + sheet + sheet);
} else if (i === 4) {
  console.log(sheet + sheet + sheet + sheet);
} else if (i === 5) {
  console.log(sheet + sheet + sheet + sheet + sheet);
} else if (i === 6) {
  console.log(trunk);
  }
}

console.log('-----------');

function paintTree(limit) {
  var sheet = ('▲');
  var trunk = ('|');
  var star = ('*');
  var space = ' ';

  for (var i = 1; i <= limit; i++) {
    if (i === 1) {
      console.log(space.repeat(limit - i) + star);
    }
    console.log(
      space.repeat(limit - i) +
      sheet.repeat(i) +
      sheet.repeat(i - 1)
    );
    if (i === limit) {

    }
  }
  console.log (space.repeat(limit - 1) + trunk);
}

paintTree(6);
