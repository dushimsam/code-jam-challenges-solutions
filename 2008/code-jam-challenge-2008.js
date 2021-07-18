
const largest_fraction = 10000;
let n = 5;
const FIRST_JUICE=[0,3000,1000,2000,1000],SECOND_JUICE=[1250,0,1000,1000,3000],THIRD_JUICE=[0,3000,1000,2000,2000];

function find_maxum_number(arr)
{
  let arr_copy = [...arr]
  
for(let i = 1;i < n; ++i)
    {
       if(arr_copy[0] < arr_copy[i])
          {arr_copy[0] = arr_copy[i];} 
    }
    return  arr_copy[0];
}

function give_max_arr()
{
  
//   console.log(find_maxum_number(THIRD_JUICE))
//   console.log(THIRD_JUICE)
  
    return [find_maxum_number(FIRST_JUICE),find_maxum_number(SECOND_JUICE),find_maxum_number(THIRD_JUICE)]
}

function count_people()
{
    let sum = 0;
    let sum_prev =0;
    let count = n;
    let max_arrays = give_max_arr();
    
    for(let i = 0;i < 3 ;i++)
    {
         sum += max_arrays[i]

         if(sum > largest_fraction)
         {

             let left = largest_fraction - sum_prev;

             if(i === 0)
             {  
            count = find_satisfy(FIRST_JUICE,left);        
            
             }else if(i === 1)
             {  
            count = find_satisfy(SECOND_JUICE,left);        
              } else if(i === 2)
             {  
          count = find_satisfy(THIRD_JUICE,left);        
             }
             return count;
         }else if(give_max_arr()[i] === largest_fraction){
           return 1;
         } else{
             sum_prev = sum;
         }
    }

    return count;
}

function selectionSort(a) 
{
   let i, j, min, temp;
   for (let i = 0; i < n - 1; i++) {
      min = i;
      for (let j = i + 1; j < n; j++)
      if (a[j] < a[min])
      min = j;
      temp = a[i];
      a[i] = a[min];
      a[min] = temp;
   }
   return a;
}

function find_satisfy(arr,max)
{
         

    let count = 0;
    let sum=0;
    let sorted_array = selectionSort(arr);
                     for(let j = 0;j < n;j++)
                      {
                             sum +=sorted_array[j];
                             if(sum < max)
                             {
                                 count++;
                             }else{
                                 return count;
                             }
                      }
                      return count;
}


console.log("Number of people to satisfy ",count_people());
