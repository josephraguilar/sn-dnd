---
name: Temple of Iuz
location_type: stronghold
continent: "[[Allyron]]"
region:
city: "[[Caer Callidier]]"
description:
tags:
---
# [[Temple of the high Cleric]]
The stronghold of [[Arch Bishop Corin Mag]] in [[Caer Callidier]]

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Temple of Iuz]])
or contains(current_location,[[Temple of Iuz]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Temple of Iuz]])
```