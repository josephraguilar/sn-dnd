---
name: Allyron
location_type: continent
continent:
region:
city:
description:
tags:
---
# # [[Allyron]]
Large land mass off the sword coast of Faerun.

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Allyron]])
or contains(current_location,[[Allyron]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Allyron]])
```