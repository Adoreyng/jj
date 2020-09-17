<?php
	header("Content-type:text/html;charset=utf-8");
	
	$username = $_GET["uname"];
	$userpassword = $_GET["upassword"];

	$conn = mysql_connect("localhost","root","root");
	
	// if($conn){
	// 	echo "连接成功";
	// }
	
	//连接数据库
	mysql_select_db("vans");
	
	// 查找
	$result = mysql_query("select * from user where name='$username' and pwd='$userpassword'",$conn);

	$row =   mysql_num_rows($result);
	//直接返回文字
	if($row >= 1){
        echo  "0";
    }else{
        echo  "1";
    }

	//关闭连接对象
	mysql_close($conn);
?> 