/**Create a function that will reverse all the element inside a nested array

exp

[1,2,3,4] => [4,3,2,1]
[1,[2,3],4]=>[4,[3,2],1]
[9,[5,[10,30]],6]=> [6,[[30,10],5]9]
 
 */

function reverseNestedArray(array) {

    for ( var i=array.length-1; i>=0 ;i--){
    

       if (Array.isArray(array[i])) {
         
       
          var d= array[i].reverse() ;
         
    
            return d  ;

        //  Illegal return statement error
       }
     

       else {
          return array.reverse();
       }
       
    }
}
    
    //  what is js reverse nested array


     reverseNestedArray([1,4,5,[6,7,8]])





module.exports = reverseNestedArray;