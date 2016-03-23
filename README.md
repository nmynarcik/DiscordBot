# DiscordBot
This is a forked version of [Chalda's DiscordBot](https://github.com/chalda/DiscordBot). They had a good starting point and I am just adding/tweaking to my needs.

# Features:
- !gif query => returns a gif example !gif cute cats doing stuff
- !image query => returns an image from Google Images (careful, no adult filter)
- !youtube query=> returns a youtube link
- !wiki query=> returns the summary of the first search result on Wikipedia
- !wolfram query => queries Wolfram Alpha for results
- !meme memetype "text1" "text2" => returns a meme image. notice the quotes around text, they are vitally important
- !say text => echos text
- !alias => create custom shorthand commands in channel!
- !join-server => bot will join the requested server
- !talk => talk with the bot!
- @botname => responds when @mentioned
- !translate will can provide translations for text (ex. !translate hello world de)
- channel management!

And much more! Try !help to get a full list of available commands

# Installation

This bot is written to run on top of node.js. Please see https://nodejs.org/en/download/

Once you have node installed running `npm install` from the bot directory should install all the needed packages. If this command prints errors the bot won't work!

## Windows Users
Please note that you must have a working C compiler and Python in your path for
`npm install` to work. The bot has been tested to work on Windows using Visual Studio 2015 Community and Python 2.7, except for `!pullanddeploy`.
* [Installing Node on Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
* [npm errors on Windows](http://stackoverflow.com/questions/21365714/nodejs-error-installing-with-npm)
* [Visual Studio Community 2015](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx)
* [Python 2.7](https://www.python.org/downloads/)


## RSS
You can create an rss.json file adding rss feeds as commands. See rss.json.example for details.

## Special instructions for setting up google search and youtube APIs:

(thanks @SchwererKonigstiger)

1) Create a Custom Search at: https://cse.google.com/cse/create/new

2) Leave the first line blank, and name the search engine anything you wish.

3) Click "Advanced Options" and then type ImageObject.

4) Hit create.

5) On this new page, enable the Image Search in the menu.

6) Then press "Search engine ID" under the Details header.

7) ~Copy this into the auth.json's "google_custom_search" section.~ Put this info in your site's environment variables

Make sure you also have your google server API key, which goes in the "youtube_api_key" section, or the search will fail.

# Running
~Before first run you will need to create an `auth.json` file. The email and password for a discord account are required. The other credentials are not required for the bot to run, but highly recommended as commands that depend on them will malfunction. See `auth.json.example`.~

I stopped using the `auth.json` file just because I got tired of pushing it to herokuapp but not to this repo. So, I am now taking advantage of Heroku's on runtime [environment variables](https://devcenter.heroku.com/articles/config-vars).

To start the bot just run
`node discord_bot.js`.

# Updates
If you update the bot, please run `npm update` before starting it again. If you have
issues with this, you can try deleting your node_modules folder and then running
`npm install` again. Please see [Installation](#Installation).

# ToDo:
* Automatic posting of new items posted to a watched RSS feed
* Automatic posting when a watched streamer goes live
* Have it play music in a specified channel
* Perhaps some compiling and basic JS testing?
* Add `!define` feature
* Hmm, what else?...

# Changelog
This is a changelog since my fork of this repo. Sorted by latest.

## 0.0.4
### 3/23/2016
* Added [Added leet and urban commands](https://github.com/Ulydev/DiscordBot/commit/635b8e57aac343de09e572fae1fbb39b5f9f105f)

## 0.0.3
* Pulled latest from upstream. Broken stuff everywhere!
* Removed Auth.json dependency. Now will grab environment variables from Heroku.

## 0.0.2
* Addition of Google Translate. (TIL: You need a billing account to use.)

## 0.0.1
Edit of Twitch functionality. Provide the amount of viewers currently watching the streamer and some other goodies.
