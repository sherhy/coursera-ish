import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;
import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
	// private WeightedQuickUnionUF tree;
	private int[] tree;
	private int rowlen;

	public Percolation(int n) {               // create n-by-n grid, with all sites blocked
		// tree = new WeightedQuickUnionUF(n*n);
		rowlen = n;
		tree = new int[n*n];
		for (int i = 0; i<n*n; i++) tree[i] = 0;
	}
	public    void open(int row, int col) {   // open site (row, col) if it is not open already
		tree[rowlen*row + col] = 1;
	}
	public boolean isOpen(int row, int col) { // is site (row, col) open?
		return tree[rowlen*row + col]==1;
	}

	public boolean isFull(int row, int col) { // is site (row, col) full?
		return true;
	}

	public     int numberOfOpenSites()   {   // number of open sites
		// return tree.count();
		int count = 0;
		for (int i = 0; i < tree.length; i++) {
			//count
			if (tree[i] == 1) count ++ ;
		}
		return 1;
	}

	public boolean percolates() {             // does the system percolate?
		return true;
	}
	
	public static void main(String[] args){	 // test client (optional)
		Percolation uf = new Percolation(3);
		uf.open(2,2);
		// System.out.println(uf.isOpen(2,2));
		// System.out.println(uf.isOpen(1,2));
		System.out.println(uf.numberOfOpenSites());
	}   
}