---
name: Calenshan
location_type:
continent:
region:
city:
description:
tags:
---
# # [[Calenshan]]
where [[Galdur Tower]] is located. 

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Calenshan]])
or contains(current_location,[[Calenshan]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Calenshan]])
```

## Notes
