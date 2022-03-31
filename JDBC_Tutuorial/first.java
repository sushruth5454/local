import java.sql.*;
class FirstJDBC
{
public static void main(String []args){
try{
Class.forName("com.mysql.jdbc.Driver");
String url="jdbc:mysql://localhost:3306/sushdb";
String username="root";
String password="Tada@5454";
Connection con=DriverManager.getConnection(url,username,password);
if(con.isClosed()){
System.out.println("Connection is Closed");
}
else{
System.out.println("Connection is Created...");
}
}
catch(Exception e){
e.printStackTrace();
}
}
}