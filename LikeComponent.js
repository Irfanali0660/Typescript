"use strict";
// export class LikesComponet{
//     // likescount:number;
//     // isSelected:boolean;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesComponet = void 0;
// constructor(public likescount:number,public isSelected:boolean){
//     this.likescount=likescount
// }
// onclick(){
//     // if(this.isSelected){
//     //     this.likescount--;
//     //     // this.isSelected=false;
//     // }else{
//     //     this.likescount++;
//     //     // this.isSelected=true;
//     // }
//     this.likescount+=(this.isSelected) ? 1 :-1;
//     this.isSelected=!this.isSelected
//   }
// }
class LikesComponet {
    // likescount:number;
    // isSelected:boolean;
    constructor(_likescount, _isSelected) {
        this._likescount = _likescount;
        this._isSelected = _isSelected;
    }
    onclick() {
        // if(this.isSelected){
        //     this.likescount--;
        //     // this.isSelected=false;
        // }else{
        //     this.likescount++;
        //     // this.isSelected=true;
        // }
        this._likescount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    }
    get likecount() {
        return this._likescount;
    }
    get iselected() {
        return this._isSelected;
    }
}
exports.LikesComponet = LikesComponet;
