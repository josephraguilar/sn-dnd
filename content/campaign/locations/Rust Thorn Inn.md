---
name: Rust Thorn Inn
location_type:
continent:
region:
city:
description:
tags:
---
# # [[Rust Thorn Inn]]
< I have no idea >

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Rust Thorn Inn]])
or contains(current_location,[[Rust Thorn Inn]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Rust Thorn Inn]])
```

## Notes
