---
name: Grumpy Broom
location_type:
continent:
region:
city:
description:
tags:
---
# # [[Grumpy Broom]]
idk, a shop i think. 

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Grumpy Broom]])
or contains(current_location,[[Grumpy Broom]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Grumpy Broom]])
```

## Notes
We met [[Orik]] here. 

