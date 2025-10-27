---
name: Caer Callidier
location_type: city
continent: "[[Allyron]]"
region:
city:
description:
tags:
---
# # [[Caer Callidier]]
Large port city in [[Allyron]]

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Caer Callidier]])
or contains(current_location,[[Caer Callidier]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Caer Callidier]])
```
## Notes
has a large bay and the shoreline has a few piers
the docks are full of activity, there is a dockside market. 

the presence of slave trading blocks to sell off slaves to wealthy buyers. 