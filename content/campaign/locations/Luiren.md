---
name: Luiren
location_type: region
continent:
region:
city:
description:
tags:
---
# [[Luiren]]
< I have no idea >

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Luiren]])
or contains(current_location,[[Luiren]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Luiren]])
```

## Notes
