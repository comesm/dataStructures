

 function oneAway(str1, str2) {
  let i = 0;
  let j = 0;
  
  if(Math.abs(str1.length - str2.length) > 1) {
      return false;
  }


  let editCount = 0;
  while(i < str1.length || j < str2.length) {
       if(str1[j] === str2[i]) {
           i++;j++;
           continue;
       } else {
         if(str1[i + 1] === str2[j]) {
           editCount++; i++;  
         } else if(str2[j+1] === str1[i]) {
           editCount++; j++;  
         } else if(str1[i+1] === str2[j+1] && j !== str2.length -1 && i !== str1.length -1 ) {
           editCount++; i++; j++;  
          } //else {
// //              return false;
// //          }
       }
     if(editCount > 1) {
         return false;
     }
    i++; j++;
  }
    return !(editCount > 1);
}

function oneAway(str1, str2) {
  let i = 1;
  let j = 1;
  
  if(Math.abs(str1.length - str2.length) > 1) {
      return false;
  }


  let editCount = 0;
  while(i < str1.length || j < str2.length) {
       if(str1[j-1] === str2[i-1]) {
           i++;j++;
           continue;
       } else {
         if(str1[i] === str2[j-1]) {
           editCount++; i++;  
         } else if(str2[j] === str1[i-1]) {
           editCount++; j++;  
         } else if(str1[i] === str2[j]) {
           editCount++; i++; j++;  
          } else {
              return false;
          }
       }
     if(editCount > 1) {
         return false;
     }
    i++; j++;
  }
    return !(editCount > 1);
}

function onAway(str1, str2) {
    
    if(Math.abs(str1.length - str2.length) > 1) {
        return false;
    }
   
   let shortStr = str1.length > str2.length ? str1 : str2;
   let longStr = str1.length > str2.length ? str2 : str1; 
    
   let i = 0;
   let j = 0;
   
   let foundDiff = false;
   while(i < shortStr.length && j < longStr.length) {
        
        if(shortStr[i] !== longStr[j]) {
            if(foundDiff) {
                return false
            }
            foundDiff = true;
            if(shortStr.length === longStr.length) {
                i++;
            }
        } else {
            i++;
        }
        j++;  
   } 
    return true;

}


oneAway('bake', 'pale')