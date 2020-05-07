/**
 * @author 夏琦
 * @time 2020-5-7
 * @class Event事件类
 */
var Event = function(){
    var obj = {}; //设立一个空对象
    //定义一个方法
    var listen = function(key,eventfn,type){
        obj[key] 
    }
    
}
//接口对象
var Interfaces = {
    Lock:function(){

    },
    //队列监测方法
    Queue:function(){
        //栈空间
        var stack = [];
        //添加元素
        var add = function(obj){
            //首先判断元素是否为数组
            if(Util.isArray(obj)){
                return stack = stack.concat(obj);//是的话，就将两个数组的元素串起来
            }
            //不是则将对应的单个元素在数组的末尾添加
            stack.push(obj);//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
            return stack;
        }
      //往数组的前面添加一个或多个元素
        var unshift = function(obj){
           stack.unshift(obj);
        } 
        //返回数组的长度和删除的第一个元素
        var dequeue = function(){
            return stack.length && stack.shift();
        }
        {
            return {
                add:add,
                
            }
        }
    },
   //音频处理方法
   Audio:function(){
       var audio = new Audio();
       
       //播放
       var play = function(src){
           if(!src) return;  //没有传入音频地址就return终止运行
           audio.src = src;
           audio.play();
       }
       //停止播放
       var pause = function(){
           audio.pause();
       }
       //重复播放
       var loop = function(){
            audio.loop=true;
       }

       return  {
           play:play,
           pause:pause,
           loop:loop
       }
   }
}
