// let arr=['hello','hii','500',true]
// for(let i in arr){
//     //gives the index of the array
//     console.log(i);
// }

// for(let i of arr){
//     //gives the value of the array
//     console.log(i);
// }

// console.log(arr);

let  arr=[1,2,3,4,5,6,6,5]

// let data=arr.forEach((a)=>{
//     // console.log(a);
//     // console.log(a*3);
//     return a*3;
// })

// console.log(data);

let data=arr.map((a,b,c)=>{
    // console.log(c);
    
    return a*3;
})

console.log(data);