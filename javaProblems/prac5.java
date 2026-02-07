package leetCode.javaProblems;



public class prac5 {


    public static void sum(int arr []){
        int sum = 0;

        for(int i=0;i<arr.length;i++){
            sum += arr[i];
        }
        System.out.println(sum);
    }


  public static void main(String[] args) {
    
    int[] a = {1,2,3};
    sum(a);

  } 
}

