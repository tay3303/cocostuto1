// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:
    changeScene(event){
        switch(event.keyCode){
            case cc.macro.KEY.enter:
                cc.director.loadScene('ExampleScene');
                break;
        }
    }
    onLoad () {
        cc.director.preloadScene('ExampleScene',function(){
            console.log('the ExampleScene has been loaded in memory');
        });
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.changeScene,this);
    }

    start () {

    }

    // update (dt) {}
}
