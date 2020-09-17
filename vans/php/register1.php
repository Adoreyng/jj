<?php
	header("Content-type:text/html;charset=utf-8");

	$username = $_GET["uname"];
	$userpassword = $_GET["upassword"];

	$conn=mysql_connect("localhost","root","root");

 	mysql_select_db("vans");
	
	$result = mysql_query("select * from user where name='$username'",$conn);
	
	$result_row=mysql_num_rows($result);
	
	if($result_row>=1){
		echo "1";
	}else{
		mysql_query("insert into user values('$username' ,'$userpassword')",$conn);
		echo "0";
	}
	
?>