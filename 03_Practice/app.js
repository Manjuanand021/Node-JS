// var obj ={
//     greet: 'hello'
// }
// console.log(obj.greet);
// console.log(obj['greet']);
// var prop = 'greet'
// console.log(obj[prop]);

var arr =[];
arr.push(function(){
    console.log('hellloooos')
});
arr.forEach(function(item){
    item();
})
