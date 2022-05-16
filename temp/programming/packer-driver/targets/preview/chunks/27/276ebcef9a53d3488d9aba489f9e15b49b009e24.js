System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _class, _crd, ccclass, property, NewClass;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59e13aFbhhLIZJfnTM96DZg", "Keyboard", undefined);

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
        checkKeyDown(event) {
          switch (event.keyCode) {
            case cc.macro.KEY.space:
              console.log('hey guys, the space bar has been pressed');
              break;

            case cc.macro.KEY.backspace:
              console.log('hey guys, the back space has been pressed');
              break;
          }
        }

        checkKeyUp(event) {
          switch (event.keyCode) {
            case cc.macro.KEY.space:
              console.log('The space bar has been released');
              break;

            case cc.macro.KEY.backspace:
              console.log('The backspace has been released');
              break;

            case cc.macro.KEY.a:
              console.log('The a button has been released.');
              this.unschedule(this.myFunction);
              break;
          }
        }

        myFunction() {
          console.log('i have run after 3 seconds');
        }

        mySchedule() {
          console.log('I have only run once, after ten seconds');
        }

        onLoad() {
          cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.checkKeyDown, this);
          cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.checkKeyUp, this); /// this.schedule(this.myFunction,3,cc.macro.REPEAT_FOREVER,0);
          ///this.scheduleOnce(this.mySchedule,10);
        }

        start() {} // update (dt) {}


      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=276ebcef9a53d3488d9aba489f9e15b49b009e24.js.map