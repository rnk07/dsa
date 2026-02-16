package leetCode.javaProblems;

import java.util.HashMap;

public class prac22 {

    public static int mostFreqEl(int[] arr) {

        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {

            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
        }

        System.out.println(map);

        int maxCnt = 0;
        int prevVal = -1;
        for (var entry : map.entrySet()) {
            int val = entry.getKey();
            int curEleCnt = entry.getValue();

            if (maxCnt < curEleCnt || (curEleCnt == maxCnt && val > prevVal)) {

                maxCnt = curEleCnt;
                prevVal = val;

            }

        }

        return prevVal;

    }

    public static void main(String[] args) {
        int[] arr = { 40, 50, 30, 40, 50, 30, 30 };
        System.out.println(mostFreqEl(arr));
    }

}
