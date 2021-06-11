const axios = require('axios')
const whitelist = require('./common_answers.json')

async function postParser (posts) {
  flagged_posts = []
  posts.data.forEach(post => {
    if(post.message !== undefined) {
      whitelist.possibleAnswers.forEach(answer => {
        if (post.message.includes(answer)) {
          flagged_posts.push(post)
        }
      })
    }
  });
  return flagged_posts
}

async function scan (req) {
  data = {}
  const res = await axios.get(`https://graph.facebook.com/v11.0/me?fields=name,posts,hometown&access_token=${req.query.fbToken}`)
  data['hometown'] = res.data.hometown.name
  data['posts'] = await postParser(res.data.posts)
  console.log(data)
  console.log("\x1b[91m----- Scan Complete -----\x1b[39m")
  return data
}

module.exports = {scan}