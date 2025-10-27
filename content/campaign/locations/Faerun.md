---
name: Faerun
location_type: continent
continent:
region:
city:
description:
tags:
---
# # [[campaign/locations/Faerun]]


## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Faerun]])
or contains(current_location,[[Faerun]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Faerun]])
```

## Notes
