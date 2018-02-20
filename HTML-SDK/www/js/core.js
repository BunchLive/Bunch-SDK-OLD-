$(function() {
  $('#postMessageButton').click(function(){ 
    window.webkit.messageHandlers.reactNative.postMessage({data: 'hello!'});
  });

  $('#fillLayout').click(function(){
    window.webkit.messageHandlers.reactNative.postMessage({type: 'layout', data: {style:'fill'}});
  });

  $('#defaultLayout').click(function(){
    window.webkit.messageHandlers.reactNative.postMessage({type: 'layout', data: {style:'default'}});
  });

  $('#topHalfscreenLayout').click(function(){
    window.webkit.messageHandlers.reactNative.postMessage({type: 'layout', data: {style:'fill', region:[0,0,1,0.5]}});
  });

  $('#bottomHalfscreenLayout').click(function(){
    window.webkit.messageHandlers.reactNative.postMessage({type: 'layout', data: {style:'fill', region:[0,0.5,1,0.5]}});
  });

  $('#customLayoutSchemeRelative').click(function(){
    let layouts = {
      type:"relative",
      layouts:
      [
    [[0.2,0.2,0.6,0.6]],
    [[0,0.5,1,0.5], [0,0,1,0.5]],
    [[0,0.5,1,0.5], [0.5,0,0.5,0.5], [0,0,0.5,0.5]],
    [[0.5,0.5,0.5,0.5],[0,0.5,0.5,0.5], [0.5,0,0.5,0.5], [0,0,0.5,0.5]]
  ]}
    window.webkit.messageHandlers.reactNative.postMessage({type: 'layout', data: {style:'customfill', region:[0,0,1,1], layouts:layouts}});
  });

  $('#customLayoutSchemeAbsolute').click(function(){
    let layouts = {
      type:"absolute",
      layouts:
      [
    [[0,0,100,100]],
    [[0,0,100,100],[100,100,100,100]],
    [[0,0,100,100],[100,100,100,100], [200,200,100,100]],
    [[0,0,100,100],[100,100,100,100], [200,200,100,100], [300,300,100,100]]
  ]}
    window.webkit.messageHandlers.reactNative.postMessage({type: 'layout', data: {style:'customfill', region:[0,0,1,1], layouts:layouts}});
  });

  $('#customLayoutSchemeAbsolute').click(function(){
    window.webkit.messageHandlers.reactNative.postMessage({type: 'layout', data: {style:'line', region:[0,0,1,1], layouts:layouts}});
  });

  $('#updateoverlay').click(function(){
    // Sending over the order of the layout
    let textoverlay = {
      type:"text",
      value:"Bunch",
      style:{
        fontFamily: "System",
        fontSize: 30,
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        color: "white",
        position: "absolute",
        left:0,
        right:0,
        bottom:0,
        height:40,
        textAlign: 'center',
        alignSelf: "center"
      }
    }

    let viewoverlay = {
      type:"view",
      style:{
        backgroundColor: "red",
        position: "absolute",
        left:0,
        right:0,
        top:0,
        height:10
      }
    }

    let viewoverlay2 = {
      type:"view",
      style:{
        backgroundColor: "green",
        position: "absolute",
        left:0,
        right:100,
        top:0,
        height:10
      }
    }

    // subscriber will depend on the stream id
    window.webkit.messageHandlers.reactNative.postMessage({type: 'overlay', data:{"publisher": [textoverlay, viewoverlay, viewoverlay2]} });
  });

  window.receivedMessageFromReactNative = function(data) {
    alert('Message Received : ' + data);
    console.log(data);
  }
});