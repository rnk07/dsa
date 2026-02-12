package leetCode.javaProblems;



public class prac17 {
    public static String reverseString(String a) {

        StringBuilder sb = new StringBuilder();
        System.out.println(sb);

        for (int i = a.length() - 1; i >= 0; i--) {
            sb.append(a.charAt(i));
        }

        return sb.toString();

    }

    public static String revString(String a) {
        char[] arr = a.toCharArray();

        int left = 0, right = arr.length - 1;

        while (left < right) {
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }

        String newString = new String(arr);

        return newString;
    }

    public static boolean isPelindrome(String a) {
        char[] arr = a.toCharArray();

        int left = 0, right = arr.length - 1;

        while (left < right) {
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }

        String newString = new String(arr);

        if (newString.equals(a)) {
            return true;
        }

        return false;
    }

    public static void main(String[] args) {

        String a = "abba";
        System.out.println(reverseString(a));
        System.out.println(revString(a));
        System.out.println(isPelindrome(a));
    }

}
