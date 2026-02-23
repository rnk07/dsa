package leetCode.jp1;

public class prac12 {
    public static void printNFib(int n) {
		int a =0,b=1;
		for( int i =0;i<=n;i++) {
			System.out.println("Value of a "+a+" abd value of b "+b);
			System.out.println("Loop counter"+i);
			System.out.println(a+" ");
		
			int next = a+b;
			a =b;
			b = next;
		
			
		}
		
		
	}
	
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		printNFib(5);
		
	}
}
