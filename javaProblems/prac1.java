package leetCode.javaProblems;

import java.util.Scanner;

public class prac1 {

    public static void guessNumberGame() {
        Scanner sc = new Scanner(System.in);

        int compGuessedNum = 1 + (int) (100 * Math.random());
        System.out.println(compGuessedNum);

        int attempt = 5;

        System.out.println("Computer has guessed number bw 1 to 100");
        System.out.println("You have " + attempt + " attempts.");

        for (int i = 0; i < attempt; i++) {
            System.out.println("Enter you guess");

            int userGuess = sc.nextInt();

            if (userGuess == compGuessedNum) {
                System.out.println("Yay you guessed it correctly.");

                sc.close();
                return;

            } else if (userGuess < compGuessedNum) {
                System.out.println("Your number " + userGuess + " is samller then the ans.");
            } else {
                System.out.println("Your number " + userGuess + " is bigger then the ans.");
            }

            System.out.println("You have used " + (i + 1) + " attempts.");
        }
        System.out.println("You used all attempt and the ans is: " + compGuessedNum);
        sc.close();
    }

    public static void main(String[] args) {
        // TODO Auto-generated method stub

        guessNumberGame();

    }

}
