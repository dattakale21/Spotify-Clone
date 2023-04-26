import tkinter as tk
from tkinter import *
from tkinter import filedialog
import pygame
import fontTools

global Font_tuple
Font_tuple=("Maiandra GD",12,"bold")

root=tk.Tk()
root.title("sangeet")
root.geometry("500x310")   
root.config(bg="grey15")

pygame.mixer.init()


song_list=tk.Listbox(root,width=60,bg="SeaGreen1",font=Font_tuple)
song_list.pack(pady=20)


def add_songs():
    songs = filedialog.askopenfilename(initialdir="./songs/",title="Add Songs",filetypes=(("mp3 Files","*.mp3"),))
    songs = songs.replace("songs/","")
    song_list.insert(END,songs)

def playsong():
    song = song_list.get(ACTIVE)
    song = f'./songs/{song}.mp3'
    pygame.mixer.music.load(song)
    pygame.mixer.music.play(loops=0)
    
def stopsong():
    pygame.mixer.music.stop()
    song_list.selection_clear(ACTIVE)


global paused
paused = False   
def pause_song():
    global paused
    if paused:
        pygame.mixer.music.unpause()
        paused = False
    else:
        pygame.mixer.music.pause()
        paused = True
        
def nextSong():
    nextSong = song_list.curselection()
    nextSong = nextSong[0]+1
    song = song_list.get(nextSong)
    song = f'./songs/{song}.mp3'
    pygame.mixer.music.load(song)
    pygame.mixer.music.play(loops=0)
    song_list.selection_clear(0,END)
    song_list.selection_set(nextSong,last=None)
    
def previous_song():
    nextSong = song_list.curselection()
    nextSong = nextSong[0]-1
    song = song_list.get(nextSong)
    song = f'./songs/{song}.mp3'
    pygame.mixer.music.load(song)
    pygame.mixer.music.play(loops=0)
    song_list.selection_clear(0,END)
    song_list.selection_set(nextSong,last=None)
    





frame=tk.Frame(root,bg="grey15")
frame.pack() 



previous_btn=tk.Button(frame,text="Previous",font=Font_tuple,fg="green",padx=10,pady=10,command=previous_song)
previous_btn.configure()

play_btn=tk.Button(frame,text="Play",font=Font_tuple ,fg="orange red",padx=10,pady=10,command=playsong)  
play_btn.configure()

pause_btn=tk.Button(frame,text="Pause",font=Font_tuple,fg="violetred2",padx=10,pady=10,command=pause_song) 
pause_btn.configure()

next_btn=tk.Button(frame,text="Next",font=Font_tuple,fg="blue",padx=10,pady=10,command=nextSong) 
next_btn.configure()

stop_btn= tk.Button(frame,text="Stop",font=Font_tuple,fg="red",padx=10,pady=10,command=stopsong)
stop_btn.configure()


previous_btn.pack(side=LEFT,padx=5)
play_btn.pack(side=LEFT,padx=5) 
pause_btn.pack(side=LEFT,padx=5)
stop_btn.pack(side=LEFT,padx=5)
next_btn.pack(side=LEFT,padx=5)

add_songbtn=tk.Button(root,text="Add Songs",font=Font_tuple,padx=10,pady=3,command=add_songs)

add_songbtn.pack(pady=20)


root.mainloop()