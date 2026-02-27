package leetCode.jp2;

public class prac1 {
    static boolean checkDuplicatesWithinK(int[] arr, int k) {
        int n = arr.length;

        // Traverse for every element
        for (int i = 0; i < n; i++) {
          
            // Traverse next k elements
            for (int c = 1; c <= k && (i + c) < n; c++) {
                int j = i + c;
              
                // If we find one more occurrence within k
                if (arr[i] == arr[j])
                    return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[] arr = {10, 5, 3, 4, 3, 5, 6};
        System.out.println(checkDuplicatesWithinK(arr, 3) ? "Yes" : "No");
    }
}
