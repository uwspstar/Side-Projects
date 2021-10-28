public class Shuffle {
    public Shuffle() {

    }

    public static void shuffle(double[] a) {
        int N = a.length;
        for (int i = 0; i < N; i++) { // 将a[i]和a[i..N-1]中任意一个元素交换
            int r = i + StdRandom.uniform(N - i);
            double temp = a[i];
            a[i] = a[r];
            a[r] = temp;
        }
    }
}
