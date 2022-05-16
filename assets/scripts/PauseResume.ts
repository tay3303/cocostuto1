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

    pauseResumeGame(event){
        switch(event.keyCode){
            case cc.macro.KEY.space:
                    cc.game.pause();
                break;
            case cc.macro.KEY.enter:
                    cc.game.resume();
                break;
        }
    }
    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.pauseResumeGame,this);
    }

    start () {

    }

    // update (dt) {}
}
