---
name: Valeen
location_type: region
continent:
region:
city:
description:
tags:
---
# # [[Valeen]]
a continent where there is a booming orc slave trade occurring. Where [[Thorin]]'s daughter was held. 

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Valeen]])
or contains(current_location,[[Valeen]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Valeen]])
```