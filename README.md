# GAL.002
 
## So installiert man den Bot:

1. Lade die Repository auf deinen PC herunter.
2. Erstelle eine Datei mit dem Namen ".env" und kopiere den Inhalt aus der Datei mit dem Namen ".env.example" in diese Datei.
3. Ersetze die Platzhalter durch deine Werte.
    *    ➥ GPT_TOKEN <- Dein API Token, das du auf https://platform.openai.com/account/api-keys finden kannst.
    *    ➥ DICORD_TOKEN  <- Besuche https://discord.com/developers/applications , logge dich ein und erstelle eine APP. 
    Nun klicke auf die APP  und wechsle innerhalb dieser zu dem Sektor "Bot". Es kann sein, dass du bestätigen musst einen neuen zu erstellen. Kopiere dir hier nun das Token, welches du unter dem Namen findest.
    *    ➥ BOT_USER_ID <- Wechsle nun wieder zum "General Information" Sektor und kopiere dir die Application ID.
4. Stelle sicher dass du "node" und "NPM" installiert hast.
5. Wechsle nun zum Verzeichnis in das du dein Bot heruntergeladen hast.
6. Führe "npm run start" aus.
7. Bot startet nicht richtig? Wende dich mit einer Kopie des Errors an den Developer.
    *    ➥ Er ist unter "Mr. Galaxy | Chris#0726" auf Discord zu finden. (ID: 454717869620461592)

## Beachten:
1. Das nutzen des Bots mit dem eigenem Token kann Kosten verursachen, wenn die Nutzung den kostenlosen Test Betrag je Monat übersteigt.
2. Teile niemals die Daten aus der .env Datei mit jemandem, dies könnte dazu führen dass sich jemand als dein Bot ausgibt, diesen für andere Zwecke nutzt oder dein GPT Token ausgenutzt wird.

## Dev-Notizen:
1. Bot könnte beim Starten crashen wenn er sich selbst nach einer Nachricht fragen möchte ob er benachrichtigt werden möchte.
2. Identity Kommentare aus Index entfernen.
3. Persönlichkeit auswählbar machen vom Nutzer.