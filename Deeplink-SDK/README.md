# Gameroom-SDK Deeplink

Deeplink SDK allows Gameroom to check and quickly link users to the native game 
while perserving audio communication in the background. (iOS)

Please provide the following to us:

## 1.Deeplink URL Scheme
The deeplink scheme your application is registered to

i.e. flappylives://

## 2.URL Scheme supported params

### We can provide 3 different parameters to the deeplink url:
- roomId
- userId
- username

### and we can fit them however you like into your deeplink URL:

You can fit it however your app works already, we will make the conversion on our server

i.e. flappylives://room?roomId=123&userId=12345&username=awesomej

i.e. flappylives://room/123/userId/12345/username/awesomej


## 3. Game image.
Our standard game image size is around 1000x500.

## 4. Game catelog list:
We will add the game entry in the following format. Subtitle works best between 50-80 characters.
```
{
  key: "flappy-lives",
  title: "Flappy Lives",
  subtitle: "Flap through the pipes with friends, don’t crash!",
  orientation: "portrait",
  multiplayer: true,
  minPlayer:2,
  maxPlayer:4
}
```

