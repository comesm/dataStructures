
function Node(value) {
    this.value = value;
    this.next = null;
}


function makeList() {
    
        


}

function remove(value, frontNode) {
  
  let head = frontNode;
  let prev = frontNode;
  while(head !== null) {
      if(head.value === value) {
          if(head === prev) {
            head = head.next;
            prev = prev.next;  
            frontNode = frontNode.next;
            continue;
          }
          prev.next = head.next;
          head = head.next;
          continue;
      } else {
          prev = head;
          head = head.next;
      }
  }
  return frontNode;
}

ll = remove(2, a);

console.log(ll);