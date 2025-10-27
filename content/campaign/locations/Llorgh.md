---
name: Llorgh
location_type: island
continent:
region:
city:
description: Obold's home island.
tags:
---
# # [[Llorgh]]
An island where 5 Goliath brothers are breeding with human women to become paladins of [[Iuz]].

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Llorgh]])
or contains(current_location,[[Llorgh]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Llorgh]])
```
## Notes
[[Obold]]'s home island and where his mother was killed. 