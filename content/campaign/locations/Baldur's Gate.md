---
name: Baldurs Gate
location_type: city
continent:
region:
city:
description:
tags:
---
# # [[Baldur's Gate]]
A large and infamous port town on the sword coast. 

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Baldurs Gate]])
or contains(current_location,[[Baldurs Gate]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Baldurs Gate]])
```