# ResuMe User Guide

1. [Introduction](#introduction)
2. [Quick Start](#quick-start)
3. [Features](#features)
    3.1. Viewing help : [help](#viewing-help)<br>
    3.2. Adding an item: [add](#)
    3.3. Listing all items: [list](#)
    3.4. Editing an item: [edit](#)
    3.5. Locating items by name: [find](#)
    3.6. Deleting an item: [delete](#)
    3.7. Viewing items in a resume: [rview](#)
    3.8. Previewing a resume: [rpreview](#)
    3.9. Editing a resume: [redit](#redit)
    3.10. Generating a resume: [rgen](#rgen)
    3.11. Exiting the program : [exit](#exit)
    3.12. Saving the [data](#)
    3.13. Encrypting data files [coming in [v2.0](#)]
4. [FAQ](#fa1)
5. [Command Summary](#command-summary)

# Introduction
The item must be one of the 7 item types:
```sh
No.
Alias
Item type
Attributes
```
| No. | Alias | Item type        | Attributes                                 |
|-----|-------|------------------|--------------------------------------------|
| 1   | pd    | personal details | name, phone number, email, tag             |
| 2   | edu   | education        | name, from, to, description, tag           |
| 3   | achv  | achievements     | name, time, description, tag               |
| 4   | int   | internships      | name, position, from, to, description, tag |
| 5   | proj  | projects         | name, from, to, description, tag           |
| 6   | res   | resumes          | name, tag                                  |
| 7   | tag   | tags             | name                                       |

# Quick Start

# Features
#### 3.1. Viewing help : `help`

#### 3.2. Adding an item: `add`
Adds an item to the ResuMe application

Format: `add -TYPE n/NAME [ATTRIBUTE/VALUE]... [#/TAG]...`

Name is a **compulsory** field of add command, while other attributes are *optional*.

Any item, excluding tags, could have any number of tags *(including 0)*.

A **unique  id** is generated, and will be used to uniquely identify the item in the later commands.

+ Examples:

    > `add -edu n/National University of Singapore f/Aug 2018 t/May 2022 d/Bachelor of Computing`

    > `add -proj n/Orbital f/May 2019 t/July 2019 d/Independent Software Project #/Software Engineer #/UX #UI`

#### 3.3. Listing all items: `list`

#### 3.4. Editing an item: `edit`

Edits an existing item in the ResuMe application

Format: `edit -TYPE ID [ATTRIBUTE/VALUE]... [#/TAG]...`

Edits the item of type `TYPE` with the specified `ID`. The ID refers to the unique identification number given to the item when it was first added. The ID must be a **positive integer** that identifies an existing item.

At least **one** of the optional fields must be provided.

Existing values will be updated to the input values.

When editing tags, **existing tags of the person will be removed** i.e adding of tags is not cumulative.

You can remove **all** the person’s tags by typing `#/` without specifying any tags after it.

+ Examples:

    > `edit -edu 9823 t/May 2023 d/Bachelor of Science`
Edits the ‘from’ and ‘description’ attributes of the education item with ID 9823 to be May 2023 and  Bachelor of Science respectively.

    > `edit -proj 14 n/CP2106 Orbital #/`
Edits the name of the project item with ID 14 to be CP2106 Orbital and clears all existing tags.

#### 3.5. Locating items by name: `find`

Finds the item in the ResuMe application with **matching** keywords.

Format: `find -TYPE KEYWORD [MORE_KEYWORDS]`

The search is **case insensitive**. 
> *e.g. orbital will match Orbital*

The **order** of the keywords does **not** matter. 
> *e.g. Orbital CP2106 will match CP2106 Orbital*

If the `TYPE` is not specified. The program will search across **_all_** items.

Only **_full_** words will be matched. 
>e.g. CP210 will not match CP2106*

+ Examples:

    > `find -project Orbital CP2106`
Returns the project item CP2106 Orbital

    > `find NUS`
Returns **_all_** items with NUS. 
*E.g. NUS Valedictorian, NUS*


#### 3.6. Deleting an item: `delete`

Deletes an **existing** item in the ResuMe application

Format: `delete -TYPE ID`

Deletes the item of type `TYPE` with the specified `ID`. The `ID` refers to the **unique** identification number given to the item when it was first added. The `ID` must be a **positive integer** that identifies an existing item.

Once the item with the specified `ID` is deleted, the `ID` will no longer be used throughout the application.

+ Examples:

    > `delete -edu 9823`
Deletes the education item with `ID` 9823.

    > `delete -proj 14`
Deletes the project item with `ID` 14. 


#### 3.7. Viewing items in a resume: `rview`

Shows **all** items in an existing resume.
Format: `rview ID`

+ Examples: 

    > `rview 135`
    Shows the resume with `ID` 135, listing all of its items.

#### 3.8. Previewing a resume: `rpreview`

Previews the resume in **string** format.

Format: `rpreview ID`

+ Examples: 
    > `rpreview 135`
    Shows the text format  of the resume with `ID` 135.

#### 3.9. Editing a resume: `redit`

Edits an existing resume in the ResuMe application

Format: `redit ID [TYPE/ITEM_IDS] [#/TAG]...`

Edits the resume with the specified `ID`. The `ID` refers to the **unique** identification number given to the item when it was first added. The ID must be a **positive integer** that identifies an existing item of that type. At least **one** of the **optional** fields must be provided.

Existing values will be updated to the input values.

When editing object types and tags, existing **object types** and **tags** of the person will be removed 

> i.e adding of object types and tags are not cumulative.

You can remove **all** the resume’s tags by typing `#/` without specifying any tags after it. Similarly, you can remove **all** items of type `TYPE` by typing  `TYPE/` without specifying any `ID` after it. 

+ Examples:
    > `redit 135 edu/9823 achv/102 201`
Edits the resume of `ID` 135, overriding education content with education item of `ID` 9823, achievement content with achievement items of `ID` 102 and 201. Content of other object types in the resume remain unchanged.

    > `redit 148 edu/ int/ proj/`
Edits the resume of `ID` 135, overriding education content, internship content and project content with empty string. This effectively deletes all education, internship, and project items from the resume. Content of other object types in the resume remain unchanged.

#### 3.10. Generating a resume: `rgen`
Generates a `.pdf` file from an existing resume object.

Format: `rgen ID`

Generates a `.pdf` file from resume object with id `ID`. The `ID` must be a **positive integer** that identifies an existing item.	

+ Examples: 

    > `rgen 1234` 
    Generates a `.pdf` file from resume object with `id` 1234.

# FAQ
# Command Summary

| Type alias | Format                                                            |
|------------|-------------------------------------------------------------------|
| pd         | `add -pd n/NAME [p/PHONE_NUMBER] [e/EMAIL] [g/GITHUB] [#/TAG]...` |
| edu        | `add -edu n/NAME [f/FROM] [t/TO] [d/DESCRIPTION] [#/TAG]...`      |
| achv       | `add -achv n/NAME [t/TIME] [d/DESCRIPTION] [#/TAG]...`            |
| int        | `add -proj n/NAME [f/FROM] [t/TO] [d/DESCRIPTION] [#/TAG]...`     |
| proj       | `add -proj n/NAME [f/FROM] [t/TO] [d/DESCRIPTION] [#/TAG]...`     |
| ski        | `add -ski n/NAME [#/TAG]...`                                      |
| res        | `add -res n/NAME [#/TAG]...`                                      |
