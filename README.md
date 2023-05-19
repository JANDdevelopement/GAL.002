# GAL.002

## Übersicht:

- [Übersicht:](#übersicht:)
- [So installiert man den Bot:](#so-installiert-man-den-bot:)
- [Beachten:](#beachten:)
- [Dev-Notizen:](#dev-notizen:)

## So installiert man den Bot:

1. Lade die Repository auf deinen PC herunter.
2. Stelle sicher, dass die heruntergeladene Repository sich in einem Pfad befindet der **KEINE LEERZEICHEN HAT**
3. Erstelle eine Datei mit dem Namen ".env" und kopiere den Inhalt aus der Datei mit dem Namen ".env.example" in diese Datei (im selben Ordner).
4. Ersetze die Platzhalter in der ".env" Datei durch deine Werte.
    *    ➥ GPT_TOKEN <- Dein API Token, das du auf https://platform.openai.com/account/api-keys finden kannst.
    *    ➥ DICORD_TOKEN  <- Besuche [diese Webseite](https://discord.com/developers/applications) und folge dieser [Anleitung](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot). Kopiere dir das Token aus [diesem Abschnitt.](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-bot-s-token)
    *    ➥ BOT_USER_ID <- Wechsle nun wieder zum "General Information" Sektor und kopiere dir die **Application ID**.
5. Stelle sicher dass dein Bot im Discord Developer Portal alle Intents aktiviert hat (unter dem BOT Reiter an der linken Seite).
6. Stelle sicher dass du ["node"](https://nodejs.org/en) und ["NPM"](https://www.npmjs.com) installiert hast. Für ein Tutorial klicke [hier](https://phoenixnap.com/kb/install-node-js-npm-on-windows).
7. Wechsle nun in einem Terminal zum Verzeichnis / Dateipfad in das du die Repository heruntergeladen hast. Dieser Ordner sollte etwas mit "Gal.002" heißen, nicht etwa "src" oder "data".
8. Führe "npm install" aus, das lädt alle benötigten Pakete herunter, sofern du NPM installiert hast.
9. Führe "npm run start" aus.
10. Bot startet nicht richtig? Wende dich mit einer Kopie des Errors (Wenn vorhanden) an den Developer.
    *    ➥ Er ist unter "Mr. Galaxy | Chris#0726" auf Discord zu finden. (ID: 454717869620461592)
    *    ➥ Andernfalls bin ich auch hier auf GitHub zu erreichen.   
11. Um deinen Bot nun per DM nutzen zu können, folge bitte folgender Anleitung: [Tutorial](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links). Nachdem der Bot dem Server beigetreten ist kannst du ihn ganz einfach eine Nachricht schicken.

## Beachten:
1. Das nutzen des Bots mit dem eigenem Token kann Kosten verursachen, wenn die Nutzung den kostenlosen Test Betrag im ersten Monat übersteigt, oder der erste Monat vorbei ist.
2. Teile niemals die Daten aus der .env Datei mit jemandem, dies könnte dazu führen dass sich jemand als dein Bot ausgibt, diesen für andere Zwecke nutzt oder dein GPT Token ausgenutzt wird. 

## Dev-Notizen:
1. Bot könnte beim Starten crashen wenn er sich selbst nach einer Nachricht fragen möchte ob er benachrichtigt werden möchte. Tritt dies auf starte den Bot einfach neu.
2. To-Do: Persönlichkeit auswählbar machen vom Nutzer.
3. To-Do: Neue Github Repo?
4. Issue: Bot startet per "npm run start" nicht, da er das script nicht findet.