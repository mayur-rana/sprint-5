//ex1

var i;
var str = "#"

for(i=0; i < 7; i++){
    console.log(str);
    str += "#";
}

//ex2

var i;
        
for(i=0; i < 101; i++){
    if(i%3 == 0 && i%5 ==0){
        console.log("Buzzfizz");
    }

    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
        else{
            console.log(i);
    
    }  
    
}

//ex3

var i;
var j;
var size = 8;
var str = "";

for(i=0; i < size; i++){
    for(j=0; j < size; j++){
        if((i+j) % 2 == 0){
            str += " ";
            }else{
                str += "#";
                } 
    }
    str += "\n";
}
console.log(str);