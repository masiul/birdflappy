var bird = {
    skyPosition:0,
    startColor:'blue',
    skyStep:2,
    birdTop:235,
    birdX:0,
    birdStepY:0,
    startFlag:false,
    minTop:0,
    maxTop:570,
    init:function(){
        this.el = document.getElementsByClassName("game")[0];
        this.oBird = this.el.getElementsByClassName('bird')[0];      
        this.oStart = this.el.getElementsByClassName('start')[0];
        this.oScore = this.el.getElementsByClassName('score')[0];
        this.animate();
        
    },
    animate:function(){
        var count = 0;
        var that = this;
        this.timer = setInterval(function(){
            ++count;
            that.skyMove();
            if(count % 10 === 0){
                that.birdJump();
                that.startBiund();
                that.birdFly(count);
            }
        },30)
        
    },
    skyMove:function(){       
            this.skyPosition -= this.skyStep;
            this.el.style.backgroundPositionX = this.skyPosition+'px';
    },
    birdJump:function(){
        this.birdTop = this.birdTop === 220 ? 260 : 220;
        this.oBird.style.top = this.birdTop + 'px';
       
    },
    birdDrop:function(){
        this.birdTop += ++this.birdStepY;
        this.oBird.style.top = this.birdTop + 'px';
        this.judgeKnock()
    },
    judgeKnock:function(){
        this.judgeBoundary();
        this.judgePipe();
    },
    judgeBoundary:function(){
        if(this.birdTop <= this.minTop|| this.birdTop >= this.maxTop){
            this.failGame();
        }
    },
    judgePipe:function(){

    },
    creatPipi:function(){
        var upHeight = 50 + Math.floor(Math.random()*175);
        var downHeight = 600 - upHeight;
        var oDiv = document.createElement('div');
        oDiv.classList.add('pipe');
        oDiv.style.height = upHeight + 'px';
        this.el.appendChild(oDiv);
        var oDiv2 = document.createElement('div');
        oDiv.classList.add('pipe');
        oDiv2.style.height = 600-upHeight-150 +'px';
        var oUpPipe = this.createEle('div', ['pipe', 'pipe-up'],{
            height: upHeight +'px'
        });
        var oDownPipe = this.createEle('div', ['pipe', 'pipe-down'],{
            height: upHeight +'px'
        });
    },
    createEle:function(eleName, classArr, styleObj){
        var dom = this.el.createElement(eleName);
        for(var i = 0; i<classArr.length; i++){
            dom.classArr.add(classArr[i]);
        }
        for(var key in styleObj){
            dom.style[key] = styleObj[key];
        }
        return dom;
    },
    birdFly:function(count){
        this.oBird.style.backgroundPositionX = count % 3 *  - 30 + 'px';
       
    },
    startBiund:function(){
        var prevColor =this.startColor;
        this.startColor = this.startColor === 'blue' ? 'white' : 'blue';
        this.oStart.classList.remove(prevColor);
        this.oStart.classList.add(this.startColor);
       
    },
    handleStart:function(){
        var that = this;
        this.onStart.onclick = function(){
            that.skyStep = 5;
            that.oStart.style.display = 'none';
            that.oScore.style.display = 'block';
            that.oBird.style.left = '80';
            that.startFlag = true;
        }
    },
    handleClick:function(){
        var that = this;
        this.el.onclick = function(e){
            var dom = e.target;
            //var 
        }
    },
    failGame: function(){
       // this.timer
    }

}
bird.init();

