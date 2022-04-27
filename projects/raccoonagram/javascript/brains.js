var likeCount = [0, 0, 0, 0, 0, 0];
function likePhoto(num) {
    likeCount[num]++;
    console.log(likeCount);
    document.getElementById("likeCount" + num).innerHTML = likeCount[num];
}
var user = {
    "name": "Angelina",
    "name_last": "Carrero ☑️",
    "followers": ["raccoon", "raccoon", "raccoon", "raccoon", "raccoon", "raccoon", "raccoon", "raccoon", "raccoon", "raccoon"],
    "profile_pic": "https://i.pinimg.com/originals/42/b1/79/42b1795ed414b1dcaae150145e0ca537.jpg",

}
setTimeout(function () { document.getElementById("name").innerHTML = user.name; });
setTimeout(function () { document.getElementById("name_last").innerHTML = user.name_last; });
setTimeout(function () { document.getElementById("followers").innerHTML = "Followers: " + user.followers.length; });
setTimeout(function () { $("#profile_pic").attr("src", user.profile_pic); });
