# Bunch-SDK Deeplink

Deeplink SDK allows Bunch to check and quickly link users to the native game 
while perserving audio communication in the background. (iOS)

Please provide the following to us:

## 1.Deeplink URL Scheme
Please provide the deeplink scheme your application is registered to

i.e. flappylives://

More info on deeplink URL schemes: https://developer.apple.com/documentation/uikit/core_app/communicating_with_other_apps_using_custom_urls

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
Please provide the value for each of these fields:

| Field           | Required | Description                                                                      |
|-----------------|----------|----------------------------------------------------------------------------------|
| key             | yes      | unique game key                                                                  |
| appId           | yes      | AppStore app ID                                                                  |
| title           | yes      |                                                                                  |
| minPlayer       | yes      |                                                                                  |
| maxPlayer       | yes      |                                                                                  |
| subtitle        | yes      | Game description, no restriction on length.                                      |
| shorterSubtitle | yes      | Game description, used in game feature carousel where characters are limited (80 characters)     |
| shareText       | no       | Customized share copy that can be used when inviting another friend to the game. |
| instructionText | no       | Instructional text placed in the game lobby screen before players start game.    |


### Game Catalog Example:
![alt text](https://github.com/500LABS/Gameroom-SDK/blob/master/Deeplink-SDK/gamecatalog.PNG "catalog")

### Game Lobby Example:
![alt text](https://github.com/500LABS/Gameroom-SDK/blob/master/Deeplink-SDK/gamelobby.PNG "lobby")
