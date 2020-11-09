---
---

# Crypto Samples


## My thoughts on the impending Crypto ~r~Evolution.

*For S, with ❤️ by Marco*

---

# Samples & Concepts

This is a small collection of some 🤯 crypto projects.

The following concepts are introduced:

 * Blockchain
 * Fungible vs. non-fungible tokens
 * Smart Contracts
 * dApp
 * DAO
 * DeFi

---

# Disclaimers

🌱 This is a living deck. Parts of it are rough. Parts of it haven't been written, or even thought of.

🎯 I often oversimplify for the sake of brevity and simplicity.

 😳 English is not my first language.
Please report bugs. 😉

---

# Blockchain vs. Bitcoin

Bitcoin (and cryptocurrency) are the just money apps of the blockchain.

Like Venmo for smartphones.

Driving direction to any place in the world; all the knowledge of the world at your fingertips; learning a new language; summoning a taxi, talk and meet friends and strangers all over the world, etc.

Making it easy to pay friends and businesses is just one minor incremental improvements.

Similarly, the blockchain apps (DApps -- d for Distributed or Decentralized) will change individuals lives by making it easier and safer to "collaborate" over the internet.


---

# A Brief History of Human Collaboration

At first we communicated in simple ways. Humans would learn from other humans by observing and imitating on a very local scale.

Language: teach and explain others, recall past events, strategize. All on a very local scale.

Written language: memories and facts can be written down and preserved. People can learn from other people that live far away or died years before.

Book libraries and foot messengers: the few people (i.e. kings) with access to this technology can conquer and rule entire continents.

Public libraries, schools: people absorb a lot of information from other people they never met.

Post system: communication beyond the immediate tribe / town / community becomes possible.

TODO

---

# Blockchain vs. Bitcoin (again)

Blockchain is a platform

Bitcoin is just one app (with a dedicated, single-purpose blockchain).

Ethereum is a general purpose blockchain.
It has it's own currency (ETH), but the latter is just a practical necessity.
It's a convenient way to pay for the use of the platform.

Developers can create smart contracts to build their dApps, and users interact with these contracts via transactions.
Transactions have fees that pay for the network cost.

Nobody owns the Ethereum blockchain.

Ethereum is a general purpose (Turing-complete) distributed state machine.

---

# What is a smart contract?

Imagine the following "game" you may play with your friends:

Start with a jar with $100 in it, sitting on the table, with a 5 minutes countdown clock next to it.

If I want to play, I need to put $10 in the jar, and reset the timer.

If 5 minutes pass and nobody else paid to reset the timer, I win and walk away with the money.

But a different player comes along, she puts $10 in (total $120) and resets the timer.
If the timer runs out now, she is the winner of the pot.

As the night goes on, everyone will start to be more and more tempted to sneakily put $10 in and hope everyone else forgets to play.

But as time passes, the pot grows to thousands of dollars and so everyone is paying more and more attention to it.

We may even start to form alliances to keep an eye on the pot and burn less money.

---

# Fun with friends

This kind of game is possible if you trust the people with access to the jar.

You would not play this game in a public place, the jar would get stolen fast.

We could make this into an app. This requires trust in the intermediary (the app/service provider).

This is the state of our world today: we have access to sophisticated coordination services (AirBnb, Uber, Amazon), but they are provided by trusted third parties that have a stake in the game.

This game is trivial to implement as a smart contract on a blockchain.

No intermediaries. Nobody can cheat. No prior trust necessary in anything or anyone except for the blockchain itself.


---

Fomo3D - Smart Contract

```
// One-time initialization
init():
    // Create variables for current amount in the jar and identifier of last player
    set currentAmount = 0
    set lastPlayer = 0x0
    // Create a new timer, that calls the `expire` function below if reaches zero
    set timer = new Timer(expire)

// Contract received a transaction from a user
receive(tx):
  if tx.amount != 10:
    // Reject transaction unless the user included the correct amount of money to play
    reject(tx)
  else:
    // Add the money to the pot, save the player address, reset the timer to 5 minutes from now
    currentAmount += 10
    lastPlayer = tx.sender
    timer.reset(Time.now() + 5 * 60)

// Timer expired
expire():
  // Pay the last player with the total amount in the pot
  new Transaction(this, lastPlayer, currentAmount).send()
  // Reset for the next round
  currentAmount = 0
  lastPlayer = 0x0
```
---

# Takeaway

You can now trust anyone in the world more than you would even trust your own friends or family.

Fomo3D is a trival example. But this paradigm opens the door to collaboration that was not possible before.

It also shows a system that is not owned by anyone. The creator of Fomo3D has no control over it, but also no costs to keep it running.

Eventually, a very crafty hackermanaged to exploit an obscure bug in the underlying blockchain, and made it away with ~$6M in ETH!

This was the early days. Blockchain technology has improved fast in the years since then.

But still. A good reminder that we don't need to trust each-other, but no system is perfect.

---

Fungible Tokens vs Non-fungible tokens (NFT)

Bitcoin and ETH are fungible tokens: you own a certain amount, you can move amounts between accounts.

In some cases, more can be "created" out of nothing (i.e. Bitcoin mining) according to pre-defined rules in the system.

NFTs are not amount, each one of them is like an individual atom. They cannot be split but they can be created and destroyed.
NFTs are the main way contracts talk to each-others.

Let me explain this with cats.

---

# Crypto Kitties

CK is a dApp collectible game. Like Baseball trading cards, but a lot cooler.

Each cat is a NFT on the blockchain. Each cat has a DNA that determines its visual appearance.

Most cats are pretty ordinary.
Cats can be bought/traded from other player. It's a free market.

If you have multiple cats, you can make them breed once a day, but it costs some money.
The offspring will inherit traits from their parent DNA, but there's also chances of mutations.

You may for example get a kitty with dragon wings! Dragon wings are rare, so you may want to keep that cat, or fetch a good amount to sell it.

People may buy rare cats for their collection. Or they may buy them to breed!
Buy a dragon-wings-kitty and a horned kitty, make them breed and hope you get a horned-dragon-kitty, which you can sell for even more money!

---

# Crypto Kitties (cont.)

Crypto Kitties became a roaring success (in the niche world of blockchain).

To date, around $25M have been spent on trading cats.
For some this was a fun game. For others, breeding and selling internet cats became a full-time job.

Like in Fomo3D, the creators of the game published the contract and retained no control over it.
The game is going to live as long as the Ethereum blockchain exists.

The creators were making money by providing a marketplace where buyers and sellers can find eachother conveniently.
And they take a tiny finders fee on each transaction that happens through the marketplace.

But they cannot stop someone else from creating a different, better marketplace.

---

# FileCoin / Protocol Labs

In Bitcoin, you can expense your CPU to try and mine a Bitcoin.

Similarly in FileCoin you can make money by mining.
But instead of burning CPU you mine by storing pieces of data.

Disseminate your data in bits all over the network, and pay a few cents to make sure a certain number of copies exist.

Storage is flexible and configurable (e.g., number of copies, location of the copies, privacy, etc.)

The system built on top of it is aptly name Inter-Planetary File-System (IPFS) can be used by individuals (like Dropbox), organizations (like Google Drive) or even as a backend to serve content at scale (YouTube videos, Wikipedia articles, ...).

Everything is pay as you store/use/replicate.

FileCoin is it's own little parallel economy. It creates a free market where people can offer and buy storage.

---

# FileCoin / Protocol Labs (cont.)

Protocol Labs, the company behind FileCoin is a good example of hybrid company.

It started as startup with VC funding, but once they set FileCoin free, it's going to be out of their control.
It belongs to the internet.

They capitalize on it in non-direct ways
 * Consulting for companies that want to deploy private FileCoin networks
 * Providing accessory services
 * Being the first large-scale storage provider (and hope people are willing to pay more than it costs to run their datacenters).

But they hope to crank out one of these big ideas every couple of years.
Once they set them free, they spin out a side-company to capitalize on it, by being a well-funded player.

But the company moves on to the next big crazy idea.

---

# CuraDAO

Curaçao is a tiny island country in the Caribbean sea. Most of its economy runs on tourism and oil refining.

COVID-19 wiped away both of those, and the economy quickly collapsed.

Flustered by the government incompetence in handling the crisis, a small group of people decided to gather local farmers and workers and give them (blockchain based) tools to coordinate.

For example, tools to trade with each-other directly, in services, manpower, materials, food, supplies, without having to use the hyper-inflated and waky currency.
And tools to allocate money for community projects and for emergencies.

This effectively bootstrapped a second parallel local economy.

This economy includes governance: participants can make proposals (for example how to spend a given community money pool), or even change the rules of the economy itself.

Change of this magnitude is easier when the entire population of a country consists of fewer than 200'000 people.
But still very encouraging that this was successful.

This is how our current economy and government could one day become obsolete.


# CuraDAO (cont.)

DAO: Decentralized Autonomous Organization

The next evolution in human organizations. Can be configured into an infinity of different things (a company, a social network, a state economy).

Based on the blockchain because of the coordination and trust that it can provide.

May include one or more tokens (or currencies).

May or may not include governance (ways to make proposals, vote, change the rules).

Nobody owns it, and it includes mechanisms to block anyone from wielding too much power.

# MetaFactory

# Open Zeppelin (?)

# Just.Game

# GitCoin

# (TBD) Identity and reputation

# (TBD) DeFi

# (TBD) Finance
Compound
