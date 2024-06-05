// 1-savol

// function func(arg1) {
//     let arr = [];
//     for (let i = +prompt("iltioms son kiritin"); arr.length <= 4; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(func());

// 2-savol

// function func() {
//     let arr = [];

//     arr.push(1);
//     arr.push('salom');
//     arr.push(true);

//     arr.pop();

//     let natija = arr.join(" 😮‍💨 ");

//     return natija;
// }

// console.log(func());

// 3-savol

// function func() {
//     let arr = [];

//     arr.unshift("salom1");
//     arr.unshift("salom2");
//     arr.unshift("salom3");
//     arr.unshift("salom4");

//     let teskariArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         teskariArr.push(arr[i]);
//     }

//     let uzunlik = teskariArr.length;

//     console.log("Teskari tartibdagi massiv:", teskariArr);
//     console.log("Massivning uzunligi:", uzunlik);
// }

// func();


// 4-savol

// function func() {
//     let arr = [];

//     arr.unshift("el1")
//     arr.unshift("el2")

//     arr.shift()


//     let natija = arr.join(" , ")

//     return natija
// }
// console.log(func());


// 5-savol

// let arr = ["el1", "el2", "el3"];

// function func(arr) {
//     arr.pop();

//     let length = arr.length;

//     let el1 = arr[0];

//     return {
//         length,
//         el1
//     };
// }


// let result = func(arr);
// console.log(result);


// 6-savol

// let arr = ["salom1", "salom2"]

// function func(arr ) {

//     arr.push("salom")

//     let el2 = arr.at(-1)

//     return el2.toString()

// }

// let natija = func(arr)
// console.log(natija);


// 7-savol

// let myArr = ["salom1", "salom2"];

// function func(arr, newEl) {
//     arr.unshift(newEl);
//     arr.reverse();
//     return arr.length;
// }

// let natija = func(myArr, "salom");
// console.log(myArr);
// console.log("Uzunligi massivimdagi" + natija);

// 8-savol

// function func(arr) {
//     arr.shift();
//     let uzunligi = arr.length;
//     let element = arr.join(" , ");
//     return element;
// }

// let arr = ["salom1", "salom2", "salom3"];

// let natija = func(arr);
// console.log(natija); 


// 9-savol

// function func(array) {
//     array.push(6);
//     array.push(7);
    
//     array.unshift(0);
    
//     // Massiv uzunligini topamiz
//     let length = array.length;
    
//     let reversedArray = array.reverse();
    
//     let arrayString = reversedArray.join(", ");
    
//         return {
//             length: length,
//             reversedString: arrayString
//         };
// }

// let myArray = [1, 2, 3, 4, 5];
// let result = func(myArray);

// console.log("Massiv uzunligi:", result.length);
// console.log("Teskari tartibda string ko'rinishida:", result.reversedString);


// 10-savol

// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
//     arr.shift();
//     arr.pop();
    
//     let uzunlik = arr.length;
//     let teskariTartib = arr.slice().reverse();
    
//     return { uzunlik, teskariTartib };
// }

// let result = func(arr);
// console.log("Qolgan elementlar uzunligi:", result.uzunlik);
// console.log("Teskari tartibda joylashtirilgan massiv:", result.teskariTartib);


// 11-savol

// function func(array) {
//     array.reverse();
    
//     let arrayString = array.toString();
    
//     return arrayString.length;
// }

// let arr = [1, 2, 3, 4, 5];

// let length = func(arr);

// console.log("String uzunligi:", length);


// 12-savol

// function func(arr1, arr2) {
//     let array = arr1.concat(arr2);
    
//     let sliceArr = [];
//     for (let i = 0; i < array.length; i += 2) {
//         sliceArr.push(array[i]);
//     }
    
//     return sliceArr.length;
// }

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];

// let length = func(array1, array2);

// console.log("Massiv Uzunligi", length);


// 13-savol

// function func(arr) {
//     arr.splice(1, 3);
    
//     let arrStr = arr.join("");
    
//     return arrStr.length;
// }

// let arr = ["a", "b", "c", "d", "e", "f", "g"];

// let length = func(arr);

// console.log("String uzunligi ", length);


// 14-savol

// function func(array) {
//     let aliceArr = array.slice(2, array.length);
    
//     let reverArr = aliceArr.reverse();
    
//     return reverArr;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let natija = func(arr);

// console.log(natija);


// 15-savol

// function func(array) {
//     let arr1 = array.flat();

//     let arr2 = arr1.at(-1);

//     return arr2;
// }

// let arr = [[1, 2], [3, 4], [5, 6]];

// let result = func(arr);

// console.log(result);


// 16-savol

// function func(array) {
//     let el1 = array.at(2);

//     array.unshift(el1);

//     let length = array.length;

//     return length;
// }

// let arr = [1, 2, 3, 4, 5];

// let result = func(arr);

// console.log(result);


// 17-savol

// function func(array) {
//     let arr1 = array.reverse();
    
//     let arrStr = arr1.join("");
    
//     let arr2 = arrStr.charAt(arrStr.length - 1);
    
//     return arr2;
// }

// let arr = [1, 2, 3, 4, 5];

// let result = func(arr);

// console.log(result);


// 18-savol

// function func(array) {
//     let elSlice = array.slice(0, 2);
    
//     array.splice(3);
    
//     return array;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let result = func(arr);

// console.log(result);


// 19-savol

// function func(array) {
//     let el = array.splice(2, 2);
    
//     array.reverse();
    
//     return array;
// }

// let myArray = [1, 2, 3, 4, 5, 6, 7];

// let result = func(myArray);

// console.log(result);

// 20-savol

// function func(array) {
//     let str = array.join(",");
    
//     let yangiArr = str.split(",");
    
//     return yangiArr;
// }

// let arr = [1, 2, 3, 4, 5];

// let natija = func(arr);

// console.log(natija);

















































