import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('movement')
export class movement extends Component {

    @property
    speed: number = 0.0001;
    start() {

    }

    update(dt) {
        this.node.setPosition(this.node.position.x+this.speed, this.node.position.y);
        //this.node.angle += 10;
        if(this.node.position.x>this.node.parent.width)
        {
            this.node.setPosition(0,this.node.position.y);
        }
    }
}

