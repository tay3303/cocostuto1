System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, mouse;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "832adazpqtN0o2D2YuP3+W2", "mouse", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mouse", mouse = (_dec = ccclass('mouse'), _dec(_class = class mouse extends Component {
        onLoad() {
          this.node.on('mousedown', function (event) {
            console.log('The bush has been pressed');
          });
          this.node.on('mouseup', function (event) {
            console.log('The bush has been released');
          });
          this.node.on('mousewheel', function (event) {
            console.log('The mousewheel has been moved');
          });
          this.node.on('mouseenter', function (event) {
            console.log('The mouse is on the bush but has not clicked on it');
          });
          this.node.on('mouseleave', function (event) {
            console.log('The mouse is no longer on the bush');
          });
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f760fc3cae4b4d1ac744f9bcc4db6798fa73fc69.js.map