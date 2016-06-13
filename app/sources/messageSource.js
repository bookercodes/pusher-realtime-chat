import axios from 'axios'

export const fetchMessagesForChannel = (channelName) => {
  return axios
    .get(`/api/channel/${channelName}/message`)
    .then(({data}) => Promise.resolve(data))
}

export const createMessageForChannel = (text, channelName) => {
  return axios
    .post(`/api/channel/${channelName}/message`, { text })
}
