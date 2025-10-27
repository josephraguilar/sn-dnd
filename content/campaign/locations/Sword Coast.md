---
name: Sword Coast
location_type: region
continent:
region:
city:
description:
tags:
---
# # [[Sword Coast]]


## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Sword Coast]])
or contains(current_location,[[Sword Coast]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Sword Coast]])
```

## Notes
