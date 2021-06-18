const axios = require('axios')
const whitelist = require('./common_answers.json')

let flagged_posts = []

async function postParser (posts, flagged_posts) {
  if (posts !== undefined) {
  posts.data.forEach(async (post, pIndex) => {
    if (post.message !== undefined) {
      whitelist.possibleAnswers.forEach((value) => {
        if (post.message.includes(value)) {
          flagged_posts.push(post)
        }
      })
    }
    if (pIndex == posts.data.length - 1 && posts.paging.next) {
      console.log('Next Page')
      const nextPosts = await axios.get(posts.paging.next)
      if (nextPosts.data == []) {
        return flagged_posts
      } else {
        await postParser(nextPosts.data.posts)
      }
    }
  })}
  return flagged_posts
}

// async function profileScrape(fbID) {
//   const html = await axios.get(`https://www.facebook.com/profile.php?id=${fbID}`)
//   const $ = cheerio.load(await html.html)
//   // console.log(html)
// }

async function scanFB (req) {
  data = {}
  console.log(req.query)
  const res = await axios.get(`https://graph.facebook.com/v11.0/${req.query.fbID}?fields=name,posts,hometown,likes&access_token=${req.query.fbToken}`)
  console.log(res.data)
  data['likes'] = res.data.likes.data
  data['hometown'] = res.data.hometown.name
  data['posts'] = await postParser(res.data.posts, flagged_posts)
  console.log(data)
  return data
}

module.exports = {scanFB}