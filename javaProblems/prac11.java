package leetCode.javaProblems;

public class prac11 {
    
public static void printRightAngleStar(int n) {
		
		for(int i= 1; i<=n;i++) {
			
			for(int j =i;j<n;j++) {
				
				System.out.print("+");
			}
			for(int k =1;k<=i;k++) {
			System.out.print("*");
			}
			System.out.println();
		}
		
		
	}
	
	
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		printRightAngleStar(5);
	}


}
