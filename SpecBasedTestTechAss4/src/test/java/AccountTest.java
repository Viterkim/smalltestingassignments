import org.junit.jupiter.api.Test;

import static org.hamcrest.Matchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

class AccountTest {

    @Test
    void getMonthlyInterestRate_low() {
        Account account = new Account(85);
        double interest = account.getMonthlyInterest();
        assertThat(interest, closeTo(2.55, 0.001));
    }

    @Test
    void getMonthlyInterestRate_lowEdge() {
        Account account = new Account(100);
        double interest = account.getMonthlyInterest();
        assertThat(interest, closeTo(3, 0.001));
    }

    @Test
    void getMonthlyInterestRate_medium() {
        Account account = new Account(885);
        double interest = account.getMonthlyInterest();
        assertThat(interest, closeTo(44.25, 0.001));
    }

    @Test
    void getMonthlyInterestRate_mediumEdge() {
        Account account = new Account(1000);
        double interest = account.getMonthlyInterest();
        assertThat(interest, closeTo(50, 0.001));
    }

    @Test
    void getMonthlyInterestRate_maxEdge() {
        Account account = new Account(1001);
        double interest = account.getMonthlyInterest();
        assertThat(interest, closeTo(70.07, 0.001));
    }

    @Test
    void getMonthlyInterestRate_max() {
        Account account = new Account(8585);
        double interest = account.getMonthlyInterest();
        assertThat(interest, closeTo(600.95, 0.001));
    }

    @Test
    void getMonthlyInterestRate_negative() {
        Account account = new Account(-85);
        double interest = account.getMonthlyInterest();
        assertThat(interest, closeTo(-2.55, 0.001));
    }


    // CalculateInterestRate
    @Test
    void calculateInterestRate_low() {
        Account account = new Account(85);
        double interest = account.calculateInterestRate();
        assertThat(interest, closeTo(1.03, 0.001));
    }

    @Test
    void calculateInterestRate_lowEdge() {
        Account account = new Account(100);
        double interest = account.calculateInterestRate();
        assertThat(interest, closeTo(1.03, 0.001));
    }

    @Test
    void calculateInterestRate_medium() {
        Account account = new Account(885);
        double interest = account.calculateInterestRate();
        assertThat(interest, closeTo(1.05, 0.001));
    }

    @Test
    void calculateInterestRate_mediumEdge() {
        Account account = new Account(1000);
        double interest = account.calculateInterestRate();
        assertThat(interest, closeTo(1.05, 0.001));
    }

    @Test
    void calculateInterestRate_maxEdge() {
        Account account = new Account(1001);
        double interest = account.calculateInterestRate();
        assertThat(interest, closeTo(1.07, 0.001));
    }

    @Test
    void calculateInterestRate_max() {
        Account account = new Account(8585);
        double interest = account.calculateInterestRate();
        assertThat(interest, closeTo(1.07, 0.001));
    }

    @Test
    void calculateInterestRate_negative() {
        Account account = new Account(-85);
        double interest = account.calculateInterestRate();
        assertThat(interest, closeTo(1.03, 0.001));
    }

}