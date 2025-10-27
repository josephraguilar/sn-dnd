---
name: Galdur Tower
location_type: stronghold
continent:
region: "[[Valeen]]"
city:
description:
tags:
---
# # [[Galdur Tower]]
located in [[Calenshan]]

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Galdur Tower]])
or contains(current_location,[[Galdur Tower]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Galdur Tower]])
```

## Notes
