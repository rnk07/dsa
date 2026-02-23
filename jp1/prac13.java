package leetCode.jp1;

public class prac13 {
    
    public static int largstInArray(int[] arr){

        int ans =0;

        for(int i =0;i <arr.length;i++){
            if(arr[i] > ans){
                ans = arr[i];
            }
        }

        return ans;
    }

    public static void main (String[] abc){
    
        int[] arr = {1,5,3,2,55,9,4,555,6};
        System.out.println(largstInArray(arr));
    }


}
