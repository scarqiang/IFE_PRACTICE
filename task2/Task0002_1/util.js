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