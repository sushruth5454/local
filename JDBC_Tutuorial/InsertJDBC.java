import java.sql.*;
class InsertJDBC{
	public static void main(String []args){
		try{
			Class.forName("com.mysql.jdbc.Driver");
			String url="jdbc:mysql://localhost:3306/sushdb";
			String username="root";
			String password="Tada@5454";
			Connection con=DriverManager.getConnection(url,username,password);
			
			String q="create table table1(tId int(20) primary key auto_increment,tName varchar(200) not null,tCity varchar(400))";
			
			Statement stmt=con.createStatement();
			stmt.executeUpdate(q);
			System.out.println("table Created...");
			con.close();
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
}