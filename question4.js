// =========================
// Question 4: Object + Method + Destructuring
// =========================
let post = {
  username: "yoyo_dev",
  caption: "Learning JavaScript step by step!",
  likes: 0,
  comments: ["Nice!", "Keep going!"],

  addLike: function () {
    this.likes = this.likes + 1;
  }
};

post.addLike();
post.addLike();

console.log("\nQ4 Post likes after addLike:", post.likes);

// Object destructuring
let { username, caption } = post;
console.log("Q4 Username:", username);
console.log("Q4 Caption:", caption);