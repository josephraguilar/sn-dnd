---
name: Lebor gabala
location_type: region
continent:
region:
city:
description: The promised land for Firbolg
tags:
---
# # [[Lebor Gabala]]
The promise land for Firbolg, which they were driven from by untold calamity. Is said to be untouched by man or monsters. 

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Lebor gabala]])
or contains(current_location,[[Lebor gabala]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Lebor gabala]])
```

## Notes
[[Ophie]] is supposed to be the chosen one of prophecy who is to bring them back to it. 