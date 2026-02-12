package leetCode.javaProblems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class prac18 {

    public static void main(String[] args) {
        
        // // Stream from Collection
        // List<String> list = Arrays.asList("One","two","three");
        // Stream<String> stream1 = list.stream();
        // for(String s :list){
        //     System.out.println(s);
        // }


//         List<Integer> num = Arrays.asList(1,2);

//        Optional<Integer> sum = num.stream()
//         .filter(a->a>2)
//         .map(n->n*2)
//         .distinct()
//         .sorted()
//         .reduce((a,b)-> a+b);
// System.out.println(sum);

        List<Integer> nums = Arrays.asList(1,2,3,4,5);

        nums.stream().filter(a-> a%2==0).forEach(a-> System.out.println(a));

        List<String> names = Arrays.asList("ronak", "java", "stream");
        names.stream().map(s -> s.toUpperCase()).forEach(s->System.out.println(s));

        List<Integer> nums1 = Arrays.asList(1,2,2,3,4,4,5);

        // nums1.stream().distinct().forEach(s->System.out.println(s));

        List<Integer> nums2 = Arrays.asList(1,2,3,55,65,4,3);
        nums2.stream().sorted((a,b)->b.compareTo(a)).forEach(s->System.out.println(s));

    }

}
