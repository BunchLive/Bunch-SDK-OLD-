# Bunch-SDK Deeplink

Deeplink SDK allows Bunch to check and quickly link users to the native game 
while perserving audio communication in the background. (iOS)

Please provide the following to us:

## 1.Deeplink URL Scheme
Please provide the deeplink scheme your application is registered to

i.e. flappylives://

## 2.URL Scheme supported params
Please provide desired deeplink output coming from us.

### We can provide 3 different parameters to the deeplink url:
- roomId
- userId
- username

### and we can fit them however you like into your deeplink URL:

We will make the conversion on our server to fit your custom scheme whichever way you prefer:

i.e. flappylives://room?roomId=123&userId=12345&username=awesomej

i.e. flappylives://room/123/userId/12345/username/awesomej


## 3. Game images:
Please provide the assets as specified here:
### Catalog image (landscape), used in game selection : 1000 x 500 <br />
![alt text](https://storage.googleapis.com/z1-rumble.appspot.com/server-assets/Catalog/charades.png "Catalog Image")
<br />
### App store image (square) : 256 x 256<br />
![alt text](https://storage.googleapis.com/z1-rumble.appspot.com/server-assets/Catalog/charades-thumbnail.png "Thumbnail")
<br />
### Lobby image (portrait) : 750 x 1624 (iPhoneX ratio)<br />
![alt text](https://storage.googleapis.com/z1-rumble.appspot.com/server-assets/Games/charades/background.png "Background")
<br />
### Lobby logo (landscape) : (width <= 750, height <= 400)<br />
![alt text](https://storage.googleapis.com/z1-rumble.appspot.com/server-assets/Games/charades/logo.png "Logo")
<br />

## 4. Game catalog copy:
Please provide the copies for each of these fields:

| Field           | Required | Description                                                                      |
|-----------------|----------|----------------------------------------------------------------------------------|
| key             | yes      | unique game key                                                                  |
| title           | yes      |                                                                                  |
| minPlayer       | yes      |                                                                                  |
| maxPlayer       | yes      |                                                                                  |
| subtitle        | yes      | Game description, no restriction on length.                                      |
| shorterSubtitle | yes      | Game description, used in game feature carousel where characters are limited     |
| shareText       | no       | Customized share copy that can be used when inviting another friend to the game. |
| instructionText | no       | Instructional text placed in the game lobby screen before players start game.    |


### Example output JSON:
i.e. Charades
```
{
  key: "charades",
  type: "native",
  title: "Charades",
  imageSource: 'https://storage.googleapis.com/z1-rumble.appspot.com/server-assets/Catalog/charades.png',
  thumbnailImageSource: 'https://storage.googleapis.com/z1-rumble.appspot.com/server-assets/Catalog/charades-thumbnail.png',
  shareText: 'Come play Charades with me on Gameroom!',
  subtitle: "Sing, dance, act or describe clues to help guess the word!",
  shorterSubtitle: "Sing, dance, act and describe clues with friends!",
  orientation: "portrait",
  minPlayer: 2,
  maxPlayer: 8,
  lobbyBackground: "https://storage.googleapis.com/z1-rumble.appspot.com/server-assets/Games/charades/background.png",
  lobbyLogo: "https://storage.googleapis.com/z1-rumble.appspot.com/server-assets/Games/charades/logo.png",
  instructionText: 'Pick a category, guess the word with help from your friends'
}
```
### Game Catalog:
![alt text](./gamecatalog.png "catalog")

### Game Lobby:
![alt text](./gamelobby.png "lobby")
