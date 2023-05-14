# sis

A distributable slack app made using Slack Bolt. It is a chat-bot which can handle messages and commands from slack and perform tasks. It is directed at organizations to use this as a utility bot to render tasks from slack itself using messages or slash commands.

## Services

We use the following services in our app

- Redis: Used to logout and blacklist users. Serves as cache for contests API. Download from [here](https://redis.io/download)

## ENV

We use dotenv package to load our environment variables and thus a `.env` file with following variables nneds to be setup in the root directory:

    SLACK_SIGNING_SECRET=<secret key that slack uses to sign every request>
    SLACK_BOT_TOKEN=<xoxb bot token to subscribe to events>
    SLACK_APP_TOKEN=<xapp app token for setup changes over all installations>
    REDIS_URL=<connection string of redis server>
    PORT=optional:<port to be used>

## Setup

Download the github repository or clone it.

```shell script
git clone https://github.com/NanoNish/sis.git
```

Now install redis services [redis](https://redis.io/topics/quickstart) and start the redis server. To run the project locally use these env variables.

```
REDIS_URL=redis://localhost:6379
```

Install all the package dependencies.

```
npm ci
```

Now you can run the app using the start script

```
npm run start
```

## Components

`src` folder is the source folder where all the magic happens

- `app.ts` driver file of the project
- `router.ts` message to function/script mapping
- `services` all service related functions are kept here
- `scripts` functions to decide the response and tasks
- `utils` utility functions such as validators etc

## 💬 For commit messages

Please start your commits with these prefixes for better understanding among collaborators, based on the type of commit:

    feat:     (addition of a new feature)
    refactor: (refactoring the code: optimization/ different logic of existing code - output doesn't change, just the way of execution changes)
    docs:     (documenting the code, be it readme, or extra comments)
    fix:      (bug fixing)
    chore:    (chore - beautifying code, indents, spaces, camelcasing, changing variable names to have an appropriate meaning)
    patch:    (patches - small changes in code, mainly UI, for example color of a button, increasing size of tet, etc etc)
    conf:     (configurational settings - changing directory structure, updating gitignore, add libraries, changing manifest etc)

Please refer to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for better commit messages.
