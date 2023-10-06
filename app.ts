let titleText: string = "App typescript message simple - Entrainement fullstack n°10"; 

let messageText: string = "Ceci est un message"; 

let title: HTMLElement | null = document!.getElementById('title'); 

let message: HTMLElement | null = document!.getElementById('message'); 

title && (title.textContent = titleText);

message && (message.textContent = messageText); 
