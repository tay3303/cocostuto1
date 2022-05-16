System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _class, _crd, ccclass, property, NewClass;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a933eRLTPBM2LM59wxLzV/a", "changeScene", undefined);

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
        changeScene(event) {
          switch (event.keyCode) {
            case cc.macro.KEY.enter:
              cc.director.loadScene('ExampleScene');
              break;
          }
        }

        onLoad() {
          cc.director.preloadScene('ExampleScene', function () {
            console.log('the ExampleScene has been loaded in memory');
          });
          cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.changeScene, this);
        }

        start() {} // update (dt) {}


      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=def83e5d66bd2bbf3d8c04ccd1435960667cbc38.js.map