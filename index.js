const nombre = document.getElementById("name");
const username = document.getElementById("username");
const numberOfLikes = document.getElementById("likes");
const address = document.getElementById("address");
const userLogo = document.getElementById("user");
const imagePost = document.getElementById("post");
const comment = document.getElementById("comment");
const heart = document.getElementById("heart");

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
  {
    name: "Raul Almonte",
    username: "raul_almonte001",
    location: "Dominican Republic, Santiago",
    avatar: "images/me.jpg",
    post: "images/nosotros.jpg",
    comment: "The person who has supported me the most",
    likes: 2560,
  },
];

function firstSection(e) {
  const imgPost = document.createElement("img");
  imgPost.src = posts[e].post;
  const imageAvatar = document.createElement("img");
  imageAvatar.src = posts[e].avatar;
  imagePost.appendChild(imgPost);
  userLogo.prepend(imageAvatar);
  nombre.textContent = posts[e].name;
  address.textContent = posts[e].location;
  username.textContent = posts[e].username;
  comment.textContent = posts[e].comment;
  likes.textContent = `${posts[e].likes} likes`;

  heart.addEventListener("click", function () {
    posts[e].likes += 1;
    console.log(posts[e].likes);
    likes.textContent = `${posts[e].likes} likes`;
  });
}
const answer = prompt("Place a number between 0 to 3");
firstSection(answer);
