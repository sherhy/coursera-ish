public class MyClass2 {
	public static void main(String[] args){
		MyClass c1 = new MyClass(10, 20.5);
		MyClass c2 = new MyClass(10, 31.5);
		c2 = c1;
		c1.a = 2;
		System.out.println(c2.a);
	}
}