---
name: Gloomshadow Hill
location_type: stronghold
continent: "[[Allyron]]"
region:
city: "[[Caer Callidier]]"
description:
tags:
---
# # [[Gloomshadow Hill]]
Stronghold of the [[Gloomshadow]] thieves guild

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Gloomshadow Hill]])
or contains(current_location,[[Gloomshadow Hill]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Gloomshadow Hill]])
```