const prompt = require('prompt');

function isATriangle(a,b,c) {
  return (a+b>c) && (a+c>b) && (b+c>a);
}

function isEquilateral(a,b,c) {
  return a == b == c;
}

function isIsosceles(a,b,c) {
  return (a == b) || (a == c) || (b == c);
}

prompt.message = 'Segment'
prompt.start();
prompt.get([{
    name: 'a',
    type: 'number',
    required: true
  }, {
    name: 'b',
    type: 'number',
    required: true
  }, {
    name: 'c',
    type: 'number',
    required: true
  }
], function (err, result) {
  if (err) return console.error(err);
  
  var a = result.a, b = result.b, c = result.c;

  if (!isATriangle(a,b,c)) return console.log('Not a triangle');
  if (isEquilateral(a,b,c)) return console.log('Equilateral');
  if (isIsosceles(a,b,c)) return console.log('Isosceles');
  console.log('Scalene');
});
