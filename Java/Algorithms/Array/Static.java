public class Static {
    public Static() {

    }

    public static int abs(int x) {
        return x < 0 ? -x : x;
    }

    public static double abs(double x) {
        return x < 0.0 ? -x : x;
    }

    //质数除了1和本身之外没有其他约数，所以判断n是否为质数，根据定义直接判断从2到n-1是否存在n的约数即
    public static boolean isPrime(int N) {
        if (N < 2) {
            return false;
        }

        for (int i = 2; i * i <= N; i++) {
            if (N % i == 0) {
                return false;
            }
        }

        return true;
    }
}
