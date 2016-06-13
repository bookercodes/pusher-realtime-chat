# :cloud: Realtime Chat

_A realtime chat built using [**Express**](http://expressjs.com/), [**React**](https://facebook.github.io/react/), and [**Pusher**](https://pusher.com/). Live demo coming soon._

## :video_camera: Demo

**[Watch the demo on YouTube](https://www.youtube.com/watch?v=VmkqKEr9j9I)**

## :warning: Notice

Realtime Chat is a **work in progress**. That means

- there are more features to come (most notably, channel user lists via [presence channels](https://pusher.com/docs/client_api_guide/client_presence_channels)) and,
- refactoring is imminent :wink:

## :arrow_down_small: Installation

If you want to run Realtime Chat locally, you'll first need to clone the Git repository and install the project dependencies:

```
git clone https://github.com/alexbooker/pusher-realtime-chat.git
cd pusher-realtime-chat
npm run install
```


Next, you'll want to set some environment variables.

Now, you _could_ set each environment variable by hand, but I recommend that you instead create a local `.env` file for the server to parse. Here's an example `.env` file ([`.env.example`](https://github.com/alexbooker/pusher-realtime-chat/blob/master/.env.example)):

```
PUSHER_APP_ID=YOUR_PUSHER_APP_ID
PUSHER_KEY=YOUR_PUSHER_KEY
PUSHER_SECRET=YOUR_PUSHER_SECRET

TWITTER_CONSUMER_KEY=YOUR_TWITTER_CONSUMER_KEY
TWITTER_CONSUMER_SECRET=YOUR_TWITTER_CONSUMER_SECRET
TWITTER_CALLBACK_URL=YOUR_TWITTER_CALLBACK

DB_SCHEMA=YOUR_MYSQL_SCHEMA_NAME
DB_USERNAME=YOUR_MYSQL_USERNAME
DB_PASSWORD=YOUR_MYSQL_PASSWORD

SESSION_SECRET=SECRET_WITH_WHICH_TO_SIGN_SESSION_COOKIE
```

You should create your own `.env` file in the project root and replace the above placeholder values with your own credentials (attainable from [Twitter](https://apps.twitter.com/) and [Pusher](https://pusher.com/features)).

Once you've done all that, you should be able to run server using the `npm run start` command:

```
npm run start

Server listening on port 3000 in dev mode
webpack built <some_hash> in <x_seconds>
```
