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
# background = Label(master= chatWindow, background="grey")
background.pack()

logoimg = ImageTk.PhotoImage(Image.open('DroneGPT/Photos/logo.jfif').resize((100,100)))
logobtn = Button(chatWindow, image=logoimg, bg="#323232", activebackground="#323232", relief=RAISED, bd=3,command=logo)
logobtn.place(x=720,y=130)

search= Image.open("DroneGPT/Photos/search.png")
resize_image = search.resize((20,20))
search = ImageTk.PhotoImage(resize_image)

mic= Image.open("DroneGPT/Photos/mic.png")
resize_image = mic.resize((20,20))
mic = ImageTk.PhotoImage(resize_image)

query = Entry(master=chatWindow, background="grey", font=("Helvetica", 20))
query.place(x=200,y=300,width=1090,height=35)

searchbtn = Button(master=chatWindow,text="Search",image = search, command=textgpt)
searchbtn.place(x=1310,y=305)


audiobtn = Button(master=chatWindow,text="Audio",image = mic, command=dronegpt)
audiobtn.place(x=1350,y=305)

ans = Entry(master=chatWindow, background="#ffffff", font=("Helvetica", 20) ,textvariable=v)
ans.place(x=200,y=450,width=1190,height=305)

cpyrghttxt=Label(master=chatWindow,text="Made with Love ❤️ by Team AgroDrone",justify='center',font=("Helvetica"))
cpyrghttxt.place(x=1230,y=770,width=300)

root.mainloop()