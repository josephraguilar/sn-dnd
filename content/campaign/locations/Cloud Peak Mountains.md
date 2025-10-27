---
name: Cloud Peak Mountains
location_type:
continent:
region:
city:
description:
tags:
---
# # [[Cloud Peak Mountains]]


## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Cloud Peak Mountains]])
or contains(current_location,[[Cloud Peak Mountains]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Cloud Peak Mountains]])
```

## Notes
