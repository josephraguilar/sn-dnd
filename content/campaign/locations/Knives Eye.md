---
name: Knives Eye
location_type:
continent: "[[campaign/locations/Faerun]]"
region:
city: "[[Baldur's Gate]]"
description:
tags:
---
# # [[Knives Eye]]


## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Knives Eye]])
or contains(current_location,[[Knives Eye]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Knives Eye]])
```

## Notes
