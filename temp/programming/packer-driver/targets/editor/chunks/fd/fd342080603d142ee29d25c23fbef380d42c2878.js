System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, movement;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aaf9bL38IFAAYu3IAVruKOM", "movement", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("movement", movement = (_dec = ccclass('movement'), _dec(_class = class movement extends Component {
        start() {}

        update(dt) {
          this.node.setPosition(this.node.position.x + 10 * dt, this.node.position.y);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd342080603d142ee29d25c23fbef380d42c2878.js.map