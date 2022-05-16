System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _class, _crd, ccclass, property, NewClass;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7e41ZzFRNKfKtAik4t09jR", "Mouse-001", undefined);

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
            console.log('The bush has been pressed');
          });
          this.node.on('mouseup', function (event) {
            console.log('The bush has been released');
          });
          this.node.on('mousewheel', function (event) {
            console.log('The Mouse wheel has been moved');
          });
          this.node.on('mouseenter', function (event) {
            console.log('The mouse is on the bush but has not clicked on it');
          });
          this.node.on('mouseleave', function (event) {
            console.log('The mouse is nolonger on the bush');
          });
        }

        start() {} // update (dt) {}


      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ffd3320f84e12844ec237da59681a2406752773.js.map