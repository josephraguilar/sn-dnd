---
name: Wonton Witch
location_type: inn
continent: "[[Allyron]]"
region:
city: "[[Caer Callidier]]"
description:
tags:
---
# # [[Wanton Witch]]
A single story half timber Inn [[Kalista]] owns in the slums of [[Caer Callidier]]. It has low ceilings and many wards pasted on the walls and ceilings to ward off the evil of [[Iuz]].

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Wonton Witch]])
or contains(current_location,[[Wonton Witch]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Wonton Witch]])
```