
function mergeSort(array) {
    let helper = new Array(array.length);
    
    mergeSortHelper(array, 0, array.length - 1, helper);
    return array;
  
  }
  
  
  function mergeSortHelper(array, lower, upper, helper) {
    
    
    if(upper > lower) {
      let mid = Math.floor((upper + lower) / 2);
       
       //sort lower
       mergeSortHelper(array, lower, mid, helper); 
       
       //sort upper
       mergeSortHelper(array, mid+1, upper, helper);
       merge(array, lower, mid, upper, helper);
  
    }
  
  }
  
  function merge(array, lower, mid, upper, helper) {
  
      
      for(let i = lower; i <= upper; i++) {
        helper[i] = array[i];
      }
      let lowerIdx = lower;
      let upperIdx = mid + 1;
      let current = lower;
  
      while(lowerIdx <= mid && upperIdx <= upper) {
        if(helper[lowerIdx] <= helper[upperIdx]) {
          array[current] = helper[lowerIdx];
          lowerIdx++;
        } else {
          array[current] = helper[upperIdx];
          upperIdx++;
        }
        current++;
      }
      let remaining = mid - lowerIdx;
      for(let i = 0; i <= remaining; i++) {
        array[current + i] = helper[upperIdx + i];
      } 
  
  
  
      //return;
  }
  
  
  mergeSort([4,3,1,6,7])