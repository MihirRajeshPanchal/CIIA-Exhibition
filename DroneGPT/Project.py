from tkinter import *
from PIL import ImageTk, Image
from ChatBot import *

root=Tk()
root.title("Drone GPT")
root.state("zoomed")

bgimg = Image.open("DroneGPT/Photos/bg.jpg")
resize_image = bgimg.resize((1920,1024))
bgimg = ImageTk.PhotoImage(resize_image)

logoimg = Image.open("DroneGPT/Photos/logo.jfif")
resize_image = logoimg.resize((100,100))
logoimg = ImageTk.PhotoImage(resize_image)


chatWindow = Frame(master=root,width=1920,height=1080)
chatWindow.pack() 

def logo():
    dronegpt()

def textgpt():
    text=query.get()
    ans=get_response(text)
    v.set(ans)
    tts(ans)

v = StringVar()

background = Label(master= chatWindow, image = bgimg)
background.pack()

logoimg = ImageTk.PhotoImage(Image.open('DroneGPT/Photos/logo.jfif').resize((100,100)))
logobtn = Button(chatWindow, image=logoimg, bg="#323232", activebackground="#323232", relief=RAISED, bd=3,command=logo)
logobtn.place(x=540,y=130)

search= Image.open("DroneGPT/Photos/search.png")
resize_image = search.resize((70,70))
search = ImageTk.PhotoImage(resize_image)

mic= Image.open("DroneGPT/Photos/mic.png")
resize_image = mic.resize((70,70))
mic = ImageTk.PhotoImage(resize_image)

query = Entry(master=chatWindow, background="#ffffff", font=("Helvetica", 32))
query.place(x=200,y=250,width=790,height=75)
querytext=Label(master=chatWindow,text="Search Bar",justify='center',font=("Helvetica"))
querytext.place(x=201,y=325,width=790)

searchbtn = Button(master=chatWindow,text="Search",image = search, command=textgpt)
searchbtn.place(x=1010,y=250)
searchtext=Label(master=chatWindow,text="Search",justify='center',font=("Helvetica"))
searchtext.place(x=1010,y=320,width=75)

audiobtn = Button(master=chatWindow,text="Audio",image = mic, command=dronegpt)
audiobtn.place(x=1170,y=250)
audiotxt=Label(master=chatWindow,text="Audio",justify='center',font=("Helvetica"))
audiotxt.place(x=1170,y=320,width=75)

ans = Entry(master=chatWindow, background="#ffffff", font=("Helvetica", 32) ,textvariable=v)
ans.place(x=200,y=450,width=790,height=75)
anstext=Label(master=chatWindow,text="DroneGPT Answer",justify='center',font=("Helvetica"))
anstext.place(x=201,y=450,width=790)

cpyrghttxt=Label(master=chatWindow,text="Made with Love ❤️ by Team AgroDrone",justify='center',font=("Helvetica"))
cpyrghttxt.place(x=1230,y=770,width=300)

root.mainloop()