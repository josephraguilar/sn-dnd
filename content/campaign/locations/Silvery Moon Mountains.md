---
name: Silvery Moon Mountains
location_type: region
continent:
region:
city:
description:
tags:
---
# # [[Silvery Moon Mountains]]


## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Silvery Moon Mountains]])
or contains(current_location,[[Silvery Moon Mountains]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Silvery Moon Mountains]])
```

## Notes
[[Irlan Liaric]] is the Vicount
[[Niavara]] is the queen