package leetCode.jp1;

// Call stack Example
public class prac2 {

    public void D() {
        System.out.println("In Method D");
    }

    public static void C() {
        System.out.println("In Method C");
    }

    public static void B() {
        C();
        System.out.println("In Method B");
    }

    static void A() {
        B();
        System.out.println("In method A");

    }

    public static void main(String[] args) {
        prac2.A();
        prac2 dMethod = new prac2();
        dMethod.D();
    }

}

class test{



}