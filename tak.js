var  바디 = document.body;

var 테이블= document.createElement('table');

var 줄들 = [];

var 칸들 = [];

var 턴 = 'x';

var 결과 = document.createElement('div');



var 비동기콜백 = function(이벤트)

{



  console.log(이벤트.target);



  console.log(이벤트.target.parentNode);



  console.log(이벤트.target.parentNode.parentNode);



  var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);

  console.log(몇줄);

  var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);

  console.log(몇칸);



  if(칸들[몇줄][몇칸].textContent !=='')

  {



  }

  else

  {

    칸들[몇줄][몇칸].textContent =턴;



    var 다참 = false;

    if(칸들[몇줄][0].textContent == 턴 &&

    칸들[몇줄][1].textContent == 턴 &&

    칸들[몇줄][2].textContent == 턴)

    {

      다참= true;

    }

  }



  if(칸들[몇줄][0].textContent == 턴 &&

  칸들[몇줄][1].textContent == 턴 &&

  칸들[몇줄][2].textContent == 턴)

  {

    다참= true;

  }



  console.log("역 대각선: "+Math.abs(몇줄-몇칸));

  if(몇줄-몇칸 === 0 || Math.abs(몇줄-몇칸)===2)

  {

    console.log('대각선 통과');



    if((칸들[몇줄][0].textConent == 턴 &&

    칸들[몇줄][1].textContent == 턴 &&

    칸들[몇줄][2].textContent == 턴) ||(칸들[2][0].textContent ===턴 && 칸들[1][1].textContent ===턴))

    {

      다참 =true;

    }

  }



  if(다참)

  {

    결과.textContent = 턴 + '님이 승리';

    바디.append(결과);



    턴 = 'x';

    칸들.forEach(function(줄){

      줄.forEach(function(칸){

            칸.textContent='';

          });

        });

  }

  else

  {

    if(턴 === 'x')

    {

       턴 ='o';

    }

    else

    {

          턴 = 'x';

    }

  }

}











for(var i=1; i<=3; i+=1){

  var 줄 = document.createElement('tr');

  줄들.push(줄);

  칸들.push([]);

  for(var j=1; j<=3; j+=1){

   var 칸 = document.createElement('td');



   칸.addEventListener('click',비동기콜백);

   칸들[i-1].push(칸);

   줄.append(칸);

  }

  테이블.appendChild(줄);

}

바디.appendChild(테이블);

console.log(줄들,칸들);
