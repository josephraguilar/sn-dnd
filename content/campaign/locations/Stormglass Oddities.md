---
name: Stormglass Oddities
location_type:
continent:
region:
city:
description:
tags:
---
# # [[Stormglass Oddities]]
A small shop located in [[Kragthars Respite]] ran by [[Scratch]]

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Stormglass Oddities]])
or contains(current_location,[[Stormglass Oddities]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Stormglass Oddities]])
```

## Notes
