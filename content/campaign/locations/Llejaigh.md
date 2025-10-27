---
name: Llejaigh
location_type:
continent: "[[Allyron]]"
region:
city:
description:
tags:
---
# # [[Llejaigh]]
Village south of [[Caer Callidier]]

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Llejaigh]])
or contains(current_location,[[Llejaigh]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Llejaigh]])
```

## Notes
