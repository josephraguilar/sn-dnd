---
name: Velvet Veil
location_type: stronghold
continent:
region:
city: "[[Baldur's Gate]]"
description:
tags:
---
# # [[Velvet Veil]]
the hideout of the [[Dark Daggers]] in [[Baldur's Gate]]

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Velvet Veil]])
or contains(current_location,[[Velvet Veil]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Velvet Veil]])
```

## Notes
an opulent yet unassuming brothel is the entrance