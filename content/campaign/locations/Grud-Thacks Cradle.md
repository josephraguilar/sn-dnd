---
name: Grud-Thacks Cradle
location_type: city
continent: "[[campaign/locations/Faerun]]"
region: "[[Valeen]]"
city:
description:
tags:
---
# # [[Grud-Thacks Cradle]]
A merchant town in [[Valeen]] ran by the chieftan [[Ugmarn]]

## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[Grud-Thacks Cradle]])
or contains(current_location,[[Grud-Thacks Cradle]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[Grud-Thacks Cradle]])
```

## Notes
We helped [[Merillian Cinderglass]] make amends with [[Ugmarn]] here. 

[[Obold]] left his original alms box here. 