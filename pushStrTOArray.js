var arr=[];
var num="";
var str="priya,herlin,pooja,riya";
for (let index = 0; index < str.length; index++) {
    if(str[index]==","){
    arr.push(num);
    num="";}
    else{

         num+=str[index];
    }
}
console.log(arr);