
function prime(x){
    var flag=1
    for(var i=2;i<x;i++){
        if(x%i==0){
            flag=0
            break
        }
    }
    return flag

}
function between(x,y,flag){
    for(var i=x;i<=y;i++){
        if(prime(i)){
            console.log("%s",i)
    }
    }
}

between(3,20)