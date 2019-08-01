class Vertx {
    constructor(label,visited){
        this.label = lable;
        this.visited = visited;
    }
}

class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj=[];
        this.marked = [];
        this.edgeTo = []; // 保存从一个顶点到下一个顶点的所有边
        for(let i = 0;i<this.vertices;i++){
            this.adj[i] = [''];
            this.marked[i] = false;
        }
    }
    addEdge (v,w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph (){
        let str = '';
        for(let i = 0;i<this.vertices;i++){
            str += i+'-->'
            for(let j = 0;j<this.vertices;j++){
                if(this.adj[i][j]!=undefined){
                    str+=this.adj[i][j]+' ';
                }
            }
            str+='\n';
        }
        console.log(str)
    }
    dfs(v) {
        this.marked[v] = true;
        if (this.adj[v] != undefined) {
            console.log('哪些点可以到达: ' + v);
        };
        (this.adj[v] || []).forEach(i => {
            if(!this.marked[i]) {
                    this.dfs(i);
            }
        })
    }
    bfs(s) {
        const queue = [];
        this.marked[s] = true;
        queue.push(s); // 添加至队尾
        while (queue.length) {
            const v = queue.shift(); // 从队首删除
            if (this.adj[v] != undefined) {
                console.log('哪些点可以到达: ' + v);
            };
            (this.adj[v] || []).forEach(i => {
                if(!this.marked[i]) {
                    this.marked[i] = true;
                    this.edgeTo[i] = v;
                    queue.push(i);
                }
            })
        }
    }
    // 创建一个栈 存储于指定顶点有共同边的所有顶点
    pathTo(v) {
        const source = 0;
        if (!this.hasPathTo(v)) {
            return undefined;
        };

        const path = [];
        for (let i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        };
        path.push(source);
        return path;
    }
    hasPathTo(v) {
        return this.marked[v];
    }
}
const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);

const vertex = 4;
const paths = g.pathTo(vertex);
let res = '';
while (paths.length > 0) {
    if (paths.length > 1) {
        res += paths.pop() + '-';
    } else {
        res += paths.pop();
    }
};

console.log(res)