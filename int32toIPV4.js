function int32ToIp(int32){
    //...
    if(int32==0) return "0.0.0.0";
    var arr=[];
    var bin = int32.toString(2);
    for (let i = 0; i < bin.length; i+=8) {
        arr.push(bin.slice(i,i+8));
    }
    return arr.map(c=> parseInt(c , 2)).join(".");
    
  }
console.log( int32ToIp(2154959208), "128.114.17.104", "wrong ip for interger: 2154959208") 
console.log( int32ToIp(0), "0.0.0.0", "wrong ip for integer: 0")
console.log( int32ToIp(2149583361), "128.32.10.1", "wrong ip for integer: 2149583361")