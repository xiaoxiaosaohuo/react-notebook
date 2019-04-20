class Vnode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class List {
    constructor(arr){
        this.arr = arr;
        this.head = null;
        this.init();
    }
    init(){
        let i = 0;
        let temp = null;
        while(i<this.arr.length){
            if(i===0){
                this.head = new Vnode(arr[i]);
                temp = this.head;
            }else{
                let newNode = new Vnode(arr[i]);
                temp.next = newNode;
                temp = temp.next;
            }
            i++;

        }
    }
}

let arr = [1,3,0,4];
let a = new List(arr);

var reverseList = function(head) {
  let pre = null;
  while (head) {
    let next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
const sortList = (head)=>{
    listQuickSort(head,null)
    return head;
}
const listQuickSort = (head,end)=>{
    if (head == end || head.next == end) {
      return;
    }
        let pviot = quickSort(head);
        listQuickSort(head,pviot);
        listQuickSort(pviot.next,end);
}
const quickSort = (head,end)=>{
    let pivot = head.value;
    let slow = head;
    let fast = head.next;
    while(fast!=end){
        if (fast.value >= pivot){
            fast = fast.next;
        } else {
            slow.value = fast.value;
            slow = slow.next;
            fast.value = slow.value;
            fast = fast.next;
        }
    }
    slow.value = pivot;
    return slow;

}
debugger;
// let b = reverseList(a.head)
let c = sortList(a.head)
console.log(c)