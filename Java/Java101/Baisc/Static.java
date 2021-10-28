public class Static {
    public Static() {

    }

    public static int abs(int x) {
        return x < 0 ? -x : x;
    }

    public static double abs(double x) {
        return x < 0.0 ? -x : x;
    }

    // 计算平方根
    public static double sqrt(double c) {
        if (c < 0)
            return Double.NaN;
        double err = 1e-15;
        double t = c;
        while (Math.abs(t - c / t) > err * t)
            t = (c / t + t) / 2.0;
        return t;
    }

    // 计算质数, 质数除了1和本身之外没有其他约数
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

    // 计算直角三角形的斜边
    public static double hypotenuse(double a, double b) {
        return Math.sqrt(a * a + b * b);
    }
}
