
window.onload= function(){
    var bird =document.getElementsByClassName("bird")[0];
    var bgx =0; //bird.style.backgroundPositionX 
    var gameBGX =0;
    var startWords = document.getElementsByClassName("start")[0];
    var startWordSize = 0;
    var startWordsColor = ['#ffffff','#94d4ff','#4bb5fc',,'#16a1fe','#0099ff'];
    var big =true;
    
    //小鸟飞行
    var birdFly = setInterval(function(){
        bgx+=30;
        bird.style.backgroundPositionX = bgx+'px';
    },200);

    //文字闪烁
    var startShine = setInterval(function(){
       // changColor();
    },40);

    function changColor(){
      
        if(startWordSize==0){
            big=true;
        }else if(startWordSize==5){
            big=false;
        }
        if(startWordSize<5&&big){
            startWordSize++;
            startWords.style.color = startWordsColor[startWordSize];
            startWords.style.fontSize = (24+startWordSize) + 'px';
        }else if(!big){
            startWordSize--;
            startWords.style.color = startWordsColor[startWordSize];
            startWords.style.fontSize = (24+startWordSize) + 'px';
        }   
       
    }


    bgMove(100);
    //背景移动
    function bgMove(speed){
       
        setInterval(function(){
            gameBGX-=10;
            document.getElementsByClassName("game")[0].style.backgroundPositionX = gameBGX+'px';
        },speed)
    }

    







   
     



}
