---
name: Naivara
location_type:
continent:
region:
city:
description:
tags:
---
# # [[Naivara]]


## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Naivara]])
or contains(current_location,[[Naivara]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Naivara]])
```

## Notes
