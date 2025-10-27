---
name: <% tp.file.title %>
location_type:
continent:
region:
city:
description:
tags:
---
# # [[<% tp.file.title %>]]


## Relevant People
```dataview
table 
gender as "Gender",
race as "Race",
role as "Role",
description as "Description"
from "campaign/npcs"
WHERE contains(first_appearance,[[<% tp.file.title %>]])
or contains(current_location,[[<% tp.file.title %>]])
SORT file.name ASC
```

## Factions
```dataview
TABLE description as "Description" from "campaign/factions"
where contains(current_location,[[<% tp.file.title %>]])
```

## Notes
