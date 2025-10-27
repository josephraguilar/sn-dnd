---
name: Waterdeep
location_type: city
continent:
region:
city:
description:
tags:
---
# # [[Waterdeep]]


## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Waterdeep]])
or contains(current_location,[[Waterdeep]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Waterdeep]])
```