package leetCode.javaProblems;

import java.util.LinkedHashSet;
import java.util.Set;

public class prac16 {
    
    public static void  removeDuplicate(int[]arr){

        Set <Integer> set = new LinkedHashSet<>();

        for(int a:arr){
            set.add(a);
        }

        System.out.println(set);
    }

public static void main(String[] args) {
    
    int[] arr = {1,2,3,4,4,5,6,5,3};
    removeDuplicate(arr);
}

}
