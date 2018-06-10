function HashTable() {
     
    this._max = 10;
    this._currentLoad = 0;
    this._list = new Array(this._max);
   
    
 
    function Node(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
 
    this._resize = function(sizeBigger) {
   
         let tempSize = sizeBigger ? this._max * 2 : Math.floor(this._max) / 2;
         let old = this._list;
         this._list = new Array(tempSize);
         this._max = tempSize;
         for(let i = 0; i < old.length; i++) {
           let current = old[i];
           while(current) {
             this.insert(current.key, current.value);
             current = current.next;
           }
           
         }
    }
 
    this._getIndex = function(str, max) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
   }
   return hash % max;
   };
 
   this._getIndexa = function(key) {
        let val = key.charCodeAt(0);
        return val % this._max;
   }
 
   this._createNode = function(key, value) {
      return new Node(key, value);
   }
 }
 
 
 HashTable.prototype.insert = function(key, value) {
     
     let index = this._getIndex(key, this._max);
     let node = this._createNode(key, value);  
     
     if(this._list[index] !== undefined && this._list[index] !== null) {
         let head = this._list[index];
         if(head.key === key) {
            head.value = value;
            return; 
         }    
         while(head.next !== null) {
           if(head.next.key === key) {
               head.next.value = value;
               return;
           }  
           head = head.next;  
         }
         head.next = node;
 
     } else {
       this._list[index] = node;
       this._currentLoad++;
     }
     if(this._currentLoad / this._max >= .8) {
       this._resize(true);
     }
 }
 
 HashTable.prototype.remove = function(key) {
     let index = this._getIndex(key, this._max);
     let head = this._list[index];
     if(!head) {
         return;
     }
     if(head.key === key) {
         this._list[index] = head.next || undefined;
         if(this._list[index] === undefined) {
           this._currentLoad--;
         }
     }
     else {
         while(head.next !== null) {
           if(head.next.key === key) {
             head.next = head.next.next;
             return;
         }
         head = head.next;
     }
   }
   if(this._currentLoad / this._max < .2) {
       this._resize(false);
     }    
 }
 
 HashTable.prototype.isEmpty = function() {
 
 }
 
 HashTable.prototype.isFull = function() {
 
 }
 
 
 HashTable.prototype.clear = function() {
     this._list= new Array(10);
 
 }
 
 HashTable.prototype.retrieve = function(key) {
     let index = this._getIndex(key, this._max);
     return this._list[index][1];
 
 }
 
 function makeId() {
     let text = '';
     let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     for(let i = 0; i < 5; i++) {
       text += possible.charAt(Math.floor(Math.random() * possible.length));
     }
   return text;
 }
 
 table = new HashTable();
 
 table.insert('hello', 'password');
 table.insert('hello', 'password1');
 table.insert('jello', 'abc');
 table.remove('hello');
 table.remove('hello');
 console.log(table);
 
 function makeList(max) {
   
   for(let i = 0; i < max; i++) {
      let id = makeId();
      let value = makeId()
      table.insert(id, value);
   }
 }
 
 makeList(10000);
 
 //table.retrieve('hello')