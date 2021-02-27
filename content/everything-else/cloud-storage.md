---
title: Choosing Cloud Storage
---

These days there are literally hundreds of options when it comes to choosing cloud storage.

Wether it's for personal use, family sharing, for a small project or for a company.

Too many times, I've seen people draw a short list from household names (Dropbox, Amazon, BitTorrent, ...) and then narrow it down, primarily based on cost.

This list of questions is designed to make you stop and think a little more about what you are looking for. Before making a choice that you may soon regret.

I suggest going down the list **twice**.
The first time answer with the *current* needs.
The second time answer with the needs you expect *a year from now* (or your best estimate..).


## Data size

What is the estimated average, minimum, maximum amount of data stored?

How many artifacts will be created on an average day?

How much new data will be created on an average day?

How much old data and how many artifacts are deleted?


## Data and access location

Where (geographically) is the data uploaded from?

Where is downloaded from?


## Access pattern

Are data artifacts downloaded by a single person, or a small group, or a large group of people?

How spread over time are data artifacts spread?

Data lifecycle and lifespan

Are data artifacts ever modified in-place? Or are they immutable (i.e. each modification creates a new artifact)?

How many artifacts are created/modified/deleted every day?


## Permissions model

Should everyone be able to upload, delete anything?

Or should each user only be able to touch a specific set of files?

Or should permissions change per group of users?

How many users?

How many groups?

Is administrators/workers sufficient, or do you need per-project permissions?

Or even per-artifact permissions?


## Discoverability

Which users can see all artifacts? (“See” as in: know they exist)

Which users can see all artifacts for a projects?

Which users can see the full list of projects?


## Integration

What kind of actionable notifications?
Examples: Upload begun, upload completed, download begun download completed, deleted, moved, overwritten, …


## Data classes

Are all artifacts more or less the same? (i.e. intermediate production artifacts)

Or can you group them into well defined categories?


## Metadata

Which metadata is stored in the file itself, and which is stored in an external database?

(e.g., author, project name, creation date, notes from author, next step in pipeline, …)


## Compression

Do artifact shrink in size if compressed?


## Upload & download speed

How important are upload and download speed?

Can files be downloaded overnight?


## Auditing

Do you need an auditable log of all operations?

(i.e. who uploaded/downloaded/deleted/modified what piece of data and when)


## Consequences

What are the consequences of losing ALL the data?
(i.e. the cloud storage provider dumps you)

What are the consequences of losing SOME data?
(i.e. human mistake)

What are the consequences of data being leaked on the internet?


## Legal

Are there restrictions to where data can be stored?
