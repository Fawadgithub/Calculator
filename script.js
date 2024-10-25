var Result = document.getElementById("result") ;
function insertvalue(value){
Result.value +=value;
}
function Allclear(){
    Result.value =" "; 
}
function Delete(){
Result.value = Result.value.slice(0,-1);
}

function calculate(){
    try{
        Result.value = eval(Result.value);
    }
    catch{
        Result.value = "Error" ;
        
    }
}