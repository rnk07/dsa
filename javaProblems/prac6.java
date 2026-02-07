package leetCode.javaProblems;

import java.util.Arrays;
import java.util.Scanner;

public class prac6 {

    static String[] board;
    static String turn;

    // Check winner method

    static String checkWinner() {

        for (int i = 0; i < 8; i++) {
            String line = null;

            switch (i) {
                case 0:
                    line = board[0] + board[1] + board[2];
                    break;
                case 1:
                    line = board[3] + board[4] + board[5];
                    break;
                case 2:
                    line = board[6] + board[7] + board[8];
                    break;
                case 3:
                    line = board[0] + board[3] + board[6];
                    break;
                case 4:
                    line = board[1] + board[4] + board[7];
                    break;
                case 5:
                    line = board[2] + board[5] + board[8];
                    break;
                case 6:
                    line = board[0] + board[4] + board[8];
                    break;
                case 7:
                    line = board[2] + board[4] + board[6];
                    break;

            }

            // For X winner
            if (line.equals("XXX")) {
                return "X";
            }

            // For O Winner
            if (line.equals("OOO")) {
                return "O";
            }
        }
        for (int a = 0; a < 9; a++) {
            if (Arrays.asList(board).contains(String.valueOf(a + 1))) {
                break;
            } else if (a == 8) {
                return "draw";
            }
        }

        System.out.println(turn + "'s turn; enter a slot number to place " + turn + " in:");
        return null;
    }

    public static void printBoard() {
        System.out.println("|---|---|---|");
        System.out.println("|" + board[0] + "|" + board[1] + "|" + board[2] + "|");
        System.out.println("|" + board[3] + "|" + board[4] + "|" + board[5] + "|");
        System.out.println("|" + board[6] + "|" + board[7] + "|" + board[8] + "|");
        System.out.println("|---|---|---|");
    }

    public static void main(String[] args) {

        Scanner userInput = new Scanner(System.in);

        board = new String[9];
        turn = "X";
        String winner = null;

        for (int i = 0; i < board.length; i++) {
            board[i] = String.valueOf(i + 1);
        }
        System.out.println("Welcome to 3x3 Tic Tac Toe.");
        printBoard();
        System.out.println("X will play first. Enter a slot number to place X in:");


        while (winner == null) {
            
            int enterNum;

            try {
                enterNum = userInput.nextInt();


                if(!(enterNum > 0 && enterNum <=9)){
                    System.out.println("Invalid input; re-enter slot number:");
                    continue;
                }

                if(board[enterNum-1].equals(String.valueOf(enterNum))){
                    board[enterNum-1] = turn;


                    //Toggle the value O and X
                    turn = turn.equals("X") ? "O" :"X";
                    printBoard();
                    winner = checkWinner();
                }else{
                    System.out.println("Slot already taken; re-enter slot number:");
                }







            } catch (Exception e) {
                System.out.println("Invalid input; re-enter slot number:");
                userInput.nextLine(); // Consume invalid input to prevent infinite loop
            }


        }


// Final result
        if (winner.equalsIgnoreCase("draw")) {
            System.out.println("It's a draw! Thanks for playing.");
        } else {
            System.out.println("Congratulations! " + winner + "'s have won! Thanks for playing.");
        }

        userInput.close();


    }

}
