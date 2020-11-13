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

🌱 This is a living deck. Parts of it are rough. Parts of if I haven't even thought of yet.

🎯 I often oversimplify for the sake of brevity and simplicity.

My english is not great.😳
Please report bugs. 😉

---

# Blockchain vs. Bitcoin

Bitcoin (and cryptocurrency) are the just money apps of the blockchain.

Like Venmo for smartphones.

Smartphones changed our lives profoundly.
Instant driving direction to any place in the world; all of humankind's knowledge in our pockets; ways to learn a new language; summoning a taxi, talk and meet friends and strangers all over the world, etc.

Making it easy to pay friends and businesses (i.e. Venmo) is just one minor incremental improvements.

Similarly, the blockchain apps (DApps -- d for Distributed or Decentralized) will have a profound effect on people's lives.
By making it easier and safer to "collaborate" over the internet we couldn't do before.

---

**Takeaway**:

The blockchain is a family of platform that enable new kinds of collaboration between humans.

Bitcoin is just one dApp (and a pretty clunky one by today's standard).

One wonderful property of blockchain based platforms: nobody owns them.

---

# Bitcoin vs. Ethereum

Bitcoin is a single-purpose chain: you participate in it to trade Bitcoin.
It doesn't do anything else.

Ethereum is a general purpose blockchain that can be used to build many kinds of dApps.

Gaming, gambling, trading, voting and a lot more.

This platform is not owned or controlled by anyone. It belongs to everyone.

Using the chain costs money.
The price paid to use flows into the pockets of the thousands of people all over the world that run Ethereum nodes on their computers.

---

**Observation**:

General purpose blockchain like Ethereum enable a new kind of "startup" model.

The startup does not have to setup and pay for infrastructure.
Because the infrastructure is the blockchain, and users pay-per-use directly to the underlying blockchain.

The startup could still make money by charging a fee on top of the underlying gas costs.

---

Without further ado, here's some cool examples.

---

# Fomo3D

Imagine being at a party and playing this game with everyone present:

 * Place an empty cookie jar and a notepad on a table
 * To play, a player puts a dollar in the jar and writes down name and time of the deposit in the notepad
 * If nobody adds a dollar for 15 minutes, the last person that put a dollar in wins the content of the jar

To get people interested, maybe start with $100 in the jar.

If people play, the sum in the jar may grow quickly.

And the more money in the jar, the more people would pay attention to it and play.

Would you play? What would your strategy be?

---

# Fomo3D (cont.)

This could be a fun game with family or close friends.
In a safe environment where all players are trusted.

But would you play if the jar was in the middle of a town square?
Unlikely, unless you want to spend all day night looking at the jar, making sure it doesn't get stolen.

Would you play over the internet?
Even more unlikely. What guarantees do I have that the system is not "rigged" and nobody wins but the person or company running the game!

---

# Fomo3D (cont.)

*Cue the Blockchain!*

A game like this is *trivial* to implement on top of a general purpose blockchain.

This game is an example of the kind of distributed coordination between humans that the blockchain opens the doors to:

You can play this game with anyone around the world without trusting them or even knowing who they are.
And it would be even safer than playing with your own family or close friends!

In fact, this game (Fomo3D) was one of the earliest 'viral' Ethereum dApps.

 > After the jackpot reached a few million dollars, the contract was hacked and someone managed to steal the jar.
 > The blockchain is great but it's not perfect. We are still figuring things out.

---

# Concept: Smart Contract

The way Fomo3D was implemented is through a *Smart Contract*, which is the fancy name for code that lives and runs in the blockchain.

In this case, the contract code said something like this:

 * If I receive a dollar, add it to the jar, save the address of the sender, and reset the timer
 * If the timer expires, send everything in the jar to the address of the last sender

Players know the address of the contract, and can send it a dollar anytime.
Sending a dollar has a small cost, which goes to pay the underlying blockchain infrastructure operated by people.

Nobody can stop this code from endlessly doing its job.
 * Not the operators of the blockchain infrastructure (to whom this contract is nothing special, it's just one in a trillion)
 * Not the creator of the contract. The creator "set this idea free", retains no control, makes no money from people playing

 > It is not uncommon for creators to include fees or charge for use of their dApps.
 > It's just not the case with the original Fomo3D.

---

**Takeaways**:

Smart contract is code that lives on a general purpose blockchain.

People/players can interact with it and pay-per-use.

The creator/owner can decide to relinquish control, if it makes sense for the dApp.

The dApp lives and thrives without the owner having to run expensive services, or even establish a legal entity.


---

#Concept: Fungible Tokens vs Non-fungible tokens (NFT)

Bitcoin is a *fungible* token. You own a certain quantity of it. You can move amounts between accounts.
In some cases, more can be "created" out of nothing (i.e. mining) according to pre-defined rules in the system.

But not everything is just a number.

Other "things" on the blockhain are more like badges, or Baseball trading cards.
A  *non fungible* token is something that cannot be split.
It is a thing. It may be unique or there may be other copies, but each one is an individual token.

A token can be, for example, a cat!

---

# Crypto Kitties

Crypto Kitties is a dApp game where people collect and breed cats.

Each cat's DNA is stored on the blockchain. The DNA determines the appearances of the cat.

Players can trade cats with each-other and can also breed new cats (with specific rules and time limits).

Most cats are pretty ordinary.
But every once in a while, a cat is born with, say, Dragon wings!

The lucky owner of said cat can decide wether to sell it on the open market, or maybe they can try to breed more dragon-winged cats and make even more money.

A professional breeder would go one step further, they would buy other rare cats from other players (for example a rare fire-breathing cat!).
And then try to breed the fire-breather with the dragon-winged, and hope to get some fire-breathing-dragon-winged kitties!

That double mutation is even more rare, and can fetch a pretty penny on the market!

---

# Crypto Kitties (cont.)

Crypto Kitties became a roaring success (in the niche world of blockchain).

To date, around $25M have been spent on trading cats.

Some people play for fun.
Others made it a full-time job to breed and sell rare cats.

Like in Fomo3D, the creators of the game published the contract and retained no control over it.
The game is going to live as long as the Ethereum blockchain exists.

The contract code that powers Crypto Kitties contains the logic for breeding. Nobody can cheat.

The cost of breeding and trading are payed to the underlying network operators.

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
