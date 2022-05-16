import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Touchinput')
export class Touchinput extends Component {

    onTouchStart(touch,event){
        console.log('location: '+touch.getLocation().x+''+touch.getLocation().y);
    }

    onLoad(){
    this.node.on('touchstart',this.onTouchStart,this);

    }


    start() {

    }

    //update(deltaTime: number) {}
}

