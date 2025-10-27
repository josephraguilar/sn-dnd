---
name: Kragthars Respite
location_type: city
continent:
region: "[[Valeen]]"
city:
description:
tags:
---
# # [[Kragthars Respite]]
port town in [[Valeen]]

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Kragthars Respite]])
or contains(current_location,[[Kragthars Respite]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Kragthars Respite]])
```