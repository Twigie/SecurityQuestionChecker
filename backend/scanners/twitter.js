require('dotenv').config()
const axios = require('axios')
const whitelist = require('./common_answers.json')


function postParser (posts) {
  let flagged_posts = []
  posts.forEach((post) => {
    whitelist.possibleAnswers.forEach((value) => {
      if (post.text.toLowerCase().includes(value)) {
        flagged_posts.push(post.text)
      }
    })
  })
  return flagged_posts
}

async function getAllPosts(posts, meta, ID) {
  let hasNextPage = true
  let allPosts = []
  allPosts = [...allPosts,...posts]
  let nextToken = meta.next_token
  while(hasNextPage) {
    console.log('going')
    const nextPosts = await axios.get(`https://api.twitter.com/2/users/${ID}/tweets`,{headers: {
          "authorization": `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
        }, params: {pagination_token: nextToken}})
    allPosts = [...allPosts, ...nextPosts.data.data]
    if(nextPosts.data.meta.next_token) {
      nextToken = nextPosts.data.meta.next_token
    } else hasNextPage = false
  }
  return allPosts
}

// async function profileScrape(fbID) {
//   const html = await axios.get(`https://www.facebook.com/profile.php?id=${fbID}`)
//   const $ = cheerio.load(await html.html)
//   // console.log(html)
// }

async function scanTW (req) {
  const res = await axios.get(`https://api.twitter.com/2/users/${req.query.twID}/tweets`, {headers: {
    "authorization": `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
  }})
  console.log('final',postParser(await getAllPosts(res.data.data,res.data.meta,req.query.twID)))
  // return data
}

module.exports = {scanTW}