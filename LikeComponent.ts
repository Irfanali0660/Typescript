// export class LikesComponet{
//     // likescount:number;
//     // isSelected:boolean;

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


export class LikesComponet{
    // likescount:number;
    // isSelected:boolean;

constructor(private _likescount:number,private _isSelected:boolean){
  
}
onclick(){
    // if(this.isSelected){
    //     this.likescount--;
    //     // this.isSelected=false;
    // }else{
    //     this.likescount++;
    //     // this.isSelected=true;
    // }
    this._likescount+=(this._isSelected) ? -1 : +1;
    this._isSelected=!this._isSelected
  }

  get likecount(){
    return this._likescount;
  }
  get iselected(){
    return this._isSelected;
  }
}