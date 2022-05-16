System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Touchinput;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16707sAib5CeKlIhhTxQc/s", "Touchinput", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Touchinput", Touchinput = (_dec = ccclass('Touchinput'), _dec(_class = class Touchinput extends Component {
        onTouchStart(touch, event) {
          console.log('location: ' + touch.getLocation().x + '' + touch.getLocation().y);
        }

        onLoad() {
          this.node.on('touchstart', this.onTouchStart, this);
        }

        start() {} //update(deltaTime: number) {}


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fda5ef9fa57119c21dc1d0a2c17769c6ab413e04.js.map