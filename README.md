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

#管理修改
场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。  
场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD file，就回到了场景1，第二步按场景1操作。   
场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，版本回退

#删除文件  
rm file  
git rm file   
git commit -m ("注释")  

#github 远程
  第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经          有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：
         ssh-keygen -t rsa -C '1533954229@qq.com'
  第二部：登陆GitHub,打开账号设置,SSH Keys 页面，然后点Add SSH Key,填上任意Title,在Key文本框里
          粘贴id_rsa.pub文件的内容就可以了
          
#添加远程库
  1.要关联一个远程库，使用命令git remote add origin git@server-name:path/repo-name.git；
  2.关联后，使用命令git push -u origin master第一次推送master分支的所有内容；
  3.此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；

#远程克隆
 git clone git@github.com:tanjibo@learnGit.git
 
#分支管理
 查看分支：git branch  
 创建分支：git branch <name>  
 切换分支：git checkout <name>  
 创建+切换分支：git checkout -b <name>  
 合并某分支到当前分支：git merge <name>  
 删除分支：git branch -d <name>  
