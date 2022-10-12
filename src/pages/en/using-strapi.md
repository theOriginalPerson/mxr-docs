---
title: Using Strapi
description: Understanding how to connect Strapi to your frontend!
layout: ../../layouts/MainLayout.astro
---

(FYI, this is Strapi V4!)

## Installation

Use the following steps:
1) Open VSCode
2) <code>ctrl + `</code> (look at the top left corner of your keyboard, just under the <code>Esc</code> button)
3) Make sure you're in the main directory (folder)
4) `npx create-strapi-app@latest my-project --quickstart` where "my-project" can be any custom name for your strapi app. Since we're going to use it as a static backend, we'll just
call it `backend` to keep it simple
5) Make sure you install node package modules too! If you're unsure if you have them or not, simply look to the sidebar where all your folders + files are in VSCode, 
and check to make sure they're in the main directory (folder). To install node package modules, run the following command: `npm install`
6) Nice! You made it


## Getting Started

### Getting the Server Up

Command: <code>npm run develop</code>

### Types

#### Single Types

Single types consist of anything that happens one time! Examples include: a homepage, "about us" page, or virtually any kind of landing page that only sees the set of content/data one time.

#### Collection Types

Collections are things collected multiple times. Examples include: users (a combination of their username, email, password, etc), messages, page content, etc.

## What It Looks Like

<iframe width="1583" height="588" src="https://www.youtube.com/embed/4QtrxOU9tpA" title="Strapi Collection Types vs Single Types [#StrapiShorts 2]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Creds go to *Artcoded* for the video

## Extra Resources

- <a href="https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html#open-source-contribution" target="_blank">Strapi V4 Documentation</a>
- <a href="https://www.youtube.com/watch?v=h9vETeRiulY&ab_channel=Strapi" target="_blank">Additional Strapi V4 Video</a>
