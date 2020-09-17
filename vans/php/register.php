<?php
	header("Content-type:text/html;charset=utf-8");
	
	$username = $_GET["uname"];

	$conn = mysql_connect("localhost","root","root");
	
	//连接数据库
	mysql_select_db("vans");
	
	// 查找
	$result = mysql_query("select * from user where name='$username'",$conn);

	$row = mysql_num_rows($result);
	
	// echo $row;
	
	//直接返回文字
	if($row == 1){
        echo "1";
    }else{
        echo "0";  
    }

	//关闭连接对象
	mysql_close($conn);
?> 