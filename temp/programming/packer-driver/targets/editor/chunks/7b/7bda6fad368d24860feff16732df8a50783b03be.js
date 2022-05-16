System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _class, _crd, ccclass, property, NewClass;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "777adLlwVZCca1Anwzd/EeM", "PauseResume", undefined);

      // Learn TypeScript:
      //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
      // Learn Attribute:
      //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
      // Learn life-cycle callbacks:
      //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", NewClass = ccclass(_class = class NewClass extends cc.Component {
        // LIFE-CYCLE CALLBACKS:
        pauseResumeGame(event) {
          switch (event.keyCode) {
            case cc.macro.KEY.space:
              cc.game.pause();
              break;

            case cc.macro.KEY.enter:
              cc.game.resume();
              break;
          }
        }

        onLoad() {
          cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.pauseResumeGame, this);
        }

        start() {} // update (dt) {}


      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bda6fad368d24860feff16732df8a50783b03be.js.map