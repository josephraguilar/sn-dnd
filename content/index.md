# The World of S.N. D&D

## Player Characters
```dataview
table without id
file.link as "Characters",
played_by as "Played By",
race as "Race",
class as "Class",
alignment as "Alignment"
from "campaign/players"
where contains(tags, "player")
sort played_by asc

```

## Truths about the campaign/world

Based in Faerun. The world is ran by a slaving organization who the crew originally found themselves victim to. They are questing to resolve their past issues and overturn the powerful enemies at play. 

## Factions

```dataview
TABLE description as "Description" from "campaign/factions"
```

## Custom rules

- [[Character options]]
- [[ttrpgs//House Rules|House Rules]]

## Sessions

```dataview
table episode as "Summary"
from "campaign/sessions"
sort file.name asc

```

```leaflet
id: Faerun
image: [[Faerun_Full_Map.jpg]]
minZoom: 0
maxZoom: 5
defaultZoom: 1.5
height: 720px
width: 720px
lat: 0
long: 0marker: default,-84.20703125,95.75,,,,

```

## [[Safety Tools]]