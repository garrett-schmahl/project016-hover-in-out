$("document").ready(function(){
  console.log($)
  $("img").hover(function(){
    var imageFilePath = $(this).attr("src")
    imageFilePath = imageFilePath.replace("house", "spooky")
    $(this).attr("src", imageFilePath)
  }, function(){
    var imageFilePath = $(this).attr("src")
    imageFilePath = imageFilePath.replace("spooky", "house")
    $(this).attr("src", imageFilePath)
  })
})

