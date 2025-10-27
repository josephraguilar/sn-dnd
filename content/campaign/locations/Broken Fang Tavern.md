---
name: Broken Fang Tavern
location_type: inn
continent:
region: "[[Valeen]]"
city: "[[Kragthars Respite]]"
description:
tags:
---
# # [[Broken Fang Tavern]]
A small inn in [[Valeen]] where the party "handled" [[Grashnak the Skullhunter]]. 
[[Bo Duvall]] likes to hangout here too. 

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Broken Fang Tavern]])
or contains(current_location,[[Broken Fang Tavern]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Broken Fang Tavern]])
```
## Notes
innn in [[Kragthars Respite]] 

where [[Grashnak the Skullhunter]] stays often

[[Bo Duvall]] was staying here when we were in to kill [[Grashnak the Skullhunter]]