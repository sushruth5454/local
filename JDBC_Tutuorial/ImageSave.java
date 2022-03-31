import java.sql.*;
import java.io.*;
class ImageSave
{
	public static void main(String []args){
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			String url="jdbc:mysql://localhost:3306/sushdb";
			String username="root";
			String password="Tada@5454";
			Connection con=DriverManager.getConnection(url,username,password);
			
			String q="insert into images(pic) values(?)";
			PreparedStatement pstmt=con.prepareStatement(q);
			
			FileInputStream fis=new FileInputStream("pic.jpg");
			pstmt.setBinaryStream(1,fis,fis.available()); 
			pstmt.executeUpdate();
			System.out.println("done...");
			
		}
		catch(Exception e){
			e.printStackTrace();
			System.out.println("Error Occured !!");
		}
	}
}