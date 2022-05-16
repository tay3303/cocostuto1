import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mouse')
export class mouse extends Component {

    onLoad(){
        this.node.on('mousedown',function(event){
            console.log('The bush has been pressed');
        });
        this.node.on('mouseup',function(event){
            console.log('The bush has been released');
        });
        this.node.on('mousewheel',function(event){
            console.log('The mousewheel has been moved');
        });
        this.node.on('mouseenter',function(event){
            console.log('The mouse is on the bush but has not clicked on it');
        });
        this.node.on('mouseleave',function(event){
            console.log('The mouse is no longer on the bush');
        });
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}

