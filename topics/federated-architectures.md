
# Federated Architectures

### The recurring theme of federation in distributed system

Some editorial choices about this deck:

* Entertaining > Precise
* Cool > Useful
* Future > Present

*(Presenter notes available in the source of these slides)*

<!--
* Today’s topic is federation in distributed systems
* Not the standard paper review
* Jumping to different systems and different abstraction levels
* Let’s get started
-->

---

## IRL Federation

* United Federation of Planets 🖖
* United States 🇺🇸
* Most companies (teams, franchises, branches) 🏭

**Federation**: organization pattern involving a combination of centralized decision-making and as peripheral autonomy

Hybrid of top-down (hierarchical) and peer-to-peer (decentralized)
￼
<!--
* Federation broad concept that exists in different domains
* Sci-fi: Federation of Planets (Star Trek)
* Real world: Federal government of the US
* A large company (say, Google) could be described as multi-level federation of teams.
* Definition: pattern of organization that involves both centralized decision and peripheral autonomy
* Anecdote: Federalism was the hot topic in 80/90s in Italy
    * Idea: give more control to Italy’s region, rather than collect all money in Rome then redistribute it to-down
    * Even if everyone can agree on federation, it’s a long way to agree to details
-->

---

## Federation in Computer Systems

The abstract pattern of Federation is everywhere.

Often in disguise, or called with by different (more precise) names

* DNS
* E-Mail
* Kernel
* CPU architecture

<!--
* Narrow down the scope to computers
* Federation is everywhere
* One example: DNS, hierarchical, top-down resolution.
    * But federated: authoritative DNS are managed independently
    * Authoritative DNS come and go, independently of top-level
* Handwavy example, don’t quote me on this one
    * The way Operating System interacts with CPU and schedules on various core
    * Could be seen as federating chunks of work
    * CPU can has some degree of autonomy on caches, pipelining, branching
* Federation is pervasive in computer systems
-->

---

## Federation in Distributed Systems

Concept of federation is broad overlaps with many concepts we encounter everyday:
* Gateway, Router, Facade patterns
* Orchestration pattern
* Microservices & decentralized systems

Federation is abstract and overlaps with these and more.

In the rest of this deck: practical examples of federation in action

<!--
* Let’s narrow down further to federation in distributed systems
* Federation is everywhere
* But not usually called out explicitly
* Usually because more precise terms exists, sub-types of federation
* Being a broad term it can be confusing
* Example: single endpoint that hides and routes to different services
    * Call it Gateway, or router
* OR service that encapsulates multiple services
    * Making sub-requests, coordinating, assembling the response
    * You would probably describe this as Orchestration or Facade
* In micro services architecture these patterns are everywhere
* Federation term overlaps with these and more concept
* Only if we zoom out and ignore the details, we can see how federation is prevalent
* This is what the rest of this presentation will do:
    * Jump from system to system keep an eye out for federation patterns
 -->

---

## Data federation
### GraphQL & Apollo

> "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data"

Below the API, query federation.

Apollo stores no data, it federates the request to other systems.

Data layout, location, provider can change without affecting users.

<!--
* Simple example of federation used to query data
* GraphQL is all the rage today
* The idea: decouple data as seen by users from data as stored or materialized
* GraphQL is a language to define an API for data
* Apollo is a popular implementation
    * Backend is ready to be connected to various datasources
    * DB, APIs, services, ...
* When a user asks for data, Apollo takes care of the details
* At high level, this is an example of data federation
 -->

---

## Search federation
### Maps Search

Different queries require very different handling, separate indices, ranking, spell-correction model, and more.

* "Starbucks"
  * Nearby locations of a specific chain
  * Or maybe coffee shops
* "1200 Main Street"
  * An address (that exists in hundreds of towns!)
  * Show the closest?
* "1600 Pennsylvania Ave"
  * A nearby address?
  * Or a very famous landmark? (the White House)
* "Paris"
  * Paris, France?
  * Paris, Texas?
  * (many other)

<!--
Search is hard: divide and conquer!

* Service federation
* Break down a complex problem into more manageable parts
* Maps Search
* Open Google Maps and search for “starbucks”
    * Starbucks location near you.
    * What is happening in the backend?
    * Probably, the engine has index of business names and their location, category, and many other details
    * Query includes user location, viewport and more contextual metadata that can help narrow down the most salient locations
* Now search for an address
    * Same address may exists in hundreds of towns
    * Indexing and ranking of addresses is quite different from businesses
    * Furthermore addresses are very different in different parts of the world
* What if I search for a city
    * Paris takes me to France, not to Texas
    * Again, different indexing and ranking
* Same for landmarks, categories, etc
* What I meant to say here is... it gets complicated very quick
* When things get complicated, divide and conquer!
    * Federation to the rescue
 -->

---

## Search federation
### Maps Search Architecture

![federated-search.png](./federated-architectures/federated-search.png)

A collection of small specialized search engines.

 - Category search
 - Address search
 - Contacts search
 - Businesses search
 - Landmark search
 - Geographical entities search
 - ...

And auxiliary services
 - Spelling suggestions
 - User metadata and history
 - Driving time estimation
 - ...

<!--
* Here’s how a maps search engine may look
* Top-level facade, and it may make use of components I left out (eg. Spelling corrections)
* Delegates search to specialized search engines
* Example: pizza
  * Landmark search and address search may say: I got nothing
  * Business search may return some result with pizza in the name
  * Category search would say “pretty sure this is a category search”
  * Re-issue targeted business search with category “pizza restaurant”
* As far as I know, all major search engines are federated this way
  * In reality, a lot more complicated, for example due to language and other conventions that change over the world
-->

---

## Federated storage
### FileCoin

Planetary scale decentralized file storage system.
Utilizes the blockchain to track blocks and reward people for storing them.

Mine (get paid) to offer storage capacity
Pay others to store, serve, replicate, ...

Similar: Threefold (P2P compute grid), LivePeer (video encoding grid), and many more

<!--
* Filecoin: Blockchain based global storage network
  * Not a P2P file-sharing (although it is P2P), more similar to S3 than to Napster
  * Not a cryptocurrency (although it does use its own currency)
* Decentralized planet-wide storage system, anyone can participate in
  * Say you have a few spare hard disk at home
  * Set up a node and ‘rent’ your storage
  * To mine Bitcoin you burn burning CPU, to mine Filecoin store chunks of data
  * Data is encrypted
  * A little more complicated than this: different kinds of nodes getting paid to do different things (store, cache, manage)
  * Currently 1 hexabyte capacity
* P2P federation file coin is just a protocol
  * Nodes are independently operated
  * Pricing scheme, strategy, etc
* Protocol Labs (company) is not an intermediary
* Decentralized networks with fractionalized economies are gaining steam
    * Threefold is similar but for compute (think: SETI or Folding @ Home)
    * More specialized: LivePeer for video encoding
    * And many, many more on the horizon
-->

---

<!--
Federated infrastructure: GAIA-X

European Union next generation cloud
	A federated version of AWS.
Federated resource catalogs: cloud providers can offer resources (compute, storage, bandwidth, …)
Federated services catalog: services and API are advertised, pay per use
Federated data catalogs: various levels of access, license, compensation
Federated identity and trust: regulate and delegate access to data and resources



* Let’s jump to a different domain and talk about federated infrastructure
* The coolest example I could think of is GAIA-X
* An ambitious EU project for next generation cloud
* One way to describe it: AWS but federated, let’s see how
* What I mean by that: instead of a single provider of compute, storage, bandwidth
* GAIA-X works with catalogs
* Big and small cloud providers can register themselves into catalogs
* Advertise their resources, costs, SLAs, etc.
* Applications can use a query language to search and reserve resources
    * Ex: 50 hosts in Italy, 20 in France (with details about specs, cost, connectivity, etc)
* Catalogs are not limited to raw resources
    * Catalog of services
    * An application that has API can advertise it, including costs, rate limits, etc.
* It goes further than that, for example there are catalogs of data
    * License, usage rights, price, …
* As you can imagine, for this to work you need isolation & permissions
    * Which implies you need identity and trust
    * Those systems are also federated and can be plugged in
* The website has many very cool case studies,

—

<EXAMPLE>

* Let’s take one: electronic medical records
    * Your doctor uploads your record
    * Doctor retains access, but ultimately you are in control
    * Ex. Go to a new doctor, grant access
    * Data is private, but others may also access
        * Insurance
        * Your country may have access to aggregated anonymized data
    * Storage and service providers involved in this complex system get paid
* Yet to be seen if this will succeed, but it’s very cool
* Federation is the core principle in this architecture

—

Federated Future of Service Platforms

Uber, AirBnb & co successfully connect demand and supply

Optimize (in order): shareholders, users, providers (e.g., drivers)
win-win-win, for the most part…

Next generation federated platform
Same service, but without make users and providers the stakeholders
Public open-source utilities/services
Surplus is reinvested in development, and split among all participants

Examples: Eva, FairBnb, WindingTree


* Moving on, let’s talk about tech platforms
* One of the ways our lives changed in the last 10 years is marketplace platforms
* Companies like Uber and AirBnB have seen incredible success in connecting demand and supply on large scale
* Companies are first and foremost for-profit ventures
* Successful ones manage to balance goals of making money, providing a service, giving people a way to make money
* 3 goals are not always aligned
    * Example: security of riders of ride-sharing app, it’s expensive to do it very well!
    * Example: protections for drivers, also expensive.
* A new trend is emerging, companies that provide federated platforms
    * Consumers and providers become the shareholders
    * Infrastructure provided for safe negotiation, contact, reputation
    * More similar to open-source utilities than today’s startups
    * Eva is Uber, FairBnB is AirBnB
    * These are just 1:1 conversions, But there’s many more innovative ideas being built

—

Federated social networks

Facebook, Reddit, Discord, Twitter, … great for staying in touch with friends, finding community, discuss current events, …

User’s interest conflicts shareholders interest: privacy, rate of consumption, quality of content

Federated alternatives: Diaspora, Mastodon, Mobilizon

* Next topic: Social Networks
* Facebook, Reddit, Discord, Twitter are great tools to keep us connected
* They do provide great value
* But not without downsides
* Companies make money by mining our data, selling our most private details
* Make money by keeping us engaged, to an unhealthy degree.
    * Use dirty tricks to keep our attention: misinformation or inflammatory content
    * These keep us scrolling
* Top diagram - what we want
* Bottom - what we actually have
* Can we do better?
* Definitely yes! Keep the good parts, social connections
* Dump the bad, monetary exploitation
* In this space, there are some cool projects gaining steam
* Mastodon: federated twitter
* Diaspora: federated Facebook
* Mobilizon: federated Facebook events
* Set up a diaspora node for you and your friends
    * Pretty cheap
    * Full control on how connected you want to be to the rest of the ecosystem
* Example, if you have kids
    * See the value of having a safe platform for them to stay in touch with their friends
    * But protect and segregate them from the big platforms
    * Same goes with your family, neighborhood, your book club

—

Federated IM: Matrix

Federation of independently operated servers
Control on who can come in, what data is exposed to others
End-to-end encryption
Extensible


* Cool new protocol in town
* Federate network of independently run servers
* Each user has a home-server (run by a trusted person)
* Can talk to anyone else in the federation
* E2E encrypted
* Specification is open source, various implementations available
* Element makes money by providing one-click deployments, not by mining and selling your data

—


Federated Data (GraphQL/Apollo)
Divide and Conquer (Maps Search)
Federated Resources Grids (FileCoin)
Federated Infrastructure (GAIA-X)
Federated Platforms (FairBnB, & co.)
Federated Social Networks (Mastodon & co.)
Federated IM (Matrix)


* This concludes my presentation
* I hope you enjoyed it
* I’m going to leave this slide up as we switch to live Q&A
* Slide deck has one more slide with links
* While I’m at it, I’d like to thank Lorin & Ioannis for organizing this group, it’s been a highlight of my time at Netflix
* Feel free to reach out privately
* You can find me on slack but only until the end of the year



References:
https://networkcultures.org/unlikeus/resources/articles/what-is-a-federated-network/
https://www.8bitmen.com/the-ultimate-guide-to-federated-architecture-decentralized-social-networks/
https://en.wikipedia.org/wiki/United_Federation_of_Planets
https://en.wikipedia.org/wiki/Federalism_in_the_United_States
https://graphql.org/
https://www.apollographql.com/
https://filecoin.io/
https://threefold.io/
https://livepeer.org/
https://www.data-infrastructure.eu/GAIAX/Navigation/EN/Home/home.html
https://fairbnb.coop/
https://www.eva.coop/
https://windingtree.com/
https://diaspora.social/
https://joinmastodon.org/
https://mobilizon.org/en/
https://www.matrix.org/




--- -->
