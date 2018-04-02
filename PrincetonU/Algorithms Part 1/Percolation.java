import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;
import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
	public Percolation(int n) {               // create n-by-n grid, with all sites blocked
	
	}
	public    void open(int row, int col) {   // open site (row, col) if it is not open already
	
	}
	public boolean isOpen(int row, int col) { // is site (row, col) open?
		return true;
	}

	public boolean isFull(int row, int col) { // is site (row, col) full?
		return true;
	}

	public     int numberOfOpenSites()   {   // number of open sites
		return 1;
	}

	public boolean percolates() {             // does the system percolate?
		return true;
	}
	
	public static void main(String[] args){	 // test client (optional)
		System.out.println("sup");
	}   
}