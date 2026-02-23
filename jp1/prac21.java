package leetCode.jp1;

public class prac21 {
    

    public static String firstRepeatingChar(String s){

        int[] charCount = new int[26];
    


        for(int i=0;i<s.length();i++){
            char c =s.charAt(i);

            int idx = c -'a';

            if(charCount[idx] != 0){
                return Character.toString(c);
            }

            charCount[idx]++;


        }

        return "-1";

    }


    public static void main(String[] args) {
        



        String s = "iamronak";
        System.out.println(firstRepeatingChar(s));

    }


}
