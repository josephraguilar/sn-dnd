---
name: Kaer Kallydrh
location_type: city
continent:
region:
city:
description:
tags:
---
# # [[Caer Callidie]]


## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Kaer Kallydrh]])
or contains(current_location,[[Kaer Kallydrh]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Kaer Kallydrh]])
```