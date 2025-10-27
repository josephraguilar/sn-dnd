--- start-multi-column:

```column-settings  
number of columns: 3  
```

```button
name NPC
type note(My New Note) template
action npc
folder campaign/npcs
prompt true
```
^button-jo2j

```button
name Location
type note(My New Note) template
action location
folder campaign/locations
prompt true
```
^button-rdi0

--- end-column ---

```button
name Session
type note(<% tp.date.now("MM-DD-YYYY HH-mm") %>) template
action session
folder campaign/sessions
templater true
```
^button-t47b

```button
name Item
type note(My New Note, tab) template
action magic item
folder campaign/items
prompt true
```
^button-s14w

--- end-column ---

```button
name Faction
type note(My New Note, tab) template
action faction
folder campaign/factions
prompt true
```
^button-1sle

```button
name Monster
type note(My New Note, tab) template
action monster
folder campaign/monsters
prompt true
```
^button-um8z

--- end-multi-column