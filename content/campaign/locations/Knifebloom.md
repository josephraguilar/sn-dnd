---
name: Knifebloom
location_type:
continent:
region:
city: "[[Baldur's Gate]]"
description:
tags:
---
# # [[Knifebloom]]


## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Knifebloom]])
or contains(current_location,[[Knifebloom]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Knifebloom]])
```

## Notes
