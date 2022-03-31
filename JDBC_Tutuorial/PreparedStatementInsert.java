import java.sql.*;
import java.util.*;
class PreparedStatementInsert{
	public static void main(String []args){
		try{
			
			Class.forName("com.mysql.jdbc.Driver");
			String url="jdbc:mysql://localhost:3306/sushdb";
			String username="root";
			String password="Tada@5454";
			Connection con=DriverManager.getConnection(url,username,password);
			Scanner sc=new Scanner(System.in);
			String q="insert into table1(tName,tCity) values (?,?)";
			int count=0;
			while(count<3){
				try{
			PreparedStatement pstmt=con.prepareStatement(q);
			System.out.println("Enter Name :");
			String name=sc.nextLine();
			System.out.println("Enter City :");
			String city=sc.nextLine();
			pstmt.setString(1,name);
			pstmt.setString(2,city);
			pstmt.executeUpdate();
			System.out.println("Inserted");
			count++;
				}
				catch(Exception e){
					break;
				}
			}
			con.close();
			
			
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
}