---
name: Krakens Cup
location_type:
continent:
region: "[[Valeen]]"
city: "[[Grud-Thacks Cradle]]"
description:
tags:
---
# # [[Krakens Cup]]
Bar located in [[Grud-Thacks Cradle]]

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Krakens Cup]])
or contains(current_location,[[Krakens Cup]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Krakens Cup]])
```

## Notes
