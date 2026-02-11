package leetCode.javaProblems;

public class prac10 {

    	public static void pyramidStar(int n) {
		for(int i =1;i<=n;i++) {
			
			for(int j =n;j>i;j--) {
				System.out.print(" ");
			}
			for(int l=1;l<=i;l++) {
				System.out.print("* ");
				
			}
			
		
			System.out.println();
		}
    
}

public static void main(String[] args) {
		
		pyramidStar(10);
	}

}
