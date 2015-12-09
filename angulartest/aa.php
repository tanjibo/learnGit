<?php
/**
 * @Author: [谈际波] <1533954229@qq.com>
 * @Date:   2015-12-09 12:03:31
 * @Last Modified by:   [谈际波] <1533954229@qq.com>
 * @Last Modified time: 2015-12-09 14:52:31
 */
var_dump($_POST);
if(isset($_POST) && !empty($_POST)){

  echo json_encode($_POST);
}else{
	echo 0;
}