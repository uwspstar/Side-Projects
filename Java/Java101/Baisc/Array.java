public class Array {
    public Array() {

    }

    public void twoDArray() {
        double[][] a;
        a = new double[M][N]; // 初始化为 0;
        for (int i = 0; i < M; i++)
            for (int j = 0; j < N; j++)
                a[i][j] = 0.0;
        // 在将二维数组初始化为 0 时这段代码是多余的，但是如果想要初始化为其他值，我们就需要嵌 套的 for 循环了。

    }

    public void twoDArrayMultiple() {
        int N = a.length;
        double[][] c = new double[N][N];
        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++) { // 计算行i和列j的点乘
                for (int k = 0; k < N; k++)
                    c[i][j] += a[i][k] * b[k][j];
            }
    }

    public void swap(double[] A, int a, int b) {
        double tmp = A[a];
        A[a] = A[b];
        A[b] = tmp;
    }

    public reverse(double[] A) {
        int N = A.length;
        int left = 0;
        int right = N - 1;
        while (left < right) {
            double tmp = A[left];
            A[left] = A[right];
            A[right] = tmp;
            left++;
            right--;
        }
    }

    public double[] copyArray(double[] A) {
        int N = A.length;
        double[] B = new double[N];
        for (int i = 0; i < N; i++) {
            B[i] = A[i];
        }
        return B;
    }

    public double findAverage(double[] A) {
        int N = A.length;
        double sum = 0.0;
        for (int i = 0; i < N; i++) {
            sum += A[i];
        }
        double average = sum / N;
        return average;
    }

    public int findMax(double[] A) {
        double max = A[0];
        for (int i = 1; i < A.length; i++) {
            if (A[i] > max)
                max = A[i];
        }
        return max;
    }
}
