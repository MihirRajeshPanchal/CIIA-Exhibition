from tkinter import *
from PIL import ImageTk, Image
from ChatBot import * 
import webbrowser

root=Tk()
root.title("Drone GPT")
root.state("zoomed")

# bgimg = Image.open("DroneGPT/Photos/bg.jpg")
bgimg = Image.open("DroneGPT/Photos/white.png")
resize_image = bgimg.resize((1920,1024))
bgimg = ImageTk.PhotoImage(resize_image)

logoimg = Image.open("DroneGPT/Photos/logo.jfif")
resize_image = logoimg.resize((20,20))
logoimg = ImageTk.PhotoImage(resize_image)

droneGPTimg = Image.open("DroneGPT/Photos/DroneGPT.png")
resize_image = droneGPTimg.resize((420,84))
droneGPTimg = ImageTk.PhotoImage(resize_image)

chatWindow = Frame(master=root,width=1920,height=1080)
chatWindow.pack() 

def logo():
    url = "https://agrodrone.netlify.app/"
    webbrowser.open(url)


def textgpt():
    text=query.get()
    ans.insert(INSERT, "Q- '\033[1m' ")
    ans.insert(INSERT, text)
    ans.insert(INSERT, "\n")
    res=get_response(text)
    ans.insert(INSERT, ">> ")
    ans.insert(INSERT, res)
    ans.insert(INSERT, "\n")
    ans.insert(INSERT, "\n")
    # tts(res)
    
def voicegpt():
    tts("Hello I am DroneGPT")
    text=stt()
    ans.insert(INSERT, text)
    ans.insert(INSERT, "\n")
    res=get_response(text)
    ans.insert(INSERT, res)
    ans.insert(INSERT, "\n")
    tts(res)

v = StringVar()

background = Label(master= chatWindow, image = bgimg)
# background = Label(master= chatWindow, background="grey")
background.pack()

droneGPT = Label(master= chatWindow, image = droneGPTimg)
droneGPT.place(x=800,y=20)

logoimg = ImageTk.PhotoImage(Image.open('DroneGPT/Photos/logo.jfif').resize((100,100)))
logobtn = Button(chatWindow, image=logoimg, bg="#323232", activebackground="#323232", relief=RAISED, bd=3,command=logo)
logobtn.place(x=680,y=10)

search= Image.open("DroneGPT/Photos/search.png")
resize_image = search.resize((55,55))
search = ImageTk.PhotoImage(resize_image)

mic= Image.open("DroneGPT/Photos/mic.png")
resize_image = mic.resize((55,55))
mic = ImageTk.PhotoImage(resize_image)

query = Entry(master=chatWindow, background="#c5c6d0", font=("Helvetica", 30))
query.place(x=40,y=955,width=1700,height=55)

searchbtn = Button(master=chatWindow,text="Search",image = search, command=textgpt)
searchbtn.place(x=1750,y=955)

audiobtn = Button(master=chatWindow,text="Audio",image = mic, command=voicegpt)
audiobtn.place(x=1820,y=955)

ans = Text(master=chatWindow, background="#c5c6d0", font=("Helvetica", 20))
ans.place(x=40,y=120,width=1840,height=825)

# cpyrghttxt=Label(master=chatWindow,text="Made with Love ❤️ by Team AgroDrone",justify='center',font=("Helvetica"))
# cpyrghttxt.place(x=1230,y=770,width=300)

root.mainloop()