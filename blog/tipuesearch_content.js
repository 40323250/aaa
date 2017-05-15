var tipuesearch = {"pages":[{"text":"機械設計專題網誌 http://project.mde.tw 是台灣國立虎尾科技大學機械設計工程系 (Department of Mechanical Design Engineering, National Formosa University, Taiwan ) KMOL 研究室 (Knowledge Management and Optimal utilization Laboratory) 專題網站, 與課程相關的網誌位於 http://chiamingyen.github.io/kmolab/blog/ . 與電腦輔助設計室相關的網誌則位於 http://cadlab.mde.tw . 本網誌的所有資料位於 https://github.com/coursemdetw/project_site , 除了所引用的資料特別聲明各自所宣告的使用授權外, 一律採用 AGPL 授權 https://github.com/coursemdetw/project_site/blob/gh-pages/LICENSE . 歡迎您的蒞臨! 專題成員 https://github.com/coursemdetw/project_site/watchers","url":"http://project.mde.tw/blog/pages/about/","tags":"misc","title":"About"},{"text":"研究WebGL的框架three.js ,嘗試建立和Onshape同性質的網頁繪圖系統 經過討論後 ,我比較想要嘗試網頁方面的繪圖 ,然後上網找到了一些對岸製作的有關於WebGL、three.js的介紹 WebGL中文网 因為之前也沒有很深入的了解 ,所以可能要接觸一些範例來加深印象 ,假如可行 便能加入30號同學的核心進行2D線上繪圖 ,這樣資源也會更加豐富","url":"http://project.mde.tw/blog/webgl_threejs.html","tags":"2016bg2","title":"WebGL_three.js"},{"text":"V-rep 與 Solvespace的結合應用 最近開了很多V-rep的範例檔來看 ,但都不太有收穫 ,為了避免浪費時間 ,回去找了之前老師提到的solvespace和vrep的共同運用 ,也因為要完成3D - Printer就要先了解基本觀念和用法 ,所以就抓了檔案來測試 (檔案位於solvespace官網的 tutorial : linkages) 壓縮檔載點 由於各零件之軸孔沒有軸連接 ,導致旋轉軸無法放置 ,所以我把軸都畫上去了 ,檔案為g2目錄下的solvespcae_vrep Solvespace的長料與除料功能真的不太習慣 ,很容易造成運算錯誤 軸都放好了 ,只是從屬關係還是不太清楚要如何放置 結果我又弄了一個圖 ,試圖從這邊學習從屬設定 目前只會讓它亂轉 感覺和各個旋轉軸速度也有關係 105 - 07/10更新 現在能夠讓連桿旋轉了 想要測試能否以固定角度來回旋轉 但是要達到這樣的動作需要編寫程式 ,且還在研究script的類別以及revolute的type到底要用哪一種 ,這些花了很多時間... 目前先以控單軸為主 ,但是遇到以下狀況 如果是用左邊的script就不會有simWait的錯誤 ,但是它只會走90度 ,然後simWait就不會動了 參考 : Joint types and operation Child Scripts 105 - 07/11更新 Joint 種類分成以下4種 : 1. 為旋轉軸, 只有一個自由度 (旋轉), 用於一般旋轉軸。 2. 為平移軸, 只有一個自由度 (平移), 物體能沿著軸線做平移。 3. 為旋轉與平移軸的結合, 只有一個自由度, 能夠使物體沿著軸做旋轉移動, 如同螺絲。 4. 為球窩接頭, 有三個自由度, 用於類似關節的地方。 Control the joint : 1.simSetJointPosition : when your joint is not in force/torque mode 2.simSetJointTargetPosition : when your joint is in force/torque mode, its motor enabled and its control loop also enabled 3.simSetJointTargetVelocity : when your joint is in force/torque mode, its motor enabled, and its control loop NOT enabled 今天回去翻老師的信, 才發現裡面有四連桿的範例, 以下為測試: 只要設定一個轉軸, 其他設定好就可以跟著一起做動, 但是在程式部分, if 條件還是不太懂, 很容易出現lua錯誤, 還有很多語法要理解。 105 - 07/12更新 今天拿老師的程式去跑小車子 ,但是joint的角度只要定在360就跟0度一樣 ,要如何才能超過這個範圍還在思考... little_car.ttt 105 - 07/14更新 今天參照了irb360範例, 試著組了printer, 前面還算順利, 在中間的 close chain部分 還要加上重疊的Revolute 來限制移動, 最後再搭上dummy 應該就可以控制了 printer_new.ttt printer_new_2.ttt 105 - 07/15更新 今天開始研究Inverse Kinematic 逆向運動學(IK) ,透過矩正及向量運算 ,就可以得到參數 ,且恰巧有學長論文和此相關 ,從中學到了不少 ,但還沒能弄懂 ,最後要結合進V-rep模擬中 ,腳步要加快了 105 - 07/17更新 Solvespace測試連桿運動方式 旋轉軸定義 子屬關係設定 (測試) ,加上dummy固定 經過一番波折 ,終於和同學弄出來了 ,只要無法封閉的部分利用dummy固定就可以了 ,至於實體轉軸部分要搭接在桿子上才可以 solvespace_successful 105 - 07/18更新 嘗試幫第一組 組裝手臂, 除了夾爪部分外 ,其餘都組裝好了 ,過程發現部分零件拆解後會有座標不對的問題 ,只要將做標調整和world相同就比較容易了 (參照範例: 7 DoF manipulator 設定ik值) 105 - 07/24更新 今天預計要測試馬達控制 ,但是沒有多的12V power supply ,所以先把Onshape ,printer的細部畫一畫 ,現在大概有300個特徵 ,本來可以輕鬆的拉動滑塊 ,現在要用箭頭才能拉動了 ,估計不會畫電路板部分 ,戲偶衣服穿太多了 105 - 07/28更新 暫時利用可變電阻取代步進馬達 ,並加入馬達轉軸 ,控制加熱頭移動 105 - 08/02更新 V-rep定位 在繪圖時 ,需要有一個對稱零件(輔助零件)在vrep內訂定位置 ,在定位之前 ,座標系要先調整 之後將主體設為此零件子屬 定位完之後就可以設為一個群組了","url":"http://project.mde.tw/blog/40323250ri-zhi-v-repshi-zuo-xin-de.html","tags":"2016bg2","title":"40323250日誌 - v-rep實做心得"},{"text":"之後的 V-rep模擬Printer都整理於本文章中 透過Tkinter介面及remote api 控制printer參數 程式碼 import matplotlib matplotlib.use(\"TkAgg\") from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg,NavigationToolbar2TkAgg from matplotlib.figure import Figure import matplotlib.animation as animation from matplotlib import style import numpy as np import tkinter as tk from tkinter import ttk from matplotlib import pyplot, rcParams import serial import sys import vrep import math LARGE_FONT = (\"Verdana\",12) NORM_FONT = (\"Verdana\",10) SMALL_FONT = (\"Verdana\",8) style.use(\"ggplot\") f = Figure(figsize = (5,5),dpi = 100) a = f.add_subplot(111) def tutorial(): # def leavmini(what) # what.destroy def page2(): tut.destroy() tut2 = tk.Tk() def page3(): tut2.destroy() tut3 = tk.Tk() tut3.wm_title(\"part 3!\") label = ttk.Label(tut3,text = \"Part 3\",font =NORM_FONT ) label.pack(side = \"top\",fill = \"x\",pady = 10) B1 = ttk.Button(tut3,text = \"Done!\",command = tut3.destroy) B1.pack() tut3.mainloop() tut2.wm_title(\"part 2!\") label = ttk.Label(tut2,text = \"Part 2\",font =NORM_FONT ) label.pack(side = \"top\",fill = \"x\",pady = 10) B1 =ttk.Button(tut2,text = \"Next\",command = page3) B1.pack() tut2.mainloop() tut = tk.Tk() tut.wm_title(\"Tutorial\") label = ttk.Label(tut,text = \"what do you want to help\",font =NORM_FONT ) label.pack(side = \"top\",fill = \"x\",pady = 10) B1 = ttk.Button(tut,text = \"Overview the app\",command = lambda:popupmsg(\"Not yet\")) B1.pack() B2 = ttk.Button(tut,text = \"test\",command = page2) B2.pack() B3 = ttk.Button(tut,text = \"Questione\",command = lambda:popupmsg(\"Not yet\")) B3.pack() tut.mainloop() def popupmsg(msg): popup = tk.Tk() def leavemini(): popup.destroy() popup.wm_title(\"!\") label = ttk.Label(popup,text=msg,font=NORM_FONT) label.pack(side =\"top\",fill=\"x\",pady=10) B1 = ttk.Button(popup,text=\"Okay\",command = leavemini) B1.pack() popup.mainloop() def animate(i): pullData = open(i,\"r\").read() print(pullData) dataList = pullData.split('\\n') xList = [] yList = [] for eachLine in dataList: if len(eachLine)>1: x, y = eachLine.split(',') xList.append(int(x)) yList.append(int(y)) a.clear() a.plot(xList,yList) class Seaofbt(tk.Tk): def __init__(self, *args, **kwargs): #程式執行時先預載入的參數或者動作 tk.Tk.__init__(self, *args, **kwargs) # tk.Tk.iconbitmap(self,default = \"client.ico\") 改變左上角的圖示 tk.Tk.wm_title(self,\"My works\") container = tk.Frame(self) container.pack(side=\"top\",fill=\"both\",expand = True) container.grid_rowconfigure(0,weigh=1) container.grid_columnconfigure(0,weigh=1) menubar = tk.Menu(container) filemenu = tk.Menu(menubar,tearoff =0) filemenu.add_command(label=\"read file\",command = lambda: popupmsg(self)) filemenu.add_separator() filemenu.add_command(label = \"Exit\",command=quit) menubar.add_cascade(label=\"File\",menu=filemenu) tk.Tk.config(self,menu=menubar) self.frames = {} for F in (StartPage, PageOne,PageTwo): frame = F(container,self) self.frames[F] = frame frame.grid(row=0, column = 0, sticky=\"nsew\") self.show_frame(StartPage) def show_frame(self,cont): frame = self.frames[cont] frame.tkraise() def qf(param): print(param) class StartPage(tk.Frame): def __init__(self,parent,controller): tk.Frame.__init__(self,parent) label = tk.Label(self,text=\"Vrep control\",font = LARGE_FONT) label.pack(pady = 10,padx = 10) button1 = ttk.Button(self,text = \"Vrep 手臂控制\", command = lambda: controller.show_frame(PageOne)) button1.pack() button2 = ttk.Button(self,text = \"Vrep 3D列印控制\", command = lambda: controller.show_frame(PageTwo)) button2.pack() class PageOne(tk.Frame): def __init__(self, parent,controller): tk.Frame.__init__(self, parent) self.createWidgets() self.getNumber1 = 0 self.getNumber2 = 0 self.getNumber3 = 0 self.getNumber4 = 0 label0 = tk.Label(self,text=\"Position\").grid(column=1, row=0) label1 = tk.Label(self,text=\"\").grid(column=0, row=1) label2 = tk.Label(self,text=\"大軸X\").grid(column=0, row=2) label3 = tk.Label(self,text=\"\").grid(column=0, row=3) label4 = tk.Label(self,text=\"齒輪軸Y\").grid(column=0, row=4) label5 = tk.Label(self,text=\"\").grid(column=0, row=5) label6 = tk.Label(self,text=\"小軸Z\").grid(column=0, row=6) label7 = tk.Label(self,text=\"\").grid(column=0, row=7) label8 = tk.Label(self,text=\"\").grid(column=0, row=9) label9 = tk.Label(self,text=\"Uint\").grid(column=2, row=0) label10 = tk.Label(self,text=\"degree\").grid(column=2, row=2) label11 = tk.Label(self,text=\"degree\").grid(column=2, row=4) label12 = tk.Label(self,text=\"degree\").grid(column=2, row=6) button1 = ttk.Button(self,text = \"Back\", command = lambda: controller.show_frame(StartPage)) button1.grid(row = 10,column = 2) button2 = ttk.Button(self, text='Quit', width=5, command=self.quit) button2.grid(row = 10,column = 1) button3 = ttk.Button(self, text='Go', width=5, command =lambda:self.show_entry_fields()) button3.grid(row = 10,column = 0) button4 = ttk.Button(self, text='Catch', width=5, command =lambda:self.Catch()) button4.grid(row = 11,column = 0) button5 = ttk.Button(self, text='Put', width=5, command =lambda:self.Put()) button5.grid(row = 11,column = 1) def createWidgets(self): self.entry1 = tk.Entry(self) self.entry1[\"width\"] = 12 self.entry1.grid(row=2, column=1) self.entry2 = tk.Entry(self) self.entry2[\"width\"] = 12 self.entry2.grid(row=4, column=1) self.entry3 = tk.Entry(self) self.entry3[\"width\"] = 12 self.entry3.grid(row=6, column=1) def Catch(self): # def catch button deg = math.pi/180 vrep.simxFinish(-1) clientID = vrep.simxStart('127.0.0.1', 19999, True, True, 5000, 5) if clientID!= -1: print(\"Connected to remote server\") else: print('Connection not successful') sys.exit('Could not connect') errorCode,Catch=vrep.simxGetObjectHandle(clientID,'catch',vrep.simx_opmode_oneshot_wait) if errorCode == -1: print('Can not find Catch') sys.exit() errorCode=vrep.simxSetJointTargetPosition(clientID,Catch,0*deg, vrep.simx_opmode_oneshot) def Put(self): # def Put button deg = math.pi/180 vrep.simxFinish(-1) clientID = vrep.simxStart('127.0.0.1', 19999, True, True, 5000, 5) if clientID!= -1: print(\"Connected to remote server\") else: print('Connection not successful') sys.exit('Could not connect') errorCode,Catch=vrep.simxGetObjectHandle(clientID,'catch',vrep.simx_opmode_oneshot_wait) if errorCode == -1: print('Can not find Catch') sys.exit() errorCode=vrep.simxSetJointTargetPosition(clientID,Catch,60*deg, vrep.simx_opmode_oneshot) def show_entry_fields(self): deg = math.pi/180 self.getNumber1 = self.entry1.get() self.getNumber2 = self.entry2.get() self.getNumber3 = self.entry3.get() x = self.getNumber1 y = self.getNumber2 z = self.getNumber3 if x =='' or y==''or z =='' : x = 0 y = 0 z = 0 print(\"Error\") else: x = float(self.getNumber1) y = float(self.getNumber2) z = float(self.getNumber3) if float(x) <= 0: x = x*(-1) if float(z) <= 0: z = z*(-1) #x = x/0.4583 vrep.simxFinish(-1) clientID = vrep.simxStart('127.0.0.1', 19999, True, True, 5000, 5) if clientID!= -1: print(\"Connected to remote server\") else: print('Connection not successful') sys.exit('Could not connect') errorCode1,Joint1=vrep.simxGetObjectHandle(clientID,'joint1',vrep.simx_opmode_oneshot_wait) errorCode2,Joint2=vrep.simxGetObjectHandle(clientID,'joint2',vrep.simx_opmode_oneshot_wait) errorCode3,Joint3=vrep.simxGetObjectHandle(clientID,'joint3',vrep.simx_opmode_oneshot_wait) if errorCode1 == -1: print('Can not find joint1') sys.exit() if errorCode2 == -1: print('Can not find joint2') sys.exit() if errorCode3 == -1: print('Can not find joint3') sys.exit() errorCode1=vrep.simxSetJointTargetPosition(clientID,Joint2,x*deg, vrep.simx_opmode_oneshot) errorCode2=vrep.simxSetJointTargetPosition(clientID,Joint1,y*deg, vrep.simx_opmode_oneshot) errorCode3=vrep.simxSetJointTargetPosition(clientID,Joint3,z*deg, vrep.simx_opmode_oneshot) print(x,y,z) class PageTwo(tk.Frame): def __init__(self, parent,controller): tk.Frame.__init__(self, parent) self.createWidgets() self.getNumber1 = 0 self.getNumber2 = 0 self.getNumber3 = 0 label1 = tk.Label(self,text=\"Axis\").grid(column=0, row=0) label2 = tk.Label(self,text=\"X\").grid(column=0, row=2) label3 = tk.Label(self,text=\"\").grid(column=0, row=3) label4 = tk.Label(self,text=\"Y\").grid(column=0, row=4) label5 = tk.Label(self,text=\"\").grid(column=0, row=5) label6 = tk.Label(self,text=\"Z\").grid(column=0, row=6) label7 = tk.Label(self,text=\"Position\").grid(column=1, row=0) label8 = tk.Label(self,text=\"-125<=X<=125\").grid(column=1, row=1) label9 = tk.Label(self,text=\"-125<=Y<=125\").grid(column=1, row=3) label10 = tk.Label(self,text=\"0<=Z<=330\").grid(column=1, row=5) label11 = tk.Label(self,text=\"Unit\").grid(column=2, row=0) label12 = tk.Label(self,text=\"degree\").grid(column=2, row=2) label13 = tk.Label(self,text=\"degree\").grid(column=2, row=4) label14 = tk.Label(self,text=\"degree\").grid(column=2, row=6) button1 = ttk.Button(self,text = \"Back\", command = lambda: controller.show_frame(StartPage)) button1.grid(row = 10,column = 2) button2 = ttk.Button(self, text='Quit', width=5, command=self.quit) button2.grid(row = 10,column = 1) button3 = ttk.Button(self, text='Go', width=5, command =lambda:self.show_entry_fields()) button3.grid(row = 10,column = 0) def createWidgets(self): self.entry1 = tk.Entry(self) self.entry1[\"width\"] = 12 self.entry1.grid(row=2, column=1) self.entry2 = tk.Entry(self) self.entry2[\"width\"] = 12 self.entry2.grid(row=4, column=1) self.entry3 = tk.Entry(self) self.entry3[\"width\"] = 12 self.entry3.grid(row=6, column=1) def show_entry_fields(self): deg = math.pi/180 self.getNumber1 = self.entry1.get() self.getNumber2 = self.entry2.get() self.getNumber3 = self.entry3.get() x = self.getNumber1 y = self.getNumber2 z = self.getNumber3 if x =='' or y==''or z =='': x = 0 y = 0 z = 0 print(\"Error\") else: x = float(self.getNumber1) y = float(self.getNumber2) z = float(self.getNumber3) if float(x) >= 125: x = 125 print(\"X_axis is out of range\") if float(y) >= 125: y = 125 print(\"Y_axis is out of range\") if float(z) >= 400: z = 400 print(\"Z_axis is out of range\") if float(x) <= -125: x = -125 print(\"X_axis is out of range\") if float(y) <= -125: y = -125 print(\"Y_axis is out of range\") if float(z) < 0: z = 0 print(\"Z_axis is out of range\") if (float(x) <= -125*math.sin(30*deg)) & (float(y) >= 125*math.cos(30*deg)): x = -125*math.sin(30*deg) y = 125*math.cos(30*deg) if (float(x) <= -125*math.sin(30*deg)) & (float(y) <= -125*math.cos(30*deg)): x = -125*math.sin(30*deg) y = -125*math.cos(30*deg) if (float(x) >= 125*math.sin(30*deg)) & (float(y) >= 125*math.cos(30*deg)): x = 125*math.sin(30*deg) y = 125*math.cos(30*deg) if (float(x) >= -125*math.sin(30*deg)) & (float(y) <= -125*math.cos(30*deg)): x = 125*math.sin(30*deg) y = -125*math.cos(30*deg) if float(z) >= 330: z = 330 e=x/1000 # v-rep world unit is meter , r=y/1000 t=z/1000 t = t+0.1165 # t = 0 , heater touch the heat bed ( heat bed is 0.1165 high ) if t <=0: t = 0 vrep.simxFinish(-1) clientID = vrep.simxStart('127.0.0.1', 19998, True, True, 5000, 5) if clientID!= -1: print(\"Connected to remote server\") else: print('Connection not successful') sys.exit('Could not connect') errorCode,plate=vrep.simxGetObjectHandle(clientID,'plate',vrep.simx_opmode_oneshot_wait) if errorCode == -1: print('Can not find plate') sys.exit() errorCode=vrep.simxSetObjectPosition(clientID,plate,-1,[e,r,t], vrep.simx_opmode_oneshot) print(x,y,z) app = Seaofbt() #ani = animation.FuncAnimation(f,animate,interval = 1000) app.mainloop() printer_final.ttt","url":"http://project.mde.tw/blog/40323250ri-zhi-v-rep-3d-printer.html","tags":"2016bg2","title":"40323250日誌 - V-rep & 3D-Printer"},{"text":"V-rep 的使用與學習 Onshape繪製V-rep零件 : 在Onshape新增一個零件檔 ,選擇隱私或者公開 ,目前每個人擁有的容量為10mb。 在part studio部分選擇平面當作草圖繪圖 ,功能和大多繪圖軟體相同。 單位設置 : 功能表有一個(x)函數圖示 ,能夠設定變數值 ,方便用於零件設計 ,若新增一個x ,命名為a且值為10的值 ,之後在填入尺寸部分輸入#a ,則該尺寸為10。 零件繪製好之後 ,在Assembly中引入零件。 先按右鍵將底座設定為fix(固定) ,組裝零件須注意 ,因為使用V-rep模擬 ,組裝時零件和零件設定小段距離(offset) ,不要完全貼合(在V-rep較易拆解零件) ,旋轉軸先透過cylindrical_mate和孔配合 ,再利用planar_mate讓軸偏移小段距離。 組合完畢後 ,在Assembly點選右鍵 ,輸出成stl格式檔案。 V-rep 教學 : 導入stl檔案 : 點選左上方工具列File ,import ,mesh ,選取繪製的stl檔案後 ,就可以看到零件了。 調整座標 : 若只看到零件的一部分 ,就是零件倒過來了 ,這時候點選左方零件圖示 ,再選上方工具列 ,將零件座標系設定成V-rep內(World)座標 ,最後點選上方旋轉功能 ,旋轉零件至理想角度。 轉好角度之後 ,點選上方平移功能 ,並調整Z軸高度。 若零件被地板遮住 ,看不到零件 ,可先使用選平移功能 。 拆解零件 : 在V-rep導入的stl檔都會變成一個整體零件 ,而在Onshape先組好是因為零件拆解後較容易定位 ,且座標較容易設定等等。 點選欲拆解之零件後 ,點選工具列 ,編輯 ,Grouping/Merging ,Divide select shapes。 若有照上方Onshape繪製零件方式 ,零件就可以順利拆開。 加入旋轉軸 : 在右側視窗點選右鍵 , Add → Joint → Revolute 新增完成 ,快點兩下圖示 ,可以設定相關性質 橘色框框為旋轉軸長度及直徑 移動旋轉軸至零件主軸 : 先點選欲移動之物件(a.)後 ,按著shift並點選欲移動到的物件(b.) ,之後點選移動調整性質 綠色框框內分別為X、Y、Z重合 ,使旋轉軸與物體在同一軸線上 如果相關參數都設定好了 ,點選右鍵→Edit→使旋轉軸與零件結合成一物件(也可以直接用滑鼠拖曳) 結合後的從屬關係 旋轉軸(馬達)設定 : 先將各部位組立完成 設定底座Dynamic性質 , ( X = 不打勾 ) Body is respondable 指 是否實體化 ,若兩個實體化物件互相碰撞 ,會依照物理設定做相對反應。 設定Revolute_joint(馬達)性質 設定旋轉軸Dynamic性質 ,設為動態物件 設定旋轉桿Dynamic性質 都設定好之後 ,設定旋轉軸(馬達)程式 ,點選左方文件圖示 ,之後在右方Scripts新增一個子程式 在Assciated object選擇STL_Imported_sub(主體) 之後打開左方script ,並加入下面那行程式 設定完之後就可以按start ,跑老師的python範例了 加入攝影機 在物件視窗點選滑鼠右鍵 → add → vision sensor →選擇其中一種類型 vision_sensor類型可分為 : a.為orthographic type 及 b.為perspective type 點兩下圖示設定攝影機性質 ,橘色框框為攝影範圍 , 綠色框框為範圍內的解析度 (2&#94;n ,2~256) ,棕色框框為攝影機大小 將旋轉桿和攝影機結合並設定從屬關係 在物件視窗點選右鍵 ,點選 Remove page ,再次按右鍵新增2個視窗 點選左方第一台預設攝影機後 ,在上方視窗點選右鍵輸入攝影鏡頭 下方視窗則點選新增的攝影機 ,一樣新增攝影鏡頭 下方視窗會是黑色的 ,因為鏡頭所照的地方都是黑色 若將攝影機向下轉 ,就可以照到地板了 ,紅框內是照到旋轉桿 啟動程式來跑看看囉~ dummy ( 虛擬座標 ) : dummy 能夠讓不是從屬性質的物件做相對移動, 常用於close chain, 以irb360範例來說 : a. b.桿為示範物件 將a.及b.桿實體隱藏之後 ,能夠看到從屬於a、b桿下的dummy為重疊狀態 ,並且為互相對應(target) 目的是因為 ,若a桿做出任何動作(移動) ,在它從屬下的dummy會隨著target的dummy做相對運動 ,因此兩桿距離始終會保持固定 零件大小 : size factor 為 目前模型的 比例 ,透過下方 Scaling 可以設定模型倍率 ,若Scaling factor 設為2 ,上方的size factor 會變成2 ,就是原始模型的2倍大 零件座標系 : 導入零件後 ,拆解發現零件的角度與V-rep右下角(World)的座標不同 ,有時對於joint的放置會變得不方便 點選要改變座標的零件後 ,在edit選單下點選Reorient bounding box→with reference frame of world 即可 利用三角建構零件放入joint : 因為手臂有個齒輪 ,且有傾斜角度 ,所以需要透過零件轉換 ,並插入一個圓軸來輔助joint 點選零件後右鍵選取 Edit→Decimate selected shape後 ,選擇三角形數量 (太少圓形會變多角形 ,太多運算會變慢) ,之後點選左方 Toggle shape edit mode 全選所有三角形 ,並點選Extract cylinder後按OK 之後就可以順利放上joint了","url":"http://project.mde.tw/blog/40323250ri-zhi-v-rep-gong-neng-chi-xu-geng-xin-zhong.html","tags":"2016bg2","title":"40323250日誌 - V-rep 功能 (持續更新中)"},{"text":"暑期第一個禮拜的 星期三 進度 目前組了兩個版本，一個是簡易版，沒有多餘零件，另一個是完整版，有畫的零件都組上去了，如圖: 以下是零件 以下是v-rep拆解後的截圖 簡易版 完整版 明天應該就可以開始測試模擬了。 Onshape零件及兩個stl檔案都放在users/g2_files目錄下，歡迎取用。","url":"http://project.mde.tw/blog/40323250ri-zhi-1050629.html","tags":"2016bg2","title":"40323250日誌 - 105/06/29"},{"text":"暑期第一個禮拜的 星期二 目前組合進度 目前遇到的狀況 我把滑塊設定為slider，能在滑軌上做相對移動，但是在拉到一半的時候，Onshape整個圖形就消失了，然後點選左方的zoom to section還是能顯示，但呈現以下狀態 滑鼠選轉及縮放也跟著出問題，點選右方試圖方塊圖又會不見，只能重新再組一次。","url":"http://project.mde.tw/blog/40323250ri-zhi-1050628.html","tags":"2016bg2","title":"40323250日誌 - 105/06/28"},{"text":"Summer project 1.畫3D Printer (V-rep ,Onshape) 2.實驗室網站介面 3.Octopi ,機械手臂 4.OpenCV 5.RGA演算 6.認證主機(Virtual Box) 7.Proxy 8.報告(拍照 ,內容整理) 9.找碩班教授 暑期人數 : 七月:第一組3人 ,第二組4人 八月:第一組3人 ,第二組4人 ,第三組1人 You can't see me","url":"http://project.mde.tw/blog/summer-plan.html","tags":"2016bg2","title":"Summer Plan"},{"text":"OpenCv example with python test 實作系統Ubuntu 14.04 以及 老師整合的檔案 範例網址1. 使用到的圖片 程式碼 import numpy as np import cv2 img = cv2.imread('messi.jpg',0) cv2.imshow('image',img) k = cv2.waitKey(0) if k == 27: # wait for ESC key to exit cv2.destroyAllWindows() elif k == ord('s'): # wait for 's' key to save and exit cv2.imwrite('messigray.png',img) cv2.destroyAllWindows() 執行結果 範例網址2. 程式碼 import numpy as np import cv2 cap = cv2.VideoCapture(0) while(True): # Capture frame-by-frame ret, frame = cap.read() # Our operations on the frame come here gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY) # Display the resulting frame cv2.imshow('frame',gray) if cv2.waitKey(1) & 0xFF == ord('q'): break When everything done, release the capture cap.release() cv2.destroyAllWindows() 執行結果 範例網址3.(同上) 程式碼 import numpy as np import cv2 cap = cv2.VideoCapture(0) Define the codec and create VideoWriter object fourcc = cv2.VideoWriter_fourcc(*'XVID') out = cv2.VideoWriter('output.avi',fourcc, 20.0, (640,480)) while(cap.isOpened()): ret, frame = cap.read() if ret==True: frame = cv2.flip(frame,1) # write the flipped frame out.write(frame) cv2.imshow('frame',frame) if cv2.waitKey(1) & 0xFF == ord('q'): break else: break Release everything if job is finished cap.release() out.release() cv2.destroyAllWindows() 執行結果 得到檔案名稱為output的avi影片檔","url":"http://project.mde.tw/blog/opencvfan-li-zhi-xing.html","tags":"2016bg2","title":"OpenCv範例執行"}]};