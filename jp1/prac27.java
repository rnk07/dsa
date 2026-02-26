package leetCode.jp1;

public class prac27 {
  public static void main(String[] args) {
        String txt = "ronakabcdefgakgehfjak";
        String pat = "ak";
        
        // If pat is found, returns the index of first
        // occurrence of pat. Otherwise, returns -1
        int idx = txt.indexOf(pat);
      
        if (idx != -1)
            System.out.println(idx);
        else
            System.out.println(-1);
    }  
}
