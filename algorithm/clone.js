const clone = (x)=>{
    let root = {};
    let loopList= [
        {
            parent:root,
            key:undefined,
            data:x
        }
    ];

    while(loopList.length){
        let node = loopList.pop();
        let parent = node.parent;
        let key = node.key;
        let data = node.data;
        let res=parent;
        if(typeof key !='undefined'){
            res = parent[key]={};
        }
        for(let k in data){
            if(data.hasOwnProperty(k)){
                if(data[k]===data){
                    res[k] = data;
                }else if(typeof data[k]==='object'){
                    loopList.push({
                        parent:res,
                        key:k,
                        data:data[k]
                    }) 
                }else{
                    res[k] = data[k]
                }
            }
        }
    }

    return root;

}

let data = {
    a:{
        b:{c:1},
        children:{
            c:1
        }
    }
}
clone(data)