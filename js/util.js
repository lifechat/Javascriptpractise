

var Util = {
    isArray:function (arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';  //用来判断传入的参数是否为数组
    },
    copy:function(_obj){
        var obj = {};
        for(var i in _obj){
            if(Util.isArray(_obj[i])){
                obj[i] = _obj[i].slice(0);
            }else{
                obj[i] = _obj[i];
            }
        }
        return obj;
    },
    //将图片用对象进行存储
    images:{
        
		g: [ 'behind.gif', 'fighterShadow.gif', 'front.gif' ],
		
		RYU1: [ 'RYU1_wait.gif', 'RYU1_goForward.gif', 'RYU1_goBack.gif', 'RYU1_jumpUp.gif', 'RYU1_jump_down.gif', 'RYU1_impact_boxing.gif', 'RYU1_after_impact_boxing.gif', 'RYU1_before_whirl_kick.gif', 'RYU1_after_whirl_kick.gif', 'RYU1_whirl_kick.gif', 'RYU1_heavy_kick.gif', 'RYU1_jump_forward.gif', 'RYU1_crouch_heavy_kick.gif', 'RYU1_stand_up.gif', 'RYU1_crouch.gif', 'RYU1_jump_forward.gif', 'RYU1_jump_back.gif', 'RYU1_light_boxing.gif',
			'RYU1_crouch_light_boxing.gif', 'RYU1_light_kick.gif', 'RYU1_middle_boxing.gif', 'RYU1_crouch_middle_boxing.gif', 'RYU1_crouch_light_kick.gif', 'RYU1_wave_boxing.gif', 'RYU1_jump_light_kick.gif', 'RYU1_jumpMoved_middle_kick.gif', 'RYU1_jump_heavy_kick.gif', 'RYU1_jump_light_boxing.gif', 'RYU1_jump_middle_boxing.gif', 'RYU1_jumpMoved_light_kick.gif', 'RYU1_jump_middle_boxing.gif', 'RYU1_jumpMoved_light_kick.gif', 'RYU1_near_light_boxing.gif', 'RYU1_near_heavy_boxing.gif', 'RYU1_near_light_kick.gif', 'RYU1_near_middle_kick.gif', 'RYU1_near_heavy_kick.gif', 'RYU1_stand_up_defense.gif', 'RYU1_stand_crouch_defense.gif',
			'RYU1_beAttacked_fall.gif', 'RYU1_somesault_up.gif', 'RYU1_beAttacked_top.gif', 'RYU1_beAttacked_bottom.gif', 'RYU1_beAttacked_heavy.gif', 'RYU1_before_fall_down.gif', 'RYU1_fall_down.gif', 'RYU1_beAttacked_impact.gif'
		
		],

		RYU2: [ 'RYU2_wait.gif', 'RYU2_goForward.gif', 'RYU2_goBack.gif', 'RYU2_jumpUp.gif', 'RYU2_jump_down.gif', 'RYU2_impact_boxing.gif', 'RYU2_after_impact_boxing.gif', 'RYU2_before_whirl_kick.gif', 'RYU2_after_whirl_kick.gif', 'RYU2_whirl_kick.gif', 'RYU2_heavy_kick.gif', 'RYU2_jump_forward.gif', 'RYU2_crouch_heavy_kick.gif', 'RYU2_stand_up.gif', 'RYU2_crouch.gif', 'RYU2_jump_forward.gif', 'RYU2_jump_back.gif', 'RYU2_light_boxing.gif',
			'RYU2_crouch_light_boxing.gif', 'RYU2_light_kick.gif', 'RYU2_middle_boxing.gif', 'RYU2_crouch_middle_boxing.gif', 'RYU2_crouch_light_kick.gif', 'RYU2_wave_boxing.gif', 'RYU2_jump_light_kick.gif', 'RYU2_jumpMoved_middle_kick.gif', 'RYU2_jump_heavy_kick.gif', 'RYU2_jump_light_boxing.gif', 'RYU2_jump_middle_boxing.gif', 'RYU2_jumpMoved_light_kick.gif', 'RYU2_jump_middle_boxing.gif', 'RYU2_jumpMoved_light_kick.gif', 'RYU2_near_light_boxing.gif', 'RYU2_near_heavy_boxing.gif', 'RYU2_near_light_kick.gif', 'RYU2_near_middle_kick.gif', 'RYU2_near_heavy_kick.gif', 'RYU2_stand_up_defense.gif', 'RYU2_stand_crouch_defense.gif',
			'RYU2_beAttacked_fall.gif', 'RYU2_somesault_up.gif', 'RYU2_beAttacked_top.gif', 'RYU2_beAttacked_bottom.gif', 'RYU2_beAttacked_heavy.gif', 'RYU2_before_fall_down.gif', 'RYU2_fall_down.gif', 'RYU2_beAttacked_impact.gif'
		
		],

		hitEffect: [ 'defense.gif', 'heavy.gif', 'light.gif' ],

		magic: [ 'simpleFire.gif', 'transverseWave.gif', 'transverseWaveDisappear.gif' ]
    },
    //存储音频
    audios: [ 'china.mp3', 'defense.mp3', 'fall.mp3', 'heavy_boxing.mp3', 'hit_heavy_boxing.mp3', 'hit_heavy_kick.mp3', 'hit_light.mp3', 'impact_boxing.mp3', 'light_boxing.mp3', 'wave_boxing.mp3', 'whirl_kick.mp3' ],
    
    imgObj: {},

    //获取图片对象信息
    getImage:function(name){
        return this.imgObj[name];
    },
    loadImg:function(callback){

    },
    //临时存储
    audioObj:{},
    loadAudio:function(callback){
         var root = 'sound/', //音频根路径
             count = this.audios.length,//文件数量
             num = 0;
    }
}