System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _class, _crd, ccclass, property, NewClass;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10d2e/BSflKTqr0FR87Kdj1", "buttonSwitch", undefined);

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
        onLoad() {
          this.node.on('mousedown', function (event) {
            cc.director.loadScene('ExampleScene');
          });
        }

        start() {} // update (dt) {}


      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=599a0c2f43bf5a06631892515a8a1bd83304397b.js.map