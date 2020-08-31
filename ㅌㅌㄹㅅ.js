var tetris = document.querySelector('#tetris');
var blockArr =
[
   ['red', true, [[1, 1], [1, 1],]],
   ['blue', true, [[0, 2, 0],  [2, 2, 2],]],
   ['orange', true, [[3, 3, 0], [0, 3, 3],]],
   ['skyblue', true, [[0, 4, 4], [4, 4, 0],]],
   ['yellowgreen', true, [[5, 5, 5], [5, 0, 0],]],
   ['pink', true, [[6, 6, 6], [0, 0, 6],]],
   ['yellow', true, [[7, 7, 7, 7],]]
];
var blockDict =
{
  0 : ['white',  false, []],
  1 : ['red', true, [[1, 1], [1, 1],]],
  2 : ['blue', true, [[0, 1, 0],  [1, 1, 1],]],
  3 : ['orange', true, [[1, 1, 0], [0, 1, 1],]],
  4 : ['skyblue', true, [[0, 1, 1], [1, 1, 0],]],
  5 : ['yellowgreen', true, [[1, 1, 1], [1, 0, 0],]],
  6 : ['pink', true, [[1, 1, 1], [0, 0, 1],]],
  7 : ['yellow', true, [[1, 1, 1, 1],]],
  10 : ['red', false, []],
  20 : ['blue', false, []],
  30 : ['orange', false, []],
  40 : ['skyblue', false, []],
  50 : ['yellowgreen', false, []],
  60 : ['pink', false, []],
  70 : ['yellow', false, []],
};

var tetrisData = [];
var stopDown = false;

function MakeFew()
{
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 20; i++)
  {
    var tr = document.createElement('tr');

    var arr = [];
    tetrisData.push(arr);

    fragment.appendChild(tr);
    for(var j = 0; j < 10; j++)
    {
      var td = document.createElement('td');
      tr.appendChild(td);
      arr.push(0);
    }
  }
  console.log(tetris, fragment);
  tetris.appendChild(fragment);
}

function Draw()
{
  tetrisData.forEach(function(tr, i)
  {
    tr.forEach(function(td, j)
    {
      tetris.children[i].children[j].className = blockDict[td][0];
    });
  })
}

function MakeBlock()
{
  stopDown = false;
  var block = blockArr[Math.floor(Math.random() * 7)][2];
  console.log(block);
  block.forEach(function(tr, i)
  {
    tr.forEach(function(td, j)
    {
      tetrisData[i][j + 3] = td;
    });
  });

  Draw();
}

function FallBlcok()
{
  for(var i = tetrisData.length - 1; i >= 0; i--)
  {
    tetrisData[i].forEach(function(td, j)
    {
      if(td > 0 && td < 10)
      {
        if(tetrisData[i + 1] && !stopDown)
        {
          tetrisData[i + 1][j] = td;
          tetrisData[i][j] = 0;
        }
        else
        {
          stopDown = true;
          tetrisData[i][j] = td * 10;
        }
      }
    });
  }

  if(stopDown)
  {
    MakeBlock();
  }
  Draw();
}

window.addEventListener('keydown', function(e)
{
  console.log(e);
  switch(e.code)
  {
    case 'ArrowRight':
      console.log('ArrowRight');
      break;
    case 'ArrowDown':
      console.log('ArrowLeft');
      break;
    case 'ArrowDown':
      console.log('ArrowUp');
      break;
    default:
      break;
  }
});

window.addEventListener('keyup', function(e)
{
  console.log(e);

  switch(e.code)
  {
    case 'Space':
      console.log('Space');
      break;
    case 'ArrowUp':
      console.log('ArrowUp');
      break;
    default:
      break;
  }

});
MakeFew();
MakeBlock();
setInterval(FallBlcok, 100);
