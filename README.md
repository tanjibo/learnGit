#创建版本库
 mkdir learngit   
 cd learngit   
 git init (把这个目录变成git可以管理的仓库)   
 
 git add file (一次添加一个文件到缓存区)   
 git commit -m '注释' (提交到本地版本库)  
 git add . (一次添加所有的文件)  
 
 
 git status (查看状态)  
 git diff file(比较文件前后修改的内容)  
 
 
#回退版本  
 git log(命令显示从最近到最远的提交日志)  
 git log --pretty=oneline (查看提交日志，让显示成一行)  
 上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100  
 git reset --head HEAD^ (回退到上一个版本)  
 git reset --head 53434 (回退到指定的版本,这数字可以通过git log 查看出来)  
 git reflog (记录每一次操作的命令)  
 
