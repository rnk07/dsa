package leetCode.javaProblems;

public class prac23 {

    public static int findMissNumber(int[] arr) {

        int n = arr.length + 1;
        int xor1 = 0, xor2 = 0;
        for (int i = 0; i < n - 1; i++) {
            xor2 = xor2 ^ arr[i];
            // System.out.println(xor2);
        }

        for(int i =1;i<=n;i++){
            xor1 =xor1 ^i;
            // System.out.println(xor1);
        }
        return xor1 ^ xor2;
    }

    public static void main(String[] args) {

        int[] arr = { 6, 3, 1, 2, 5 };
        System.out.println(findMissNumber(arr));

    }
}
