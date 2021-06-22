const axios = require('axios')
const whitelist = require('./common_answers.json')


function postParser (posts) {
  let flagged_posts = []
  posts.forEach((post) => {
    if(post.message) {
      whitelist.possibleAnswers.forEach((value) => {
        if (post.message.toLowerCase().includes(value)) {
          flagged_posts.push(post)
        }
      })} else return flagged_posts
  })
  return flagged_posts
}

async function getAllPosts(posts, meta) {
  let hasNextPage = true
  let allPosts = []
  allPosts = [...allPosts,...posts]
  let nextToken = meta.next
  while(hasNextPage) {
    const nextPosts = await axios.get(nextToken)
    if (nextPosts.data.posts) {
      allPosts = [...allPosts, ...nextPosts.data.posts]
      if(nextPosts.data.posts.paging.next) {
        nextToken = nextPosts.data.posts.paging.next
      } else hasNextPage = false
    } else hasNextPage = false
  }
  return allPosts
}

async function scanFB (req) {
  data = {}
  console.log(req)
  const res = await axios.get(`https://graph.facebook.com/v11.0/${req.fbID}?fields=name,posts,hometown,likes&access_token=${req.fbToken}`)

  if (res.data.likes) {data['likes'] = res.data.likes.data}
  if (res.data.hometown) {data['hometown'] = res.data.hometown.name}
  if (res.data.posts) {data['posts'] = postParser(await getAllPosts(res.data.posts.data, res.data.posts.paging))}
  return data
}

module.exports = {scanFB}