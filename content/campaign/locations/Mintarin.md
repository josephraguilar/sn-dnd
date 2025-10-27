---
name: Minterin
location_type: island
continent:
region:
city:
description: the island Obold pledged his life to Baphomet
tags:
---
# # [[Mintarin]]
A small island said to carry treasure, however, we were told to avoid at all costs because of a powerful & dangerous creature who dwells there. 

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Minterin]])
or contains(current_location,[[Minterin]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Minterin]])
```
## Notes
After a giant [[Aboleth]] attacked our boat, we had to land on the island to do repairs.

[[Holda]] snuck away from the group. We thought she was abducted, tricking us into raiding a temple of [[Baphomet]]. There we ran into a giant minotaur monstrosity with 4 arms and an avatar of [[Baphomet]] . In order to leave safely, [[Obold]] pledged his life to him. 