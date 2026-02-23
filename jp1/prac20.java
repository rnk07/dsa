package leetCode.jp1;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class prac20 {
    


    public static void main(String[] args) {
        

        // List<Integer> nums = Arrays.asList(1,2,3,4,5,6,7,8,9,10,11);

        // List<Integer> ans = nums.stream()
        // .filter(n->(n%2==0))
        // .collect(Collectors.toList());

        //  long countNum  = nums.stream()
        // .filter(n->(n%2==0))
        // .count();

        // boolean result = nums.stream()
        // .filter(n->(n%2==0))
        // .anyMatch(n-> n==2);

        // System.out.println(ans);
        // System.out.println(countNum);
        // System.out.println(result);



//         List<String> names = Arrays.asList("Ronak","Aman","Bob","Charlie");

// long result =        names.stream()
//         .filter(s-> s.startsWith("A"))
//         .count();
// System.out.println(result);


        // List<Integer> nums = Arrays.asList(1,2,33,4,32,89,17);


        // Optional<Integer> result =nums.stream().filter(n-> (n%2!=0)).max((a,b)->a.compareTo(b));
        // System.out.println(result);

        // String a = "ronak";
        // System.out.println(a.substring(a.length()-2).repeat(3));
       
        List<String> names  = Arrays.asList("","Ro");

      Optional<String> longestName =  names.stream().max(Comparator.comparingInt(s-> s.length()));

      System.out.println(longestName.orElse("No Names"));
    }


}
