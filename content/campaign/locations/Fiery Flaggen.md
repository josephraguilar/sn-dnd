---
name: Fiery Flaggen
location_type: inn
continent: "[[campaign/locations/Faerun]]"
region:
city: "[[Waterdeep]]"
description:
tags:
---
# # [[Fiery Flaggen]]
Bar owned by [[Kalista]] in [[Waterdeep]] 

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Fiery Flaggen]])
or contains(current_location,[[Fiery Flaggen]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Fiery Flaggen]])
```

## Notes
