// 2.1 JavaScript数据类型及语言基础
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return Object.prototype.toString.call(fn) == '[object Function]';
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function  cloneObject(obj) {
    var result,oClass=isClass(obj);
    //Make sure result type
    if (oClass === "Object") {//"标准的" 对象
        result={};
    }else if(oClass==="Array"){
        result=[]
    }else{
        return obj;
    }
    for (const key in obj) {
        var copy=obj[key];
        if(isClass(copy)=="Object"||"Array"){
            //使用calle进行递归调用，把copy的成员也复制
            result[key]=arguments.callee(copy);
        }else{
            result[key]=obj[key];
        }
    }
    return result;
}

//判断是否为对象
function isClass(o) {
    if(o===null) return "Null";
    if(o===undefined)return "Undefined";
    return Object.prototype.toString.call(0).slice(8,-1);
}


//测试用例：
/*
var srcObj = {
   a: 1,
   b: {
       b1: ["hello","hi"],
       b2: "JavaScript"
   }
};
var adObj = srcObj;
var tarObj = cloneObject(srcObj);
srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(adObj.a); //2
console.log(adObj.b.b1[0]); //"Hello"

console.log(tarObj.a);  //1
console.log(tarObj.b.b1[0]); //"hello" */

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var result =[];
    for (let index = 0; index < arr.length; index++) {
        var item = arr[index];
        if (result.indexOf(item) === -1) { //IE9以下不支持数组的indexOf方法
            result.push(item);
        }
    }
    return result;
}

//hash 速度最快
function  uniqArray1(arr) {
    var hash = {};
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        if (!hash[key]) {
            result.push(key);
            hash[key] = true;
        }
    }
    return result;
}

function uniqArray2(arr) {
    var obj = {};
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        obj[key] = true;
    }
    return Object.keys(obj); //IE9以下不支持Object.keys()方法
}

// 使用示例
/*var a = [1, 3, 5, 7, 5, 3];
var aa = ["a","b","c","b","c","e"]
console.log(uniqArray2(a)); // ["1", "3", "5", "7"]，object.keys()返回的是字符串数组，因为对象属性只能字符串，
// 要真正实现去重得利用map再循环一次强制转化成number类型
console.log(uniqArray2(aa));["a", "b", "c", "e"]
*/

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符。假定空白字符只有半角空格、Tab
function simpleTrim(str) {
    function  isEmpty(c) {
        return /\s/.test(c);
    }
    var len = str.length;
    for (var i = 0; i < len && isEmpty(str.charAt(i)); i++);
    if (i === len) {//字符串全是空格或者字符串为空循环根本没执行
        return '';
    }
    
    for (var j = len; j && isEmpty(str.charAt(j - 1)); j++);
    return str.substring(i,j);
}


// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

// 使用示例
/*var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'*/

//实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function  each(arr, fn) {
    for(var i=0;i<arr.length;i++){
        fn(arr[i],i);
    }
}

// 使用示例
/*var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html*/

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength() {
    var count=0;
    for(var item in obj) {
        if(obj.hasOwnProperty(item)){
            count++;
        }
    }
    return count;
}

// 使用示例
/*var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3*/

// 判断是否为邮箱地址
function  isEmail(emailStr) {
    // return (/^[a-z0-9]([-_\.]?[a-z0-9]+)*@([-_]?[a-z0-9]+)+[\.][a-z]{2,7}([\.][a-z]{2})?$/i).test(emsilStr);
    return emailStr.search(/^[a-z0-9]([-_\.]?[a-z0-9]+)*@([-_]?[a-z0-9]+)+[\.][a-z]{2,7}([\.][a-z]{2})?$/i) !== -1;//xxxx@gmail.com
}

//判断是否为手机号
function isMobilePhone(phone) {
    phone = phone + '';
    return phone.search(/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/) !== -1;
}