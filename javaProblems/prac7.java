package leetCode.javaProblems;

public class prac7 {
    
    public static void main(String[] xyz){

        // String s = "Ronak";
        // s.concat(" Patel");
        // System.out.println(s);

        // String s1 = new String("Ronak");
        //  String s2 = new String("Ronak");
        

        // System.out.println(s2 == s1); //Checks the refrence in the memory, not value
        // System.out.println(s.equals(s1)); // Checks only value. 


        String a ="Ronak";
        String b = "";



        for(int i=a.length()-1;i>=0;i--){



            char c = a.charAt(i);
            String ch1 =Character.toString(c);

            b = b+ch1; //concat method can be used too/

        }
        System.out.println(b);




    }
}
