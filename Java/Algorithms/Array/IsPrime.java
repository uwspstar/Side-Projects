public class IsPrime {
    public IsPrime() {

    }

    public boolean isPrime_1(int num) {
        int N = sqrt(num);
        for (int i = 2; i <= N; i++)
            if (num % i == 0)
                return 0;
        return 1;
    }

    public boolean isPrime_2(int num) {

        if (num == 2 || num == 3)// 两个较小数另外处理
            return 1;

        if (num % 6 != 1 && num % 6 != 5) // 不在6的倍数两侧的一定不是质数
            return 0;

        int N = sqrt(num);

        for (int i = 5; i <= N; i += 6) // 在6的倍数两侧的也可能不是质数
            if (num % i == 0 || num % (i + 2) == 0)
                return 0;
        // 排除所有，剩余的是质数
        return 1;

    }
}
