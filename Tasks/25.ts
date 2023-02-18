import PromptSync from "prompt-sync";
let prompt= PromptSync()

interface Book {
    title: string;
    author: string;
    readingStatus: boolean;
  }
let library:Book[] = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

library.map((x:Book)=>{
    if(x.readingStatus===false){

        console.log("You still need to read "+x.title+" by "+x.author+"\n");
    }else{

        console.log("Already read "+x.title+" by "+x.author+"\n");
    }
})