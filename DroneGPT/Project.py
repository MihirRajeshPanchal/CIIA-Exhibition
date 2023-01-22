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

background = Label(master= chatWindow, image = bgimg)
background.pack()

logoimg = ImageTk.PhotoImage(Image.open('DroneGPT/Photos/logo.jfif').resize((500,500)))
logobtn = Button(chatWindow, image=logoimg, bg="#323232", activebackground="#323232", relief=RAISED, bd=3,command=logo)
logobtn.place(x=540,y=130)

titletxt=Label(master=chatWindow,text="DroneGPT",justify='center',font=("Helvetica"))
titletxt.place(x=500,y=60,width=580)

infotxt=Label(master=chatWindow,text="Click the Button above to ask questions !!!",justify='center',font=("Helvetica"))
infotxt.place(x=500,y=700,width=580)

cpyrghttxt=Label(master=chatWindow,text="Made with Love ❤️ by Team AgroDrone",justify='center',font=("Helvetica"))
cpyrghttxt.place(x=1230,y=770,width=300)

root.mainloop()