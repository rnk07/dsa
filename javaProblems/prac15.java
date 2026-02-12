package leetCode.javaProblems;

import java.util.Arrays;

public class prac15 {

    public static void reverseArr(int[] arr, int left, int right) {

        while (left < right) {

            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;

        }
    }

    public static void rotateArray(int a[], int rotation) {

        int n = a.length;
        rotation = rotation%n;
        System.out.println(rotation);

        reverseArr(a,0, rotation-1);
        reverseArr(a, rotation, n-1);
        reverseArr(a, 0, n-1);

        System.out.println(Arrays.toString(a));

    }

    public static void main(String[] args) {
        int a[] = { 1, 2, 3, 4, 5 };
        int rotation = 2;
        rotateArray(a, rotation);
    }

}
